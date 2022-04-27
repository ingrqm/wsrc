import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Button, Form, Input, Modal, Steps } from 'antd';
import { fetchEndCompetition, EndCompetitionProps, EndCompetitionRet } from 'api';
import books from 'assets/books';
import { competitionAtom, skipCompetitionAtom } from 'atoms/competition';
import { MutationKey, QueryKey } from 'enums';
import { useMutationWithError } from 'hooks';
import { useRecoilState } from 'recoil';
import { appUrls } from 'urls';
import { getAgeEnum } from 'utils/age';
import { Actions, Main, Navigation, Wrapper } from './test.styled';

const { Step } = Steps;

const Test = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const [currentStep, setCurrentStep] = useState(0);
  const [competition, setCompetition] = useRecoilState(competitionAtom);
  const [skipCompetition, setSkipCompetition] = useRecoilState(skipCompetitionAtom);
  const [form] = Form.useForm();

  const endCompetition = useMutationWithError<EndCompetitionRet, Error, EndCompetitionProps>(fetchEndCompetition, {
    mutationKey: MutationKey.endCompetition,
    invalidateQueryKey: QueryKey.resultDetails,
    loadingMessage: t('form.endCompetition.messages.loading'),
    errorMessage: t('form.endCompetition.messages.error'),
    successMessage: t('form.endCompetition.messages.success'),
    onSuccess: (response) => {
      setCompetition(response);
      navigate(appUrls.app.dashboard);
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

  const handleFinish = useCallback(() => {
    endCompetition.mutate({
      answers: form.getFieldsValue(true),
    });
    setSkipCompetition({
      skipReading: false,
      skipTest: false,
    });
  }, [form]);

  const handleConfirm = useCallback(async () => {
    Modal.confirm({
      title: t('championship.test.modal.confirm.title'),
      content: t('championship.test.modal.confirm.content'),
      okText: t('championship.test.modal.confirm.okText'),
      cancelText: t('championship.test.modal.confirm.cancelText'),
      onOk: handleFinish,
    });
  }, []);

  useEffect(() => {
    if (skipCompetition.skipTest) {
      form.submit();
    }
  }, [skipCompetition.skipTest]);

  return (
    <Wrapper>
      <Navigation>
        <Button className='end-competition' type='primary' onClick={handleConfirm}>
          {t('championship.test.navigation.finish')} <RightOutlined />
        </Button>
      </Navigation>
      <Main>
        {book && (
          <>
            <Steps current={currentStep} className='mb-[36px]'>
              {steps.map((key) => (
                <Step key={key} />
              ))}
            </Steps>
            <Form form={form} layout='vertical' requiredMark={false} onFinish={handleFinish} preserve>
              {steps.map((step) =>
                Object.entries(book.questions).map(
                  ([key, question], i) =>
                    step * 4 <= i &&
                    (step + 1) * 4 > i &&
                    currentStep === step && (
                      <Form.Item label={`${i + 1}. ${question}`} name={key} key={key}>
                        <Input.TextArea rows={4} />
                      </Form.Item>
                    )
                )
              )}
              <Actions>
                <Button onClick={() => setCurrentStep(currentStep - 1)} disabled={currentStep === 0}>
                  <LeftOutlined /> {t('championship.test.navigation.previous')}
                </Button>
                <Button
                  type='primary'
                  className='ml-auto'
                  onClick={() => setCurrentStep(currentStep + 1)}
                  disabled={currentStep === steps.length - 1}
                >
                  {t('championship.test.navigation.next')} <RightOutlined />
                </Button>
              </Actions>
            </Form>
          </>
        )}
      </Main>
    </Wrapper>
  );
};

export default Test;
