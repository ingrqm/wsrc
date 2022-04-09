import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input, Select, Tabs } from 'antd';
import { userAtom } from 'atoms/user';
import { continents, countries, regions } from 'data';
import { useRecoilValue } from 'recoil';
import { ageOptions, languageOptions } from 'forms/sign-up/sign-up.data';

const { TabPane } = Tabs;

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
    <Form layout='vertical' requiredMark={false}>
      <Tabs defaultActiveKey='1' centered>
        <TabPane tab={t('app.dashboard.personalData.tabs.account.title')} key='account'>
          <Form.Item label={t('form.personalData.inputs.userId.label')}>
            <Input value={user.id} disabled />
          </Form.Item>
          <Form.Item label={t('form.personalData.inputs.mail.label')}>
            <Input value={user.mail} disabled />
          </Form.Item>
          <Form.Item label={t('form.personalData.inputs.language.label')}>
            <Select value={user.languageChampionship} options={languageOptions} disabled />
          </Form.Item>
        </TabPane>
        <TabPane tab={t('app.dashboard.personalData.tabs.profile.title')} key='profile'>
          <Form.Item label={t('form.personalData.inputs.name.label')}>
            <Input value={user.name} disabled />
          </Form.Item>
          <Form.Item label={t('form.personalData.inputs.lastName.label')}>
            <Input value={user.lastName} disabled />
          </Form.Item>
          <Form.Item label={t('form.personalData.inputs.age.label')}>
            <Select options={ageOptions} value={user.age} disabled />
          </Form.Item>
          <Form.Item label={t('form.personalData.inputs.phone.label')}>
            <Input value={user.phone} disabled />
          </Form.Item>
        </TabPane>
        <TabPane tab={t('app.dashboard.personalData.tabs.location.title')} key='location'>
          <Form.Item label={t('form.personalData.inputs.continent.label')}>
            <Select options={continentOptions} value={user.continent} disabled />
          </Form.Item>
          <Form.Item label={t('form.personalData.inputs.country.label')}>
            <Select options={countryOptions} value={user.country} disabled />
          </Form.Item>
          <Form.Item label={t('form.personalData.inputs.region.label')}>
            <Select options={regionOptions} value={user.region} disabled />
          </Form.Item>
          <Form.Item label={t('form.personalData.inputs.crew.label')}>
            <Input value={user.crew} disabled />
          </Form.Item>
        </TabPane>
      </Tabs>
    </Form>
  );
};

export default PersonalData;
