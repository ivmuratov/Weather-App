import { ICurrentWeather } from './ICurrentWeather';

export interface CurrentWeatherResp {
  data: ICurrentWeather[];
  count: number;
}
