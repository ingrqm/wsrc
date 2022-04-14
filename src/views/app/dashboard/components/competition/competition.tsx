import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { Button, Typography } from 'antd';
import {
  fetchResultDetails,
  fetchStartCompetition,
  ResultDetailsRet,
  StartCompetitionProps,
  StartCompetitionRet,
} from 'api';
import { competitionAtom } from 'atoms/competition';
import { timeAtom } from 'atoms/time';
import { startCompetition } from 'config';
import { compareAsc, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';
import { MutationKey, QueryKey } from 'enums';
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
  const [competition, setCompetition] = useRecoilState(competitionAtom);
  const setTime = useSetRecoilState(timeAtom);

  useQueryWithError<ResultDetailsRet, Error>(
    QueryKey.resultDetails,
    () => fetchResultDetails({ id: competition.id as number }),
    {
      enabled: competition?.id !== undefined,
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

  if (isAvailable) {
    return competition.startReading ? (
      <>
        <Title level={3} className='mb-0'>
          Competition was finished!
        </Title>
        <Paragraph>
          Thank you for your participate. We invite you to the award ceremony which will take place on June 2 at 2 p.m.
          on Youtube
        </Paragraph>
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
