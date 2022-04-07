import { Button, Typography } from 'antd';
import { timeAtom } from 'atoms/time';
import { startCompetition } from 'config';
import { compareAsc, differenceInSeconds, differenceInMinutes, differenceInHours, differenceInDays } from 'date-fns';
import { useRecoilValue } from 'recoil';

const { Title } = Typography;

const Competition = () => {
  const time = useRecoilValue(timeAtom);

  const timeLeft = new Date(startCompetition);

  const days = differenceInDays(timeLeft, time);
  const hours = differenceInHours(timeLeft, time) - days * 24;
  const minutes = differenceInMinutes(timeLeft, time) - days * 24 * 60 - hours * 60;
  const seconds = differenceInSeconds(timeLeft, time) - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;

  const isAvailable = compareAsc(time, timeLeft) === 1;

  return isAvailable ? (
    <>
      <Title level={3}>Join to the competition!</Title>
      <Button type='primary'>Start</Button>
    </>
  ) : (
    <Title level={3}>
      Start of the competition in{' '}
      {`${days && `${days} days and`} ${`${hours}`.padStart(2, '0')}:${`${minutes}`.padStart(
        2,
        '0'
      )}:${`${seconds}`.padStart(2, '0')}`}{' '}
    </Title>
  );
};

export default Competition;
