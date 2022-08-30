import { TimeUnit } from '../constants/enums';

const days = new Map<number, string>([
  [0, 'ВС'],
  [1, 'ПН'],
  [2, 'ВТ'],
  [3, 'СР'],
  [4, 'ЧТ'],
  [5, 'ПТ'],
  [6, 'СБ'],
]);

export const toLocalDateTimeStr = (date: number | undefined): string | undefined => {
  if (typeof date === 'undefined') {
    return;
  }
  return new Date(date * 1000).toLocaleString().slice(0, -3);
};

export const toLocalDateStr = (date: number | undefined): string | undefined => {
  if (typeof date === 'undefined') {
    return;
  }
  return new Date(date * 1000).toLocaleDateString();
};

export const getDay = (date: number | undefined): string | undefined => {
  if (typeof date === 'undefined') {
    return;
  }
  return days.get(new Date(date * 1000).getDay());
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
