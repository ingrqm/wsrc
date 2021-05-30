import Link from 'next/link';

import React, { useEffect } from 'react';
import useCountDown from 'react-countdown-hook';

import { number } from 'prop-types';

import { Typography, Button } from '@material-ui/core';

import { appUrls } from 'urls';

const Timer = ({ distance }) => {
  const [timeLeft, actions] = useCountDown(distance, 1000);

  useEffect(() => {
    actions.start();
  }, []);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return timeLeft > 0 ? (
    <Typography variant="h4">
      <span>
        {days < 10 && `0`}
        {days}
      </span>
      :
      <span>
        {hours < 10 && `0`}
        {hours}
      </span>
      :
      <span>
        {minutes < 10 && `0`}
        {minutes}
      </span>
      :
      <span>
        {seconds < 10 && `0`}
        {seconds}
      </span>
    </Typography>
  ) : (
    <>
      <Typography variant="h6">Now you can start the competition</Typography>
      <Link href={appUrls.app.competition.init}>
        <Button color="primary">start</Button>
      </Link>
    </>
  );
};

Timer.propTypes = {
  distance: number,
};

export default Timer;
