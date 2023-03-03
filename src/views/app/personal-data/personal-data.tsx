import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input, Row, Select, Col, Typography } from 'antd';
import { userAtom } from 'atoms/user';
import { continents, countries, regions, ageOptions, languageChampionshipOptions } from 'data';
import { useRecoilValue } from 'recoil';

const { Title } = Typography;

const PersonalData = () => {
  const { t } = useTranslation();
  const user = useRecoilValue(userAtom);

  const continentOptions = useMemo(
    () => continents.map(({ code }) => ({ value: code, label: t(`data.continent.${code}`) })),
    []
  );

  const countryOptions = useMemo(
    () =>
      countries
        .filter(({ continent }) => continent === user.continent)
        .map(({ native, code }) => ({ label: native, value: code })),
    [user.continent]
  );

  const regionOptions = useMemo(
    () =>
      regions.find(({ code }) => code === user.country)?.regions.map((region) => ({ label: region, value: region })) ||
      [],
    [user.continent, user.country]
  );

  return (
    <>
      <Title className='font-normal' level={1}>
        {t('app.dashboard.personalData.title')}
      </Title>
      <Form layout='vertical' requiredMark={false}>
        <Row className='sm:px-0 md:px-10 pt-8'>
          <Col md={12} xs={24}>
            <Form.Item className='p-4' label={t('form.personalData.inputs.mail.label')}>
              <Input size='large' value={user.mail} disabled />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item className='p-4' label={t('form.personalData.inputs.languageChampionship.label')}>
              <Select size='large' value={user.languageChampionship} options={languageChampionshipOptions} disabled />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item className='p-4' label={t('form.personalData.inputs.name.label')}>
              <Input size='large' value={user.name} disabled />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item className='p-4' label={t('form.personalData.inputs.lastName.label')}>
              <Input size='large' value={user.lastName} disabled />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item className='p-4' label={t('form.personalData.inputs.age.label')}>
              <Select size='large' options={ageOptions} value={user.age} disabled />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item className='p-4' label={t('form.personalData.inputs.phone.label')}>
              <Input size='large' value={user.phone} disabled />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item className='p-4' label={t('form.personalData.inputs.continent.label')}>
              <Select size='large' options={continentOptions} value={user.continent} disabled />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item className='p-4' label={t('form.personalData.inputs.country.label')}>
              <Select size='large' options={countryOptions} value={user.country} disabled />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item className='p-4' label={t('form.personalData.inputs.region.label')}>
              <Select size='large' options={regionOptions} value={user.region} disabled />
            </Form.Item>
          </Col>
          <Col md={12} xs={24}>
            <Form.Item className='p-4' label={t('form.personalData.inputs.crew.label')}>
              <Input size='large' value={user.crew} disabled />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default PersonalData;
