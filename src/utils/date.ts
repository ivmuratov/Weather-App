import { TimeUnit } from '../constants/enums';

export const currentDateUnix = (): number => {
  return Number((Date.now() / 1000).toFixed());
};

export const toLocalDateTime = (date: number | undefined): Date | undefined => {
  if (typeof date === 'undefined') {
    return;
  }
  return new Date(date * 1000);
};

export const isDay = (sunrise: number, sunset: number): boolean => {
  return currentDateUnix() >= sunrise && currentDateUnix() <= sunset;
};

export const toDateTime = (date: Date): string => {
  return date.toLocaleString().slice(0, -3);
};

export const convertToMs = (value: number, timeUnit: TimeUnit): number => {
  switch (timeUnit) {
    case TimeUnit.SECOND:
      return value * 1000;
    case TimeUnit.MINUTE:
      return value * 60000;
    default:
      return value;
  }
};
