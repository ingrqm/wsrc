import { useMemo } from 'react';
import { Popover, Typography } from 'antd';
import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds, format } from 'date-fns';
import { leadZero } from 'utils/convert';

const { Paragraph, Title } = Typography;

type Props = {
  start: Date;
  end: Date;
  title: string;
};

const TimeDistance = ({ start, end, title }: Props) => {
  const time = new Date(start);
  const timeLeft = new Date(end);

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

  const timer = useMemo(
    () => `${leadZero(hours)}:${leadZero(minutes)}:${leadZero(seconds)}`,
    [hours, minutes, seconds]
  );

  return (
    <Popover
      placement='bottom'
      content={
        <>
          <Paragraph className='mb-0'>{format(time, 'HH:mm:ss, dd.LL.yyyy')}</Paragraph>
          <Paragraph className='mb-0'>{format(timeLeft, 'HH:mm:ss, dd.LL.yyyy')}</Paragraph>
        </>
      }
      title={title}
    >
      <div>
        <Title level={3} className='m-0'>
          {timer}
        </Title>
      </div>
    </Popover>
  );
};

export default TimeDistance;
