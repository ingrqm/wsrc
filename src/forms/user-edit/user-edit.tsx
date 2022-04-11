import { Dispatch, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Col, Form, Modal, Row, Tabs } from 'antd';
import { fetchUserDetails, fetchUserEdit, UserDetailsRet, UserEditProps, UserEditRet } from 'api';
import { MutationKey, QueryKey } from 'enums';
import { useMutationWithError, useQueryWithError } from 'hooks';
import { Account, Location, Logs, Profile } from './components';
import { FormInputs, Tab } from './user-edit.enum';
import { initialValues } from './user-edit.schema';
import { FormTypes } from './user-edit.types';

const { TabPane } = Tabs;

type Props = {
  userId: number | undefined;
  setUserId: Dispatch<SetStateAction<number | undefined>>;
};

const UserEdit = ({ userId, setUserId }: Props) => {
  const { t } = useTranslation();
  const [form] = Form.useForm();
  const [tabKey, setTabKey] = useState(Tab.account);
  const [isNewData, setIsNewData] = useState(false);
  const [values, setValues] = useState(initialValues as FormTypes);
  const isUserEditModalVisible = useMemo(() => userId !== undefined, [userId]);

  const handleValuesChange = useCallback((values?: Partial<FormTypes>): void => {
    if (values) {
      form.setFieldsValue(values);
    }

    setValues(form.getFieldsValue(true));
  }, []);

  const user = useQueryWithError<UserDetailsRet, Error>(
    [QueryKey.userDetails, userId],
    () => fetchUserDetails({ id: userId as number }),
    {
      enabled: userId !== undefined,
      onSuccess: (response) => {
        const res = Object.fromEntries(
          Object.entries(response).filter(([key]) => Object.keys(FormInputs).includes(key))
        );

        if (JSON.stringify(values) !== JSON.stringify(res) && JSON.stringify(values) !== '{}') {
          setIsNewData(true);
        } else {
          handleValuesChange({
            [FormInputs.mail]: response.mail,
            [FormInputs.permission]: response.permission,
            [FormInputs.languageChampionship]: response.languageChampionship,
            [FormInputs.name]: response.name,
            [FormInputs.lastName]: response.lastName,
            [FormInputs.age]: response.age,
            [FormInputs.phone]: response.phone,
            [FormInputs.continent]: response.continent,
            [FormInputs.country]: response.country,
            [FormInputs.region]: response.region,
            [FormInputs.crew]: response.crew,
          });
        }
      },
    }
  );

  const userEdit = useMutationWithError<UserEditRet, Error, UserEditProps>(fetchUserEdit, {
    mutationKey: MutationKey.userEdit,
    invalidateQueryKey: [QueryKey.userDetails, QueryKey.usersList, QueryKey.userLogs],
    loadingMessage: t('form.editUser.messages.loading'),
    errorMessage: t('form.editUser.messages.error'),
    successMessage: t('form.editUser.messages.success'),
    onSuccess: () => {
      setIsNewData(false);
    },
  });

  const isValuesDiffUserData = useMemo(
    () =>
      JSON.stringify(values) ===
        JSON.stringify(
          Object.fromEntries(Object.entries(user.data || {}).filter(([key]) => Object.keys(FormInputs).includes(key)))
        ) && JSON.stringify(values) !== '{}',
    [values, user.data]
  );

  const handleFinish = () => {
    const payload: UserEditProps = {
      id: userId as number,
      [FormInputs.mail]: values[FormInputs.mail],
      [FormInputs.permission]: values[FormInputs.permission],
      [FormInputs.languageChampionship]: values[FormInputs.languageChampionship],
      [FormInputs.name]: values[FormInputs.name],
      [FormInputs.lastName]: values[FormInputs.lastName],
      [FormInputs.age]: values[FormInputs.age],
      [FormInputs.phone]: values[FormInputs.phone],
      [FormInputs.continent]: values[FormInputs.continent],
      [FormInputs.country]: values[FormInputs.country],
      [FormInputs.region]: values[FormInputs.region],
      [FormInputs.crew]: values[FormInputs.crew],
    };

    userEdit.mutate(payload);
  };

  const handleNewData = useCallback(() => {
    setIsNewData(false);

    handleValuesChange({
      [FormInputs.mail]: user.data?.mail,
      [FormInputs.permission]: user.data?.permission,
      [FormInputs.languageChampionship]: user.data?.languageChampionship,
      [FormInputs.name]: user.data?.name,
      [FormInputs.lastName]: user.data?.lastName,
      [FormInputs.age]: user.data?.age,
      [FormInputs.phone]: user.data?.phone,
      [FormInputs.continent]: user.data?.continent,
      [FormInputs.country]: user.data?.country,
      [FormInputs.region]: user.data?.region,
      [FormInputs.crew]: user.data?.crew,
    });
  }, [user.data]);

  const handleConfirm = useCallback(async () => {
    if (await form.validateFields(Object.keys(FormInputs))) {
      Modal.confirm({
        title: t('form.editUser.modal.confirm.title'),
        content: t('form.editUser.modal.confirm.content'),
        okText: t('form.editUser.modal.confirm.okText'),
        cancelText: t('form.editUser.modal.confirm.cancelText'),
        onCancel: handleNewData,
        onOk: form.submit,
      });
    }
  }, [user.data]);

  const handleUserEditModalCancel = useCallback(() => {
    form.resetFields();
    setUserId(undefined);
    setIsNewData(false);
    handleValuesChange();
  }, [setUserId]);

  useEffect(() => {}, [user.data]);

  return (
    <Modal
      visible={isUserEditModalVisible}
      onCancel={handleUserEditModalCancel}
      footer={false}
      title={t('app.users.modal.edit.title', { fullName: `${user.data?.name} ${user.data?.lastName}` })}
      width={tabKey === Tab.logs ? 1000 : 572}
    >
      <Form
        form={form}
        initialValues={initialValues}
        layout='vertical'
        requiredMark={false}
        onFinish={handleFinish}
        onValuesChange={handleValuesChange}
      >
        <Tabs activeKey={tabKey} onTabClick={(key) => setTabKey(key as Tab)} centered>
          <TabPane tab={t('form.editUser.tabs.account.title')} key={Tab.account}>
            <Account values={values} user={user} />
          </TabPane>
          <TabPane tab={t('form.editUser.tabs.profile.title')} key={Tab.profile}>
            <Profile />
          </TabPane>
          <TabPane tab={t('form.editUser.tabs.location.title')} key={Tab.location}>
            <Location values={values} handleValuesChange={handleValuesChange} />
          </TabPane>
          <TabPane tab={t('form.editUser.tabs.logs.title')} key={Tab.logs}>
            <Logs userId={user.data?.id as number} />
          </TabPane>
        </Tabs>
        {tabKey !== Tab.logs && (
          <Row>
            <Col span={24}>
              <Button
                type='primary'
                className='block ml-auto'
                onClick={isNewData ? handleConfirm : form.submit}
                disabled={isValuesDiffUserData}
              >
                {t('form.editUser.submit')}
              </Button>
            </Col>
          </Row>
        )}
      </Form>
    </Modal>
  );
};

export default UserEdit;
