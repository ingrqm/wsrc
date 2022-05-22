import { useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { UseQueryResult } from 'react-query';
import { MailOutlined } from '@ant-design/icons';
import { Badge, Button, Col, Form, Input, Modal, Row, Select, Typography } from 'antd';
import {
  AuthActivationProps,
  AuthActivationRet,
  AuthPasswordResetProps,
  AuthPasswordResetRet,
  fetchAuthActivation,
  fetchAuthPasswordReset,
  fetchResultDelete,
  ResultDeleteProps,
  ResultDeleteRet,
  UserDetailsRet,
} from 'api';
import { userAtom } from 'atoms/user';
import { languageChampionshipOptions } from 'data';
import { MutationKey, Permission, QueryKey } from 'enums';
import { useMutationWithError } from 'hooks';
import { useRecoilValue } from 'recoil';
import { FormInputs } from '../user-edit.enum';
import { validationSchema } from '../user-edit.schema';
import { FormTypes } from '../user-edit.types';

const { Paragraph } = Typography;

type Props = {
  values: FormTypes;
  user: UseQueryResult<UserDetailsRet, Error>;
};

const Account = ({ values, user: userQuery }: Props) => {
  const { t } = useTranslation();
  const user = useRecoilValue(userAtom);

  const activation = useMutationWithError<AuthActivationRet, Error, AuthActivationProps>(fetchAuthActivation, {
    mutationKey: MutationKey.activationByUser,
    invalidateQueryKey: [QueryKey.userDetails, QueryKey.usersList, QueryKey.userLogs],
    loadingMessage: t('form.activation.messages.loading'),
    errorMessage: t('form.activation.messages.error'),
    successMessage: t('form.activation.messages.success'),
  });

  const deleteResult = useMutationWithError<ResultDeleteRet, Error, ResultDeleteProps>(fetchResultDelete, {
    mutationKey: MutationKey.resultDelete,
    invalidateQueryKey: [QueryKey.userDetails, QueryKey.usersList, QueryKey.userLogs],
    loadingMessage: t('form.resultDelete.messages.loading'),
    errorMessage: t('form.resultDelete.messages.error'),
    successMessage: t('form.resultDelete.messages.success'),
  });

  const passwordReset = useMutationWithError<AuthPasswordResetRet, Error, AuthPasswordResetProps>(
    fetchAuthPasswordReset,
    {
      mutationKey: MutationKey.passwordReset,
      invalidateQueryKey: [QueryKey.userDetails, QueryKey.userLogs],
      loadingMessage: t('form.passwordReset.messages.loading'),
      errorMessage: t('form.passwordReset.messages.error'),
      successMessage: t('form.passwordReset.messages.success'),
    }
  );

  const permissionOptions = useMemo(
    () =>
      Object.keys(Permission).map((permission) => ({
        value: permission,
        label: t(`data.permission.${permission}`),
        disabled: permission === Permission.superAdmin && user.permission !== Permission.superAdmin,
      })),
    []
  );

  const isDisabled =
    user.permission !== Permission.superAdmin && values[FormInputs.permission] === Permission.superAdmin;

  const handleVerifyMail = () => {
    activation.mutate({ key: userQuery.data?.keyActive as string });
  };

  const handlePasswordReset = () => {
    passwordReset.mutate({
      id: userQuery.data?.id as number,
    });
  };

  const handleDeleteResult = (id: number) => {
    deleteResult.mutate({
      id,
    });
  };

  const handleConfirm = useCallback(async (id: number) => {
    Modal.confirm({
      title: t('form.deleteResult.modal.confirm.title'),
      content: t('form.deleteResult.modal.confirm.content'),
      okText: t('form.deleteResult.modal.confirm.okText'),
      cancelText: t('form.deleteResult.modal.confirm.cancelText'),
      onOk: () => handleDeleteResult(id),
    });
  }, []);

  return (
    <>
      <Form.Item
        name={FormInputs.mail}
        label={t('form.editUser.inputs.mail.label')}
        rules={validationSchema[FormInputs.mail]}
      >
        <Input
          placeholder={t('form.editUser.inputs.mail.placeholder')}
          prefix={<MailOutlined />}
          disabled={isDisabled}
        />
      </Form.Item>
      <Form.Item name={FormInputs.languageChampionship} label={t('form.editUser.inputs.languageChampionship.label')}>
        <Select
          options={languageChampionshipOptions}
          placeholder={t('form.editUser.inputs.languageChampionship.placeholder')}
          filterOption={(search, option) => option?.label.props.children[1].includes(search)}
          disabled={isDisabled}
          showSearch
        />
      </Form.Item>
      <Form.Item name={FormInputs.permission} label={t('form.editUser.inputs.permission.label')}>
        <Select
          options={permissionOptions}
          placeholder={t('form.editUser.inputs.permission.placeholder')}
          disabled={isDisabled}
          showSearch
        />
      </Form.Item>
      <Row>
        <Col span={24} className='mb-5'>
          <Paragraph className='mb-1'>{t('form.editUser.inputs.activeAccount.placeholder')}</Paragraph>
          <div className='flex items-center justify-between'>
            <Badge className='ml-3' color={userQuery.data?.activeAccount ? 'green' : 'red'} />
            {!userQuery.data?.activeAccount && (
              <Button type='link' onClick={handleVerifyMail} disabled={isDisabled}>
                {t('form.editUser.verifyAccount')}
              </Button>
            )}
          </div>
        </Col>
        <Col span={24} className='mb-5'>
          <Paragraph className='mb-1'>{t('form.editUser.inputs.defaultPassword.placeholder')}</Paragraph>
          <div className='flex items-center justify-between'>
            <Badge className='ml-3' color={userQuery.data?.defaultPassword ? 'green' : 'red'} />
            {!userQuery.data?.defaultPassword && (
              <Button type='link' onClick={handlePasswordReset} disabled={isDisabled}>
                {t('form.editUser.defaultPassword')}
              </Button>
            )}
          </div>
        </Col>
        <Col span={24} className='mb-5'>
          <Paragraph className='mb-1'>{t('form.editUser.inputs.hasResult.placeholder')}</Paragraph>
          <div className='flex items-center justify-between'>
            <Badge className='ml-3' color={userQuery.data?.idResult !== null ? 'green' : 'red'} />
            {userQuery.data?.idResult !== null && (
              <Button
                type='link'
                onClick={() => handleConfirm(userQuery.data?.idResult as number)}
                disabled={isDisabled}
              >
                {t('form.editUser.hasResult')}
              </Button>
            )}
          </div>
        </Col>
      </Row>
    </>
  );
};

export default Account;
