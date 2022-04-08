import { useTranslation } from 'react-i18next';
import { Button, Typography } from 'antd';
import { timeAtom } from 'atoms/time';
import { startCompetition } from 'config';
import { compareAsc, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';
import { useRecoilValue } from 'recoil';

const { Title } = Typography;

const leadZero = (number: number): string => `${number}`.padStart(2, '0');

const Competition = () => {
  const time = useRecoilValue(timeAtom);
  const { t } = useTranslation();

  const timeLeft = new Date(startCompetition);

  const days = differenceInDays(timeLeft, time);
  const hours = differenceInHours(timeLeft, time) - days * 24;
  const minutes = differenceInMinutes(timeLeft, time) - days * 24 * 60 - hours * 60;
  const seconds = differenceInSeconds(timeLeft, time) - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  const isAvailable = compareAsc(time, timeLeft) === 1;

  const timer = `${leadZero(hours)}:${leadZero(minutes)}:${leadZero(seconds)}`;

  const calendarDays = days
    ? `${days} ${days === 1 ? t('app.dashboard.competition.start.day') : t('app.dashboard.competition.start.days')} ${t(
        'app.dashboard.competition.start.and'
      )}`
    : '';

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
