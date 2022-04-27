import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate } from 'react-router-dom';
import { MoreOutlined, SearchOutlined } from '@ant-design/icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Button, Dropdown, Menu, Popover, Table, Tag, Typography } from 'antd';
import { fetchResultsAssignToMeList, ResultsAssignToMeListRet, ResultsAssignToMeListRow } from 'api';
import {
  differenceInHours,
  differenceInMilliseconds,
  differenceInMinutes,
  differenceInSeconds,
  format,
} from 'date-fns';
import { QueryKey } from 'enums';
import { useQueryWithError } from 'hooks';
import { appUrls } from 'urls';
import { FilterSearch } from 'components';
import { getReviewTypeColor } from '../results.utils';
import { theme } from 'styles';

const { Paragraph, Title } = Typography;

const TableAssignToMe = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const resultsAssignToMe = useQueryWithError<ResultsAssignToMeListRet, Error>(
    QueryKey.resultsAssignToMeList,
    fetchResultsAssignToMeList
  );

  const columns = useMemo(
    () => [
      {
        title: t('app.results.tableAssignToMe.header.idUser'),
        key: 'idUser',
        dataIndex: 'idUser',
        sorter: (a: ResultsAssignToMeListRow, b: ResultsAssignToMeListRow) => a.id - b.id,
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, record: ResultsAssignToMeListRow) =>
          record.idUser.toString().includes(value.toString()),
      },
      {
        title: t('app.results.tableAssignToMe.header.readingTime'),
        key: 'readingTime',
        render: ({ startReading, startTest }: ResultsAssignToMeListRow) => {
          const time = new Date(startReading);
          const timeLeft = new Date(startTest);

          const hours = differenceInHours(timeLeft, time);
          const minutes = differenceInMinutes(timeLeft, time) - hours * 60;
          const seconds = differenceInSeconds(timeLeft, time) - hours * 60 * 60 - minutes * 60;

          return (
            <Popover
              placement='right'
              content={
                <>
                  <Paragraph className='mb-0'>{format(time, 'HH:mm:ss, dd.LL.yyyy')}</Paragraph>
                  <Paragraph className='mb-0'>{format(timeLeft, 'HH:mm:ss, dd.LL.yyyy')}</Paragraph>
                </>
              }
            >
              {hours ? `${hours}h ` : ''}
              {minutes ? `${minutes}m ` : ''}
              {seconds ? `${seconds}s ` : ''}
            </Popover>
          );
        },
        sorter: (a: ResultsAssignToMeListRow, b: ResultsAssignToMeListRow) =>
          differenceInMilliseconds(new Date(a.startReading), new Date(a.startTest)) -
          differenceInMilliseconds(new Date(b.startReading), new Date(b.startTest)),
      },
      {
        title: t('app.results.tableAssignToMe.header.testTime'),
        key: 'testTime',
        render: ({ startTest, endTest }: ResultsAssignToMeListRow) => {
          const time = new Date(startTest);
          const timeLeft = new Date(endTest);

          const hours = differenceInHours(timeLeft, time);
          const minutes = differenceInMinutes(timeLeft, time) - hours * 60;
          const seconds = differenceInSeconds(timeLeft, time) - hours * 60 * 60 - minutes * 60;

          return (
            <Popover
              placement='right'
              content={
                <>
                  <Paragraph className='mb-0'>{format(time, 'HH:mm:ss, dd.LL.yyyy')}</Paragraph>
                  <Paragraph className='mb-0'>{format(timeLeft, 'HH:mm:ss, dd.LL.yyyy')}</Paragraph>
                </>
              }
            >
              {hours ? `${hours}h ` : ''}
              {minutes ? `${minutes}m ` : ''}
              {seconds ? `${seconds}s ` : ''}
            </Popover>
          );
        },
        sorter: (a: ResultsAssignToMeListRow, b: ResultsAssignToMeListRow) =>
          differenceInMilliseconds(new Date(a.startTest), new Date(a.endTest)) -
          differenceInMilliseconds(new Date(b.startTest), new Date(b.endTest)),
      },
      {
        title: t('app.results.tableAssignToMe.header.reviews'),
        key: 'reviews',
        render: ({ reviews, reviewsType }: ResultsAssignToMeListRow) => (
          <>
            {reviews} <Badge color={getReviewTypeColor(reviewsType)} />
          </>
        ),
        sorter: (a: ResultsAssignToMeListRow, b: ResultsAssignToMeListRow) => a.reviews - b.reviews,
      },
      {
        title: t('app.results.tableAssignToMe.header.reviewers'),
        key: 'reviewers',
        render: ({ reviewers }: ResultsAssignToMeListRow) =>
          (reviewers || []).map(({ name, lastName, phone }) => (
            <Popover placement='right' content={<Paragraph className='mb-0'>{phone}</Paragraph>}>
              <Tag>
                {name} {lastName}
              </Tag>
            </Popover>
          )),
      },
      {
        title: t('app.results.tableAssignToMe.header.actions'),
        key: 'action',
        render: ({ id }: ResultsAssignToMeListRow) => {
          const handleRedirectToReview = () => {
            navigate(generatePath(appUrls.championship.review, { id: id.toString() }));
          };

          return (
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key='review' onClick={handleRedirectToReview}>
                    <FontAwesomeIcon
                      color={theme.color.light.calendulaGold['5']}
                      className='mr-1'
                      icon={faStarHalfStroke}
                    />
                    {t('app.results.tableAssignToMe.header.action.review')}
                  </Menu.Item>
                </Menu>
              }
              trigger={['click']}
              arrow
            >
              <Button type='text' icon={<MoreOutlined />} />
            </Dropdown>
          );
        },
      },
    ],
    []
  );

  return (
    <>
      <Title level={3}>{t('app.results.assignToMe.title')}</Title>
      <Table
        columns={columns}
        dataSource={resultsAssignToMe?.data || []}
        scroll={{ x: true }}
        locale={t('components.table', { returnObjects: true })}
        rowKey={({ id }) => id}
      />
    </>
  );
};

export default TableAssignToMe;
