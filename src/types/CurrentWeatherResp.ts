import { IWeather } from './IWeather';

export interface CurrentWeatherResp {
  data: IWeather[];
  count: number;
}
