import { ICoordinates } from './ICoordinates';

export interface DailyForecastParams extends ICoordinates {
  days: number;
}
