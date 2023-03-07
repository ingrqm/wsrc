import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Form, Input, Modal, Popover, Rate, Row, Steps, Typography } from 'antd';
import {
  AddReviewProps,
  AddReviewRet,
  fetchAddReview,
  fetchReviewList,
  fetchUpdateReview,
  ReviewListRet,
  UpdateReviewProps,
  UpdateReviewRet,
} from 'api';
import books from 'assets/books';
import { competitionAtom } from 'atoms/competition';
import { userAtom } from 'atoms/user';
import { MutationKey, Permission, QueryKey, Review as ReviewEnum } from 'enums';
import { useMutationWithError, useQueryWithError } from 'hooks';
import { useRecoilState, useRecoilValue } from 'recoil';
import { appUrls } from 'urls';
import { getAgeEnum } from 'utils/age';
import { getReviewTypeColor } from 'views/app/results/results.utils';
import { Actions, Main, Navigation, Wrapper } from './review.styled';

type FormTypes = {
  [key: string]: number;
};

const { Step } = Steps;
const { Paragraph } = Typography;

const Review = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [values, setValues] = useState<FormTypes>();
  const [competition, setCompetition] = useRecoilState(competitionAtom);
  const user = useRecoilValue(userAtom);
  const [form] = Form.useForm();

  const reviews = useQueryWithError<ReviewListRet, Error>(
    [QueryKey.reviewList, competition.id],
    () => fetchReviewList({ idResult: competition.id as number }),
    {
      enabled: Boolean(competition.id),
    }
  );

  const review = useMemo(() => reviews.data?.find((review) => review.idUser === user.id), [reviews.data, user.id]);

  const handleValuesChange = useCallback(
    (values?: FormTypes): void => {
      if (values) {
        form.setFieldsValue(values);
      }

      setValues(form.getFieldsValue(true));
    },
    [form]
  );

  const addReview = useMutationWithError<AddReviewRet, Error, AddReviewProps>(fetchAddReview, {
    mutationKey: MutationKey.addReview,
    invalidateQueryKey: QueryKey.resultDetails,
    loadingMessage: t('form.addReview.messages.loading'),
    errorMessage: t('form.addReview.messages.error'),
    successMessage: t('form.addReview.messages.success'),
    onSuccess: (response) => {
      setCompetition(response);
      navigate(appUrls.app.results);
      form.resetFields();
      handleValuesChange();
    },
  });

  const updateReview = useMutationWithError<UpdateReviewRet, Error, UpdateReviewProps>(fetchUpdateReview, {
    mutationKey: MutationKey.updateReview,
    invalidateQueryKey: QueryKey.resultDetails,
    loadingMessage: t('form.updateReview.messages.loading'),
    errorMessage: t('form.updateReview.messages.error'),
    successMessage: t('form.updateReview.messages.success'),
    onSuccess: (response) => {
      setCompetition(response);
      navigate(appUrls.app.results);
      form.resetFields();
      handleValuesChange();
    },
  });

  const book = useMemo(
    () =>
      competition.languageChampionship &&
      competition.age &&
      books[competition.languageChampionship][getAgeEnum(competition.age)],
    [competition]
  );

  const steps = useMemo(
    () =>
      (book && Array.from({ length: Math.ceil(Object.keys(book.questions).length / 4) }).map((_, index) => index)) ||
      [],
    [book]
  );

  const initialValues = useMemo(
    () => book && Object.fromEntries(Object.entries(book.questions).map(([key]) => [key, 0])),
    [book]
  );

  const handleFinish = useCallback(() => {
    if (review) {
      updateReview.mutate({
        id: review.id as number,
        review: { ...initialValues, ...form.getFieldsValue(true) },
      });
    } else {
      addReview.mutate({
        idResult: competition.id as number,
        review: { ...initialValues, ...form.getFieldsValue(true) },
      });
    }
  }, [review, competition, initialValues, form]);

  const getReviewType = useCallback(
    (key: string) => {
      const rates =
        reviews.data?.map(({ idUser, review }) => (idUser === user.id ? values?.[key] || 0 : review?.[key] || 0)) || [];
      const permissions = reviews.data?.map(({ permission }) => permission) || [];

      if (permissions.includes(Permission.admin) || permissions.includes(Permission.superAdmin)) {
        return ReviewEnum.admin;
      }

      if (rates.every((value) => value === values?.[key])) {
        return ReviewEnum.consistent;
      }

      return ReviewEnum.inconsistent;
    },
    [user.id, values, review, reviews]
  );

  const handleConfirm = () => {
    Modal.confirm({
      title: review
        ? t('championship.review.modal.confirm.update.title')
        : t('championship.review.modal.confirm.add.title'),
      content: t('championship.review.modal.confirm.content'),
      okText: t('championship.review.modal.confirm.okText'),
      cancelText: t('championship.review.modal.confirm.cancelText'),
      onOk: handleFinish,
    });
  };

  useEffect(() => {
    if (review && values === undefined) {
      handleValuesChange(review.review as FormTypes);
    } else {
      form.resetFields();
    }
  }, [review]);

  return (
    <Wrapper>
      <Navigation>
        <Button className='submit-review px-5' type='primary' onClick={handleConfirm}>
          {t('championship.review.navigation.finish')} <RightOutlined />
        </Button>
      </Navigation>
      <Main>
        {book && competition.answers && (
          <>
            <Steps current={currentStep} className='mb-[36px]'>
              {steps.map((key) => (
                <Step key={key} />
              ))}
            </Steps>
            {steps.map((step) =>
              Object.entries(book.questions).map(
                ([key, question], i) =>
                  step * 4 <= i &&
                  (step + 1) * 4 > i &&
                  currentStep === step && (
                    <Row key={key} className='mb-[48px]'>
                      <Col span={24}>
                        <Paragraph className='mb-[8px]'>
                          {i + 1}. {question}
                        </Paragraph>
                      </Col>
                      <Col xs={{ span: 24 }} md={{ span: 17 }}>
                        <Input.TextArea
                          rows={4}
                          value={(competition?.answers as { [key: string]: string })[key] || ''}
                          disabled
                        />
                      </Col>
                      <Col
                        xs={{ span: 24 }}
                        md={{ span: 6, offset: 1 }}
                        className='flex flex-col justify-center items-center'
                      >
                        <Rate
                          onChange={(value) => handleValuesChange({ [key]: value })}
                          value={values?.[key] || 0}
                          allowHalf
                        />
                        {reviews.data && reviews.data.length > 1 ? (
                          <Popover
                            placement='right'
                            content={reviews.data
                              ?.filter(({ idUser }) => idUser !== user.id)
                              .map(({ name, lastName, phone, permission, review }) => (
                                <>
                                  <Popover
                                    placement='right'
                                    content={
                                      <>
                                        <Paragraph className='mb-0'>{t(`data.permission.${permission}`)}</Paragraph>
                                        <Paragraph className='mb-0'>{phone}</Paragraph>
                                      </>
                                    }
                                  >
                                    <div>
                                      <Paragraph className='mb-0'>
                                        {name} {lastName}
                                      </Paragraph>
                                    </div>
                                  </Popover>

                                  <Paragraph>
                                    {review?.[key] || 0} / {5}
                                  </Paragraph>
                                  {}
                                </>
                              ))}
                          >
                            <Paragraph className='mb-0'>
                              {values?.[key] || 0} / {5} <Badge color={getReviewTypeColor(getReviewType(key))} />
                            </Paragraph>
                          </Popover>
                        ) : (
                          <Paragraph className='mb-0'>
                            {values?.[key] || 0} / {5}
                          </Paragraph>
                        )}
                      </Col>
                    </Row>
                  )
              )
            )}
            <Actions>
              <Button className='px-5' onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep === 0}>
                <LeftOutlined /> {t('championship.review.navigation.previous')}
              </Button>
              <Button
                type='primary'
                className='ml-auto px-5'
                onClick={() => setCurrentStep(currentStep + 1)}
                disabled={currentStep === steps.length - 1}
              >
                {t('championship.review.navigation.next')} <RightOutlined />
              </Button>
            </Actions>
          </>
        )}
      </Main>
    </Wrapper>
  );
};

export default Review;
