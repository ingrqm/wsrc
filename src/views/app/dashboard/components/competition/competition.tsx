import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Col, Row, Typography } from 'antd';
import {
  fetchResultDetails,
  fetchStartCompetition,
  ResultDetailsRet,
  StartCompetitionProps,
  StartCompetitionRet,
} from 'api';
import { DownloadCertificateProps, DownloadCertificateRet, fetchDownloadCertificate } from 'api/certificate';
import { competitionAtom } from 'atoms/competition';
import { timeAtom } from 'atoms/time';
import { userAtom } from 'atoms/user';
import { startCompetition } from 'config';
import { compareAsc, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';
import { MutationKey, QueryKey } from 'enums';
import { saveAs } from 'file-saver';
import { useMutationWithError, useQueryWithError } from 'hooks';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { appUrls } from 'urls';
import { StyledProgress, Timer, TimerItem, TimerWrapper } from './competition.styled';

const { Paragraph, Title, Text } = Typography;

const timeLeft = new Date(startCompetition);

const Competition = () => {
  const time = useRecoilValue(timeAtom);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = useRecoilValue(userAtom);
  const [competition, setCompetition] = useRecoilState(competitionAtom);
  const setTime = useSetRecoilState(timeAtom);

  useQueryWithError<ResultDetailsRet, Error>(
    QueryKey.resultDetails,
    () => fetchResultDetails({ id: competition.id as number }),
    {
      enabled: Boolean(competition.id),
      onSuccess: ({ time, ...response }) => {
        setCompetition(response);
        setTime(new Date(time));
      },
    }
  );

  const startCompetition = useMutationWithError<StartCompetitionRet, Error, StartCompetitionProps>(
    fetchStartCompetition,
    {
      mutationKey: MutationKey.startCompetition,
      invalidateQueryKey: QueryKey.resultDetails,
      loadingMessage: t('form.startCompetition.messages.loading'),
      errorMessage: t('form.startCompetition.messages.error'),
      successMessage: t('form.startCompetition.messages.success'),
      onSuccess: (response) => {
        setCompetition(response);
        navigate(appUrls.championship.reading);
      },
    }
  );

  const downloadCertificate = useMutationWithError<DownloadCertificateRet, Error, DownloadCertificateProps>(
    fetchDownloadCertificate,
    {
      mutationKey: MutationKey.downloadCertificate,
      loadingMessage: t('form.downloadCertificate.messages.loading'),
      errorMessage: t('form.downloadCertificate.messages.error'),
      successMessage: t('form.downloadCertificate.messages.success'),
      onSuccess: (response) => {
        const fileName = `${t('form.downloadCertificate.file')}.pdf`;

        saveAs(response, fileName);
      },
    }
  );

  let days = useMemo(() => differenceInDays(timeLeft, time), [timeLeft, time]);
  let hours = useMemo(() => differenceInHours(timeLeft, time) - days * 24, [timeLeft, time, days]);
  let minutes = useMemo(
    () => differenceInMinutes(timeLeft, time) - days * 24 * 60 - hours * 60,
    [timeLeft, time, days, hours]
  );
  let seconds = useMemo(
    () => differenceInSeconds(timeLeft, time) - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60,
    [timeLeft, time, days, hours, minutes]
  );

  const isAvailable = useMemo(() => compareAsc(time, timeLeft) === 1, [competition, timeLeft, time]);
  if (isAvailable) {
    days = 0;
    hours = 0;
    minutes = 0;
    seconds = 0;
  }

  let timeLeftPercent = 100;
  if (days <= 30) {
    const totalLeftMinutes = differenceInMinutes(timeLeft, time);
    timeLeftPercent = (totalLeftMinutes / (30 * 24 * 60)) * 100;
  }
  const handleStartCompetition = () => {
    startCompetition.mutate({});
  };

  const handleDownloadCertificate = () => {
    downloadCertificate.mutate({
      name: user.name as string,
      lastName: user.lastName as string,
    });
  };

  if (competition.startReading) {
    return (
      <Row className='text-center mt-5'>
        <Col span={24}>
          <Title level={3} className='mb-3'>
            {t('app.dashboard.competition.finished.title')}
          </Title>
          <Paragraph className='text-sm font-light leading-6'>
            {t('app.dashboard.competition.finished.description')}
          </Paragraph>
          <Button
            type='primary'
            className='px-14 py-4 mt-3'
            icon={<DownloadOutlined />}
            onClick={handleDownloadCertificate}
          >
            {t('app.dashboard.competition.finished.downloadCertificate')}
          </Button>
        </Col>
      </Row>
    );
  }
  return (
    <Row className='text-center' justify='space-around' align='middle'>
      <Col md={12} xs={24}>
        <Title level={5}>{t('app.dashboard.competition.start.title')}</Title>
        <TimerWrapper className='px-24'>
          <Timer>
            <TimerItem>
              {days}
              <Text>
                {days <= 1 ? t('app.dashboard.competition.timer.day') : t('app.dashboard.competition.timer.days')}
              </Text>
            </TimerItem>
            <TimerItem>
              {hours}
              <Text>
                {hours <= 1 ? t('app.dashboard.competition.timer.hour') : t('app.dashboard.competition.timer.hours')}
              </Text>
            </TimerItem>
            <TimerItem>
              {minutes}
              <Text>
                {minutes <= 1
                  ? t('app.dashboard.competition.timer.minute')
                  : t('app.dashboard.competition.timer.minutes')}
              </Text>
            </TimerItem>
            <TimerItem>
              {seconds}
              <Text>
                {seconds <= 1
                  ? t('app.dashboard.competition.timer.second')
                  : t('app.dashboard.competition.timer.seconds')}
              </Text>
            </TimerItem>
          </Timer>
          <StyledProgress className='mt-6' percent={timeLeftPercent} showInfo={false} />
        </TimerWrapper>
      </Col>
      <Col md={12} xs={24} className='mt-6 xs:px-0 md:px-10 lg:px-24'>
        <Button type='primary' block disabled={!isAvailable} onClick={handleStartCompetition}>
          {t('app.dashboard.competition.join.start')}
        </Button>
      </Col>
    </Row>
  );
};

export default Competition;
