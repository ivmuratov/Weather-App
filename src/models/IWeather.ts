import { IWeatherConditions } from './IWeatherConditions';

export interface IWeather {
  /**
   * УСТАРЕЛО
   * Дата действия прогноза, ГГГГ-ММ-ДД:ЧЧ
   */
  datetime: string;
  /**
   * Время последнего наблюдения, Unix
   */
  ts: number;
  /**
   * Температура, градусы Цельсия
   */
  temp: number;
  /**
   * Скорость ветра, м/с
   */
  wind_spd: number;
  /**
   * Направление ветра, градусы
   */
  wind_dir: number;
  /**
   * Сокращенное направление ветра
   */
  wind_cdir: string;
  /**
   * Направление ветра
   */
  wind_cdir_full: string;
  /**
   * Осадки, мм/ч
   */
  precip: number;
  /**
   * Снегопад, мм/ч
   */
  snow: number;
  /**
   * Давление, мбар
   */
  pres: number;
  /**
   * Давление на уровне моря, мбар
   */
  slp: number;
  /**
   * Точка росы, градус Цельсия
   */
  dewpt: number;
  /**
   * Относительная влажность, %
   */
  rh: number;
  /**
   * Облачность, %
   */
  clouds: number;
  /**
   * Видимость, км
   */
  vis: number;
  /**
   * УФ индекс, 0 - +11
   */
  uv: number;
  /**
   * Состояния погоды
   */
  weather: IWeatherConditions;
}
