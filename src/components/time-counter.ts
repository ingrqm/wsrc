import { useEffect, useRef } from 'react';
import { timeAtom } from 'atoms/time';
import { useRecoilState } from 'recoil';

const TimeCounter = () => {
  const [time, setTime] = useRecoilState(timeAtom);
  const timerRef = useRef<any>();

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setTime(new Date(time.setSeconds(time.getSeconds() + 1)));
    }, 1000);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [setTime]);

  return null;
};

export default TimeCounter;
