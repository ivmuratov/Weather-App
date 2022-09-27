import { daysOfWeek } from './daysOfWeek';

export const getDayOfWeek = (date: string | undefined): string | undefined => {
  if (typeof date === 'undefined') {
    return;
  }
  return daysOfWeek.get(new Date(date).getDay());
};
