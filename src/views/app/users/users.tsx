import { useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { MoreOutlined, SearchOutlined } from '@ant-design/icons';
import { Badge, Button, Dropdown, Menu, Table, Typography } from 'antd';
import { fetchUsersList, UsersListRes, UsersListRow } from 'api';
import { User, userAtom } from 'atoms/user';
import { compareAsc } from 'date-fns';
import { Permission } from 'enums';
import { useQueryWithError } from 'hooks';
import { useRecoilValue } from 'recoil';
import { appUrls } from 'urls';
import { languageOptions } from 'forms/sign-up/sign-up.data';
import { LanguageChampionship } from 'forms/sign-up/sign-up.enum';
import { FilterSearch } from 'components';
import { EditUserModal } from './components';

const { Title } = Typography;

const Users = () => {
  const user = useRecoilValue(userAtom) as User;
  const [userId, setUserId] = useState<number>();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isAuthorized = useMemo(
    () => [Permission.admin, Permission.superAdmin].includes(user?.permission),
    [user.permission]
  );

  const users = useQueryWithError<UsersListRes, Error>('usersList', fetchUsersList);

  const columns = useMemo(
    () => [
      {
        title: t('app.users.table.header.userId'),
        key: 'id',
        dataIndex: 'id',
        sorter: (a: UsersListRow, b: UsersListRow) => a.id - b.id,
      },
      {
        title: t('app.users.table.header.name'),
        key: 'name',
        dataIndex: 'name',
        sorter: (a: UsersListRow, b: UsersListRow) => a.name.localeCompare(b.name),
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, record: UsersListRow) => record.name.includes(value.toString()),
      },
      {
        title: t('app.users.table.header.lastName'),
        key: 'lastName',
        dataIndex: 'lastName',
        sorter: (a: UsersListRow, b: UsersListRow) => a.lastName.localeCompare(b.lastName),
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, record: UsersListRow) =>
          record.lastName.includes(value.toString()),
      },
      {
        title: t('app.users.table.header.mail'),
        key: 'mail',
        dataIndex: 'mail',
        sorter: (a: UsersListRow, b: UsersListRow) => a.mail.localeCompare(b.mail),
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, record: UsersListRow) => record.mail.includes(value.toString()),
      },
      {
        title: t('app.users.table.header.permission'),
        key: 'permission',
        dataIndex: 'permission',
        render: (permission: string) => t(`data.permission.${permission}`),
        sorter: (a: UsersListRow, b: UsersListRow) =>
          t(`data.permission.${a.permission}`).localeCompare(t(`data.permission.${b.permission}`)),
        filters: Object.values(Permission).map((item) => ({
          text: t(`data.permission.${item}`),
          value: item,
        })),
        onFilter: (value: boolean | string | number, record: UsersListRow) => record.permission === value,
      },
      {
        title: t('app.users.table.header.active'),
        key: 'active',
        dataIndex: 'active',
        render: (active: boolean) => <Badge color={active ? 'green' : 'red'} />,
        // eslint-disable-next-line no-nested-ternary
        sorter: (a: UsersListRow, b: UsersListRow) => (a.active === b.active ? 0 : a.active ? -1 : 1),
        filters: [
          {
            text: (
              <>
                active <Badge color='green' />
              </>
            ),
            value: true,
          },
          {
            text: (
              <>
                inactive <Badge color='red' />
              </>
            ),
            value: false,
          },
        ],
        onFilter: (value: boolean | string | number, record: UsersListRow) => record.active === value,
      },
      {
        title: t('app.users.table.header.language'),
        key: 'language',
        dataIndex: 'language',
        render: (language: LanguageChampionship) => languageOptions.find((lang) => lang.value === language)?.label,
        // eslint-disable-next-line no-nested-ternary
        sorter: (a: UsersListRow, b: UsersListRow) => (a.language === b.language ? 0 : a.language ? -1 : 1),
        filters: languageOptions.map(({ label, value }) => ({
          text: <div className='inline-flex relative top-[4px]'>{label}</div>,
          value,
        })),
        onFilter: (value: boolean | string | number, record: UsersListRow) => record.language === value,
      },
      {
        title: t('app.users.table.header.crew'),
        key: 'crew',
        dataIndex: 'crew',
        sorter: (a: UsersListRow, b: UsersListRow) => a.crew.localeCompare(b.crew),
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, record: UsersListRow) => record.crew.includes(value.toString()),
      },
      {
        title: t('app.users.table.header.join'),
        key: 'join',
        dataIndex: 'join',
        sorter: (a: UsersListRow, b: UsersListRow) => compareAsc(new Date(a.join), new Date(b.join)),
      },
      {
        title: t('app.users.table.header.actions'),
        key: 'action',
        dataIndex: 'id',
        render: (id: number) => (
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item onClick={() => setUserId(id)} key='edit'>
                  {t('app.users.table.header.action.edit')}
                </Menu.Item>
              </Menu>
            }
            placement='bottom'
            trigger={['click']}
            arrow
          >
            <Button type='text' icon={<MoreOutlined />} />
          </Dropdown>
        ),
      },
    ],
    []
  );

  useEffect(() => {
    if (!isAuthorized) {
      navigate(appUrls.error.notAuthorized);
    }
  }, []);

  return !isAuthorized ? null : (
    <>
      <Title level={3}>{t('app.users.title')}</Title>
      <Table
        columns={columns}
        dataSource={users?.data || []}
        scroll={{ x: true }}
        locale={t('components.table', { returnObjects: true })}
        rowKey='id'
      />
      <EditUserModal userId={userId} setUserId={setUserId} />
    </>
  );
};

export default Users;
