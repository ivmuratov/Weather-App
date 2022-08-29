import { DailyForecastParams } from '../types/DailyForecastParams';
import { ICoordinates } from '../types/ICoordinates';

export const getDailyForecastParams = (
  coord: ICoordinates | undefined,
  days: number,
): DailyForecastParams | undefined => {
  if (typeof coord === 'undefined') {
    return;
  }
  const { lat, lon } = coord;
  return {
    lat,
    lon,
    days,
  };
};
