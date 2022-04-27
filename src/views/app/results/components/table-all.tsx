import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { generatePath, useNavigate } from 'react-router-dom';
import { MoreOutlined, SearchOutlined } from '@ant-design/icons';
import { faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Button, Dropdown, Menu, Popover, Select, Table, Typography } from 'antd';
import {
  fetchResultAssignArbiter,
  fetchResultsAllList,
  ResultAssignArbiterProps,
  ResultAssignArbiterRet,
  ResultsAllListRet,
  ResultsAllListRow,
} from 'api';
import { ArbitersListRet, fetchArbitersList } from 'api/arbiters';
import { languageChampionshipOptions } from 'data';
import {
  differenceInHours,
  differenceInMilliseconds,
  differenceInMinutes,
  differenceInSeconds,
  format,
} from 'date-fns';
import { Age, LanguageChampionship, MutationKey, QueryKey, Review } from 'enums';
import { useMutationWithError, useQueryWithError } from 'hooks';
import { appUrls } from 'urls';
import { getAgeEnum } from 'utils/age';
import { FilterSearch } from 'components';
import { getReviewTypeColor } from '../results.utils';
import { theme } from 'styles';

const { Paragraph, Title } = Typography;

enum Reviewers {
  empty = 'empty',
}

const TableAll = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const arbiters = useQueryWithError<ArbitersListRet, Error>(QueryKey.arbitersList, fetchArbitersList);

  const resultAssignArbiter = useMutationWithError<ResultAssignArbiterRet, Error, ResultAssignArbiterProps>(
    fetchResultAssignArbiter,
    {
      mutationKey: MutationKey.resultAssignArbiter,
      invalidateQueryKey: [QueryKey.resultsAllList, QueryKey.resultsAssessedList],
      loadingMessage: t('form.resultAssignArbiter.messages.loading'),
      errorMessage: t('form.resultAssignArbiter.messages.error'),
      successMessage: t('form.resultAssignArbiter.messages.success'),
    }
  );

  const resultsAll = useQueryWithError<ResultsAllListRet, Error>(QueryKey.resultsAllList, fetchResultsAllList);

  const columns = useMemo(
    () => [
      {
        title: t('app.results.tableAll.header.idUser'),
        key: 'idUser',
        dataIndex: 'idUser',
        sorter: (a: ResultsAllListRow, b: ResultsAllListRow) => a.idUser - b.idUser,
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, record: ResultsAllListRow) =>
          record.idUser.toString().includes(value.toString()),
      },
      {
        title: t('app.results.tableAll.header.name'),
        key: 'name',
        dataIndex: 'name',
        sorter: (a: ResultsAllListRow, b: ResultsAllListRow) => a.name.localeCompare(b.name),
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, record: ResultsAllListRow) =>
          record.name.includes(value.toString()),
      },
      {
        title: t('app.results.tableAll.header.lastName'),
        key: 'lastName',
        dataIndex: 'lastName',
        sorter: (a: ResultsAllListRow, b: ResultsAllListRow) => a.lastName.localeCompare(b.lastName),
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, record: ResultsAllListRow) =>
          record.lastName.includes(value.toString()),
      },
      {
        title: t('app.results.tableAll.header.readingTime'),
        key: 'readingTime',
        render: ({ startReading, startTest }: ResultsAllListRow) => {
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
        sorter: (a: ResultsAllListRow, b: ResultsAllListRow) =>
          differenceInMilliseconds(new Date(a.startReading), new Date(a.startTest)) -
          differenceInMilliseconds(new Date(b.startReading), new Date(b.startTest)),
      },
      {
        title: t('app.results.tableAll.header.testTime'),
        key: 'testTime',
        render: ({ startTest, endTest }: ResultsAllListRow) => {
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
        sorter: (a: ResultsAllListRow, b: ResultsAllListRow) =>
          differenceInMilliseconds(new Date(a.startTest), new Date(a.endTest)) -
          differenceInMilliseconds(new Date(b.startTest), new Date(b.endTest)),
      },
      {
        title: t('app.results.tableAll.header.languageChampionship'),
        key: 'languageChampionship',
        dataIndex: 'languageChampionship',
        render: (languageChampionship: LanguageChampionship) =>
          languageChampionshipOptions.find((lang) => lang.value === languageChampionship)?.label,
        sorter: (a: ResultsAllListRow, b: ResultsAllListRow) =>
          a.languageChampionship.localeCompare(b.languageChampionship),
        filters: languageChampionshipOptions.map(({ label, value }) => ({
          text: <div className='inline-flex relative top-[4px]'>{label}</div>,
          value,
        })),
        onFilter: (value: boolean | string | number, record: ResultsAllListRow) =>
          record.languageChampionship === value,
      },
      {
        title: t('app.results.tableAll.header.age'),
        key: 'age',
        render: ({ age }: ResultsAllListRow) => t(`data.age.${getAgeEnum(age)}`),
        filters: Object.values(Age).map((age) => ({
          text: t(`data.age.${age}`),
          value: age,
        })),
        onFilter: (value: boolean | string | number, record: ResultsAllListRow) => getAgeEnum(record.age) === value,
        sorter: (a: ResultsAllListRow, b: ResultsAllListRow) => a.age - b.age,
      },
      {
        title: t('app.results.tableAll.header.reviews'),
        key: 'reviews',
        dataIndex: 'reviews',
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, record: ResultsAllListRow) =>
          record.reviews.toString().includes(value.toString()),
        sorter: (a: ResultsAllListRow, b: ResultsAllListRow) => a.reviews - b.reviews,
      },
      {
        title: t('app.results.tableAll.header.reviewsType'),
        key: 'reviewsType',
        render: ({ reviewsType }: ResultsAllListRow) => <Badge color={getReviewTypeColor(reviewsType)} />,
        filters: Object.values(Review).map((review) => ({
          text: (
            <>
              <Badge color={getReviewTypeColor(review)} />
              {t(`data.review.${review}`)}
            </>
          ),
          value: review,
        })),
        onFilter: (value: boolean | string | number, record: ResultsAllListRow) => record.reviewsType === value,
        sorter: (a: ResultsAllListRow, b: ResultsAllListRow) => a.reviews - b.reviews,
      },
      {
        title: t('app.results.tableAll.header.reviewers'),
        key: 'reviewers',
        width: 285,
        render: ({ id, reviewers }: ResultsAllListRow) => (
          <Select
            mode='tags'
            defaultValue={reviewers?.map(({ id }) => id)}
            className='w-full max-w-[285px]'
            onChange={(value) => {
              resultAssignArbiter.mutate({ id, reviewers: value.map((item) => Number(item)) });
            }}
            options={arbiters.data?.map(({ id, name, lastName }) => ({
              value: id,
              label: `${name} ${lastName}`,
            }))}
          />
        ),
        filters: [
          {
            value: Reviewers.empty,
            text: t('app.results.tableAll.filter.reviewers.empty'),
          },
          ...(arbiters.data || []).map(({ id, name, lastName }) => ({
            value: id,
            text: `${name} ${lastName}`,
          })),
        ],
        onFilter: (value: boolean | string | number, record: ResultsAllListRow) =>
          value === Reviewers.empty
            ? record.reviewers?.length === 0
            : Boolean(record.reviewers?.find(({ id }) => id === value)),
      },
      {
        title: t('app.results.tableAll.header.actions'),
        key: 'action',
        render: ({ id }: ResultsAllListRow) => {
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
                    {t('app.results.tableAll.header.action.review')}
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
    [arbiters]
  );

  return (
    <>
      <Title level={3}>{t('app.results.all.title')}</Title>
      <Table
        columns={columns}
        dataSource={resultsAll?.data || []}
        scroll={{ x: true }}
        locale={t('components.table', { returnObjects: true })}
        rowKey={({ id }) => id}
      />
    </>
  );
};

export default TableAll;
