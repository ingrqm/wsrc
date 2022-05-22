import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { DownloadOutlined } from '@ant-design/icons';
import { Button, Typography } from 'antd';
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
import { leadZero } from 'utils/convert';

const { Paragraph, Title } = Typography;

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

  const days = useMemo(() => differenceInDays(timeLeft, time), [timeLeft, time]);
  const hours = useMemo(() => differenceInHours(timeLeft, time) - days * 24, [timeLeft, time, days]);
  const minutes = useMemo(
    () => differenceInMinutes(timeLeft, time) - days * 24 * 60 - hours * 60,
    [timeLeft, time, days, hours]
  );
  const seconds = useMemo(
    () => differenceInSeconds(timeLeft, time) - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60,
    [timeLeft, time, days, hours, minutes]
  );

  const isAvailable = useMemo(() => compareAsc(time, timeLeft) === 1, [competition, timeLeft, time]);

  const timer = useMemo(
    () => `${leadZero(hours)}:${leadZero(minutes)}:${leadZero(seconds)}`,
    [hours, minutes, seconds]
  );

  const calendarDays = useMemo(
    () =>
      days
        ? `${
            days === 1
              ? t('app.dashboard.competition.start.day', { days })
              : t('app.dashboard.competition.start.days', { days })
          } `
        : '',
    [days]
  );

  const handleStartCompetition = () => {
    startCompetition.mutate({});
  };

  const handleDownloadCertificate = () => {
    downloadCertificate.mutate({
      name: user.name as string,
      lastName: user.lastName as string,
    });
  };

  if (isAvailable) {
    return competition.startReading ? (
      <>
        <Title level={3} className='mb-0'>
          {t('app.dashboard.competition.finished.title')}
        </Title>
        <Paragraph>{t('app.dashboard.competition.finished.description')}</Paragraph>
        <Button type='primary' icon={<DownloadOutlined />} onClick={handleDownloadCertificate}>
          {t('app.dashboard.competition.finished.downloadCertificate')}
        </Button>
      </>
    ) : (
      <>
        <Title level={3}>{t('app.dashboard.competition.join.title')}</Title>
        <Button type='primary' onClick={handleStartCompetition}>
          {t('app.dashboard.competition.join.start')}
        </Button>
      </>
    );
  }

  return <Title level={3}>{t('app.dashboard.competition.start.title', { calendarDays, timer })}</Title>;
};

export default Competition;
