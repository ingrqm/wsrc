import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Typography } from 'antd';
import { timeAtom } from 'atoms/time';
import { startCompetition } from 'config';
import { compareAsc, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';
import { useRecoilValue } from 'recoil';

const { Title } = Typography;

const leadZero = (number: number): string => `${number}`.padStart(2, '0');

const timeLeft = new Date(startCompetition);

const Competition = () => {
  const time = useRecoilValue(timeAtom);
  const { t } = useTranslation();

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

  const isAvailable = useMemo(() => compareAsc(time, timeLeft) === 1, [timeLeft, time]);

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

  return isAvailable ? (
    <>
      <Title level={3}>{t('app.dashboard.competition.join.title')}</Title>
      <Button type='primary'>{t('app.dashboard.competition.join.start')}</Button>
    </>
  ) : (
    <Title level={3}>{t('app.dashboard.competition.start.title', { calendarDays, timer })}</Title>
  );
};

export default Competition;
