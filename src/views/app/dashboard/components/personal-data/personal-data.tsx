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
        <TabPane tab='Account' key='1'>
          <Form.Item label='User ID'>
            <Input value={user.id} disabled />
          </Form.Item>
          <Form.Item label='Email'>
            <Input value={user.mail} disabled />
          </Form.Item>
          <Form.Item label='Language'>
            <Select value={user.language_championship} options={languageOptions} disabled />
          </Form.Item>
        </TabPane>
        <TabPane tab='Profile' key='2'>
          <Form.Item label='Name'>
            <Input value={user.name} disabled />
          </Form.Item>
          <Form.Item label='Last name'>
            <Input value={user.last_name} disabled />
          </Form.Item>
          <Form.Item label='Age'>
            <Select options={ageOptions} value={user.age} disabled />
          </Form.Item>
          <Form.Item label='Phone'>
            <Input value={user.phone} disabled />
          </Form.Item>
        </TabPane>
        <TabPane tab='Location' key='3'>
          <Form.Item label='Continent'>
            <Select options={continentOptions} value={user.continent} disabled />
          </Form.Item>
          <Form.Item label='Country'>
            <Select options={countryOptions} value={user.country} disabled />
          </Form.Item>
          <Form.Item label='Region'>
            <Select options={regionOptions} value={user.region} disabled />
          </Form.Item>
          <Form.Item label='Crew'>
            <Input value={user.crew} disabled />
          </Form.Item>
        </TabPane>
      </Tabs>
    </Form>
  );
};

export default PersonalData;
