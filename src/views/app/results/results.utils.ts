import { differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
import { Review } from 'enums';
import { theme } from 'styles';

export const getReviewTypeColor = (type: Review) => {
  switch (type) {
    case Review.admin:
      return theme.color.light.geekBlue['6'];
    case Review.inconsistent:
      return theme.color.light.dustRed['6'];
    case Review.consistent:
      return theme.color.light.polarGreen['6'];
    default:
      return theme.color.light.sunriseYellow['6'];
  }
};

export const getFormatDistance = (start: Date, end: Date): string => {
  const time = new Date(start);
  const timeLeft = new Date(end);

  const hours = differenceInHours(timeLeft, time);
  const minutes = differenceInMinutes(timeLeft, time) - hours * 60;
  const seconds = differenceInSeconds(timeLeft, time) - hours * 60 * 60 - minutes * 60;

  return `${hours ? `${hours}h ` : ''} ${minutes ? `${minutes}m ` : ''} ${seconds ? `${seconds}s ` : ''}`
    .replaceAll('  ', ' ')
    .trim();
};
