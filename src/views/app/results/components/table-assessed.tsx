import { useMemo, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Col, Popover, Row, Table, Typography } from 'antd';
import { fetchResultsAssessedList, ResultsAssessedListRet, ResultsAssessedListRow } from 'api';
import books from 'assets/books';
import { countries, languageChampionshipOptions, languagesChampionship } from 'data';
import { differenceInMilliseconds, differenceInSeconds, format } from 'date-fns';
import { Age, LanguageChampionship, QueryKey } from 'enums';
import FileSaver from 'file-saver';
import { useQueryWithError } from 'hooks';
import { getAgeEnum } from 'utils/age';
import { FilterSearch } from 'components';
import { getFormatDistance } from '../results.utils';

const { Paragraph, Text, Title } = Typography;

const TableAssessed = () => {
  const { t } = useTranslation();

  const currentDataSource = useRef<ResultsAssessedListRow[]>([]);

  const resultsAssessed = useQueryWithError<ResultsAssessedListRet, Error>(
    QueryKey.resultsAssessedList,
    fetchResultsAssessedList
  );

  const columns = useMemo(
    () => [
      {
        title: t('app.results.tableAssessed.header.idUser'),
        key: 'idUser',
        dataIndex: 'idUser',
        sorter: (a: ResultsAssessedListRow, b: ResultsAssessedListRow) => a.idUser - b.idUser,
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, { idUser }: ResultsAssessedListRow) =>
          idUser.toString().includes(value.toString()),
      },
      {
        title: t('app.results.tableAssessed.header.name'),
        key: 'name',
        dataIndex: 'name',
        sorter: (a: ResultsAssessedListRow, b: ResultsAssessedListRow) => a.name.localeCompare(b.name),
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, { name }: ResultsAssessedListRow) =>
          name.includes(value.toString()),
      },
      {
        title: t('app.results.tableAssessed.header.lastName'),
        key: 'lastName',
        dataIndex: 'lastName',
        sorter: (a: ResultsAssessedListRow, b: ResultsAssessedListRow) => a.lastName.localeCompare(b.lastName),
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, { lastName }: ResultsAssessedListRow) =>
          lastName.includes(value.toString()),
      },
      {
        title: t('app.results.tableAssessed.header.readingTime'),
        key: 'readingTime',
        render: ({ startReading, startTest }: ResultsAssessedListRow) => (
          <Popover
            placement='right'
            content={
              <>
                <Paragraph className='mb-0'>{format(new Date(startReading), 'HH:mm:ss, dd.LL.yyyy')}</Paragraph>
                <Paragraph className='mb-0'>{format(new Date(startTest), 'HH:mm:ss, dd.LL.yyyy')}</Paragraph>
              </>
            }
          >
            {getFormatDistance(startReading, startTest)}
          </Popover>
        ),
        sorter: (a: ResultsAssessedListRow, b: ResultsAssessedListRow) =>
          differenceInMilliseconds(new Date(a.startReading), new Date(a.startTest)) -
          differenceInMilliseconds(new Date(b.startReading), new Date(b.startTest)),
      },
      {
        title: t('app.results.tableAssessed.header.testTime'),
        key: 'testTime',
        render: ({ startTest, endTest }: ResultsAssessedListRow) => (
          <Popover
            placement='right'
            content={
              <>
                <Paragraph className='mb-0'>{format(new Date(startTest), 'HH:mm:ss, dd.LL.yyyy')}</Paragraph>
                <Paragraph className='mb-0'>{format(new Date(endTest), 'HH:mm:ss, dd.LL.yyyy')}</Paragraph>
              </>
            }
          >
            {getFormatDistance(startTest, endTest)}
          </Popover>
        ),
        sorter: (a: ResultsAssessedListRow, b: ResultsAssessedListRow) =>
          differenceInMilliseconds(new Date(a.startTest), new Date(a.endTest)) -
          differenceInMilliseconds(new Date(b.startTest), new Date(b.endTest)),
      },
      {
        title: t('app.results.tableAssessed.header.points'),
        key: 'points',
        render: ({ languageChampionship, age, points }: ResultsAssessedListRow) => {
          const max = Object.keys(books?.[languageChampionship]?.[getAgeEnum(age)]?.questions).length * 5;
          const percentage = (points / max) * 100;

          return <Popover content={`${points} / ${max}`}>{(Math.round(percentage * 100) / 100).toFixed(2)}%</Popover>;
        },
        sorter: (a: ResultsAssessedListRow, b: ResultsAssessedListRow) => {
          const aBook = books[a.languageChampionship][getAgeEnum(a.age)];
          const bBook = books[b.languageChampionship][getAgeEnum(b.age)];
          const aMax = Object.keys(aBook.questions).length * 5;
          const bMax = Object.keys(bBook.questions).length * 5;
          const aPercentage = (a.points / aMax) * 100;
          const bPercentage = (a.points / bMax) * 100;

          return aPercentage - bPercentage;
        },
      },
      {
        title: t('app.results.tableAssessed.header.result'),
        key: 'result',
        render: ({ languageChampionship, age, points, startReading, startTest }: ResultsAssessedListRow) => {
          const book = books[languageChampionship][getAgeEnum(age)];
          const max = Object.keys(book.questions).length * 5;
          const totalWords = book.words;
          const readingTimeInSeconds = differenceInSeconds(new Date(startTest), new Date(startReading));
          const result = (totalWords / readingTimeInSeconds) * 60 * (points / max);

          return (
            <Popover
              content={
                <>
                  <Paragraph>
                    (<Text strong>{totalWords}</Text> / <Text strong>{readingTimeInSeconds}</Text>) * 60 * (
                    <Text strong>{points}</Text> / <Text strong>{max}</Text>)
                  </Paragraph>
                  <small>
                    <Paragraph className='mb-0'>
                      <Text strong>{totalWords}</Text> -{' '}
                      {t('app.results.tableAssessed.render.result.popover.totalWords')}
                    </Paragraph>
                    <Paragraph className='mb-0'>
                      <Text strong>{readingTimeInSeconds}</Text> -{' '}
                      {t('app.results.tableAssessed.render.result.popover.readingTime')}
                    </Paragraph>
                    <Paragraph className='mb-0'>
                      <Text strong>{points}</Text> - {t('app.results.tableAssessed.render.result.popover.points')}
                    </Paragraph>
                    <Paragraph className='mb-0'>
                      <Text strong>{max}</Text> - {t('app.results.tableAssessed.render.result.popover.maxPoints')}
                    </Paragraph>
                  </small>
                </>
              }
            >
              {(Math.round(result * 100) / 100).toFixed(2)}
            </Popover>
          );
        },
        sorter: (a: ResultsAssessedListRow, b: ResultsAssessedListRow) => {
          const aBook = books[a.languageChampionship][getAgeEnum(a.age)];
          const bBook = books[b.languageChampionship][getAgeEnum(b.age)];
          const aMax = Object.keys(aBook.questions).length * 5;
          const bMax = Object.keys(bBook.questions).length * 5;

          const aReadingTimeInSeconds = differenceInSeconds(new Date(a.startTest), new Date(a.startReading));
          const bReadingTimeInSeconds = differenceInSeconds(new Date(b.startTest), new Date(b.startReading));

          const aResult = (aBook.words / aReadingTimeInSeconds) * 60 * (a.points / aMax);
          const bResult = (bBook.words / bReadingTimeInSeconds) * 60 * (b.points / bMax);

          return aResult - bResult;
        },
      },
      {
        title: t('app.results.tableAssessed.header.languageChampionship'),
        key: 'languageChampionship',
        dataIndex: 'languageChampionship',
        render: (languageChampionship: LanguageChampionship) =>
          languageChampionshipOptions.find((lang) => lang.value === languageChampionship)?.label,
        sorter: (a: ResultsAssessedListRow, b: ResultsAssessedListRow) =>
          a.languageChampionship.localeCompare(b.languageChampionship),
        filters: languageChampionshipOptions.map(({ label, value }) => ({
          text: <div className='inline-flex relative top-[4px]'>{label}</div>,
          value,
        })),
        onFilter: (value: boolean | string | number, { languageChampionship }: ResultsAssessedListRow) =>
          languageChampionship === value,
      },
      {
        title: t('app.results.tableAssessed.header.age'),
        key: 'age',
        render: ({ age }: ResultsAssessedListRow): string => t(`data.age.${getAgeEnum(age)}`),
        filters: Object.values(Age).map((age) => ({
          text: t(`data.age.${age}`),
          value: age,
        })),
        onFilter: (value: boolean | string | number, { age }: ResultsAssessedListRow) => getAgeEnum(age) === value,
        sorter: (a: ResultsAssessedListRow, b: ResultsAssessedListRow) => a.age - b.age,
      },
      {
        title: t('app.results.tableAssessed.header.crew'),
        key: 'crew',
        dataIndex: 'crew',
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, { crew }: ResultsAssessedListRow) =>
          crew.includes(value.toString()),
        sorter: (a: ResultsAssessedListRow, b: ResultsAssessedListRow) => a.crew.localeCompare(b.crew),
      },
      {
        title: t('app.results.tableAssessed.header.region'),
        key: 'region',
        dataIndex: 'region',
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, { region }: ResultsAssessedListRow) =>
          region.includes(value.toString()),
        sorter: (a: ResultsAssessedListRow, b: ResultsAssessedListRow) => a.region.localeCompare(b.region),
      },
      {
        title: t('app.results.tableAssessed.header.country'),
        key: 'country',
        render: ({ country }: ResultsAssessedListRow) => countries.find(({ code }) => code === country)?.native,
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, { country }: ResultsAssessedListRow) =>
          Boolean(countries.find(({ code }) => code === country)?.native.includes(value.toString())),
        sorter: (a: ResultsAssessedListRow, b: ResultsAssessedListRow) => a.country.localeCompare(b.country),
      },
      {
        title: t('app.results.tableAssessed.header.continent'),
        key: 'continent',
        render: ({ continent }: ResultsAssessedListRow) => t(`data.continent.${continent}`),
        filterDropdown: FilterSearch,
        filterIcon: <SearchOutlined />,
        onFilter: (value: boolean | string | number, { continent }: ResultsAssessedListRow) =>
          t(`data.continent.${continent}`).includes(value.toString()),
        sorter: (a: ResultsAssessedListRow, b: ResultsAssessedListRow) => a.continent.localeCompare(b.continent),
      },
    ],
    []
  );

  const handleExportData = () => {
    const exportData = [
      [
        t('app.results.tableAssessed.header.idUser'),
        t('app.results.tableAssessed.header.name'),
        t('app.results.tableAssessed.header.lastName'),
        t('app.results.tableAssessed.header.readingTime'),
        t('app.results.tableAssessed.header.testTime'),
        t('app.results.tableAssessed.header.points'),
        t('app.results.tableAssessed.header.result'),
        t('app.results.tableAssessed.header.languageChampionship'),
        t('app.results.tableAssessed.header.age'),
        t('app.results.tableAssessed.header.crew'),
        t('app.results.tableAssessed.header.region'),
        t('app.results.tableAssessed.header.country'),
        t('app.results.tableAssessed.header.continent'),
      ],
      ...currentDataSource.current.map(
        ({
          idUser,
          name,
          lastName,
          startReading,
          startTest,
          endTest,
          languageChampionship,
          age,
          points,
          crew,
          region,
          country,
          continent,
        }) => {
          const book = books[languageChampionship][getAgeEnum(age)];
          const max = Object.keys(book.questions).length * 5;
          const totalWords = book.words;
          const readingTimeInSeconds = differenceInSeconds(new Date(startTest), new Date(startReading));
          const percentage = (points / max) * 100;
          const result = (totalWords / readingTimeInSeconds) * 60 * (points / max);

          return [
            idUser,
            name,
            lastName,
            getFormatDistance(startReading, startTest),
            getFormatDistance(startReading, endTest),
            (Math.round(percentage * 100) / 100).toFixed(2),
            (Math.round(result * 100) / 100).toFixed(2),
            languagesChampionship.find(({ language }) => language === languageChampionship)?.label,
            t(`data.age.${getAgeEnum(age)}`),
            crew,
            region,
            countries.find(({ code }) => code === country)?.native,
            t(`data.continent.${continent}`),
          ];
        }
      ),
    ];

    const file = new Blob([exportData.map((e) => e.join(',')).join('\n')], {
      type: 'text/csv',
    });

    FileSaver.saveAs(file, `${format(Date.now(), `yyyy-MM-dd HH:mm:ss`)}.csv`);
  };

  return (
    <>
      <Row>
        <Col xs={{ span: 24 }} sm={{ span: 12 }}>
          <Title level={3}>{t('app.results.assessed.title')}</Title>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 12 }} className='flex justify-end'>
          <Button onClick={handleExportData}>Export data</Button>
        </Col>
      </Row>
      <Table
        columns={columns}
        dataSource={resultsAssessed?.data || []}
        scroll={{ x: true }}
        locale={t('components.table', { returnObjects: true })}
        rowKey={({ id }) => id}
        summary={(data) => {
          if (JSON.stringify(data) !== JSON.stringify(currentDataSource)) {
            currentDataSource.current = data as ResultsAssessedListRow[];
          }
          return null;
        }}
      />
    </>
  );
};

export default TableAssessed;
