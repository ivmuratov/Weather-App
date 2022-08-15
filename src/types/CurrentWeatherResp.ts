import { IClouds } from './IClouds';
import { ICoordinates } from './ICoordinates';

import { IMainWeatherValues } from './IMainWeatherValues';
import { IRain } from './IRain';
import { ISnow } from './ISnow';
import { IWind } from './IWind';
import { WeatherCondition } from './WeatherCondition';

type WeatherItem = {
  id: number;
  main: WeatherCondition;
  description: string;
  icon: string;
};

type InternalSys = {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
};

export interface CurrentWeatherResp {
  coord: ICoordinates;
  weather: WeatherItem[];
  base: string;
  main: IMainWeatherValues;
  visibility: number;
  wind: IWind;
  clouds: IClouds;
  dt: number;
  sys: InternalSys;
  timezone: number;
  id: number;
  cod: number;
  name: string;
  rain?: IRain;
  snow?: ISnow;
}
