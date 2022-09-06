import { DailyForecastParams } from '../models/DailyForecastParams';
import { ICoordinates } from '../models/ICoordinates';

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
