import { useEffect, useMemo } from 'react';
import { competitionAtom, skipCompetitionAtom } from 'atoms/competition';
import { timeAtom } from 'atoms/time';
import { compareAsc, differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { useRecoilState, useRecoilValue } from 'recoil';
import { leadZero } from 'utils/convert';
import { ChampionshipStep } from '../header.enum';
import { TimeText } from './timer.styled';

type Props = {
  type: ChampionshipStep;
};

const Timer = ({ type }: Props) => {
  const time = useRecoilValue(timeAtom);
  const [skipCompetition, setSkipCompetition] = useRecoilState(skipCompetitionAtom);
  const competition = useRecoilValue(competitionAtom);

  const timeLeft = new Date(competition[type] as Date);

  if (type === ChampionshipStep.startReading) {
    timeLeft.setMinutes(timeLeft.getMinutes() + 2 * 60);
  }

  if (type === ChampionshipStep.startTest) {
    timeLeft.setMinutes(timeLeft.getMinutes() + 30);
  }

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

  const isEndOfTime = useMemo(() => compareAsc(time, timeLeft) === 1, [timeLeft, time]);

  const timer = useMemo(
    () => `${leadZero(hours)}:${leadZero(minutes)}:${leadZero(seconds)}`,
    [hours, minutes, seconds]
  );

  const handleSkip = () => {
    if (isEndOfTime) {
      if (skipCompetition.skipReading === false && type === ChampionshipStep.startReading) {
        setSkipCompetition({
          ...skipCompetition,
          skipReading: true,
        });
      }
      if (skipCompetition.skipTest === false && type === ChampionshipStep.startTest) {
        setSkipCompetition({
          ...skipCompetition,
          skipTest: true,
        });
      }
    }
  };

  useEffect(handleSkip, [isEndOfTime]);

  return (
    <TimeText level={3} className='m-0 text-lg'>
      {timer}
    </TimeText>
  );
};

export default Timer;
