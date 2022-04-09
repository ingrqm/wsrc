import { Dispatch, SetStateAction, useCallback, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Modal } from 'antd';
import { fetchUserDetails, UserDetailsRes } from 'api';
import { useQueryWithError } from 'hooks';

type Props = {
  userId: number | undefined;
  setUserId: Dispatch<SetStateAction<number | undefined>>;
};

const EditUserModal = ({ userId, setUserId }: Props) => {
  const { t } = useTranslation();

  const user = useQueryWithError<UserDetailsRes, Error>(
    ['userDetails', userId],
    () => fetchUserDetails({ id: userId as number }),
    {
      enabled: userId !== undefined,
    }
  );

  const isUserEditModalVisible = useMemo(() => userId !== undefined, [userId]);
  const handleUserEditModalCancel = useCallback(() => setUserId(undefined), [setUserId]);

  return (
    <Modal
      visible={isUserEditModalVisible}
      onCancel={handleUserEditModalCancel}
      footer={false}
      title={t('app.users.modal.edit.title', { fullName: `${user?.data?.name} ${user?.data?.lastName}` })}
    >
      form
    </Modal>
  );
};

export default EditUserModal;
