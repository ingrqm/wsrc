import { useTranslation } from 'react-i18next';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Popover, Table, Typography } from 'antd';
import { fetchUserLogs, UserLogsRet, UserLogsRow } from 'api';
import { compareAsc, format } from 'date-fns';
import { Browser, Device, Log, Platform, QueryKey } from 'enums';
import { useQueryWithError } from 'hooks';
import { BrowserIcon, DeviceIcon, LogWithTranslation, PlatformIcon } from 'components';
import { getBrowserIcon } from 'components/browser-icon';
import { getDeviceIcon } from 'components/device-icon';
import { getPlatformIcon } from 'components/platform-icon';

const { Paragraph } = Typography;

type Props = {
  userId: number;
};

const Logs = ({ userId }: Props) => {
  const { t } = useTranslation();

  const logs = useQueryWithError<UserLogsRet, Error>(
    [QueryKey.userLogs, userId],
    () => fetchUserLogs({ id: userId as number }),
    {
      enabled: userId !== undefined,
    }
  );

  const columns = [
    {
      title: t('form.editUser.table.header.action'),
      key: 'action',
      render: ({ action, variables }: UserLogsRow) => (
        <LogWithTranslation action={action as Log} variables={variables} />
      ),
      sorter: (a: UserLogsRow, b: UserLogsRow) => compareAsc(new Date(a.datetime), new Date(b.datetime)),
    },
    {
      title: t('form.editUser.table.header.datetime'),
      key: 'datetime',
      render: ({ datetime }: UserLogsRow) => {
        const date = new Date(datetime);

        return (
          <Popover
            placement='right'
            content={<Paragraph className='mb-0'>{format(date, 'HH:mm:ss, dd.LL.yyyy')}</Paragraph>}
          >
            {format(date, 'HH:mm')}
          </Popover>
        );
      },
      sorter: (a: UserLogsRow, b: UserLogsRow) => compareAsc(new Date(a.datetime), new Date(b.datetime)),
    },
    {
      title: t('form.editUser.table.header.ip'),
      key: 'ip',
      dataIndex: 'ip',
      sorter: (a: UserLogsRow, b: UserLogsRow) => a.ip.localeCompare(b.ip),
    },
    {
      title: t('form.editUser.table.header.browser'),
      key: 'browser',
      render: ({ browser, browserVersion }: UserLogsRow) => (
        <BrowserIcon browser={browser} browserVersion={browserVersion} />
      ),
      sorter: (a: UserLogsRow, b: UserLogsRow) => a.browser.localeCompare(b.browser),
      filters: Object.values(Browser)
        .map((item) => ({
          text: (
            <>
              <FontAwesomeIcon icon={getBrowserIcon(item)} /> {item !== Browser.unknown ? item : t('data.unknown')}
            </>
          ),
          value: item,
        }))
        .sort(({ value }) => (getBrowserIcon(value) !== faCircleExclamation ? -1 : 1))
        .sort((a, b) => (getBrowserIcon(a.value) !== faCircleExclamation ? a.value.localeCompare(b.value) : 0)),
      onFilter: (value: boolean | string | number, record: UserLogsRow) => record.browser === value,
    },
    {
      title: t('form.editUser.table.header.device'),
      key: 'device',
      render: ({ device }: UserLogsRow) => <DeviceIcon device={device} />,
      sorter: (a: UserLogsRow, b: UserLogsRow) => a.device.localeCompare(b.device),
      filters: Object.values(Device).map((item) => ({
        text: (
          <>
            <FontAwesomeIcon icon={getDeviceIcon(item)} /> {item !== Device.unknown ? item : t('data.unknown')}
          </>
        ),
        value: item,
      })),
      onFilter: (value: boolean | string | number, record: UserLogsRow) => record.browser === value,
    },
    {
      title: t('form.editUser.table.header.platform'),
      key: 'platform',
      render: ({ platform, platformVersion, platformVersionName }: UserLogsRow) => (
        <PlatformIcon platform={platform} platformVersion={platformVersion} platformVersionName={platformVersionName} />
      ),
      sorter: (a: UserLogsRow, b: UserLogsRow) =>
        t(`data.browser.${a.browser}`).localeCompare(t(`data.browser.${b.browser}`)),
      filters: Object.values(Platform)
        .map((item) => ({
          text: (
            <>
              <FontAwesomeIcon icon={getPlatformIcon(item)} /> {item !== Platform.unknown ? item : t('data.unknown')}
            </>
          ),
          value: item,
        }))
        .sort(({ value }) => (getPlatformIcon(value) !== faCircleExclamation ? -1 : 1))
        .sort((a, b) => (getPlatformIcon(a.value) !== faCircleExclamation ? a.value.localeCompare(b.value) : 0)),
      onFilter: (value: boolean | string | number, record: UserLogsRow) => record.browser === value,
    },
  ];

  return <Table rowKey='id' dataSource={logs.data || []} columns={columns} scroll={{ x: true }} />;
};

export default Logs;
