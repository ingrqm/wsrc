import Link from 'next/link';
import { useEffect, FC } from 'react';
import useCountDown from 'react-countdown-hook';
import { Typography, Button } from '@material-ui/core';
import { appUrls } from 'urls';

const getFormatTime = (number: number): string => `${number < 10 && '0'}${number}`;

const Timer: FC<{ distance: number; isParticipating: boolean | undefined }> = ({ distance, isParticipating }) => {
  const [timeLeft, actions] = useCountDown(distance, 1000);

  useEffect(() => {
    actions.start();
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <>
      {timeLeft > 0 ? (
        <Typography variant='h4'>
          <span>{getFormatTime(days)}</span>:<span>{getFormatTime(hours)}</span>:<span>{getFormatTime(minutes)}</span>:
          <span>{getFormatTime(seconds)}</span>
        </Typography>
      ) : (
        !isParticipating && (
          <>
            <Typography variant='h6'>Now you can start the competition</Typography>
            <Link href={appUrls.app.competition.init}>
              <Button color='primary'>start</Button>
            </Link>
          </>
        )
      )}
    </>
  );
};

export default Timer;
