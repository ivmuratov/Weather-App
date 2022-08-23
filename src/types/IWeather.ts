import { ICoordinates } from './ICoordinates';

type PartDay = 'd' | 'n';

export interface IWeather extends ICoordinates {
  /**
   * Сокращенное направление ветра
   */
  wind_cdir: string;
  /**
   * Относительная влажность, %
   */
  rh: number;
  /**
   * Часть суток
   */
  pod: PartDay;
  /**
   * Давление, мбар
   */
  pres: number;
  /**
   * Местный часовой пояс
   */
  timezone: string;
  /**
   * Время последнего наблюдения, ГГГГ-ММ-ДД ЧЧ:ММ
   */
  ob_time: string;
  /**
   * Код страны
   */
  country_code: string;
  /**
   * Облачность, %
   */
  clouds: number;
  /**
   * Время последнего наблюдения, Unix
   */
  ts: number;
  /**
   * Расчетное солнечное излучение, Вт/м2
   */
  solar_rad: number;
  /**
   * Код штата
   */
  state_code: string;
  /**
   * Название города
   */
  city_name: string;
  /**
   * Скорость ветра, м/с
   */
  wind_spd: number;
  /**
   * Давление на уровне моря, мбар
   */
  slp: number;
  /**
   * Направление ветра
   */
  wind_cdir_full: string;
  /**
   * Время восхода солнца (GMT +0), ЧЧ:ММ
   */
  sunrise: string;
  /**
   * "Ощущаемая" температура, градус Цельсия
   */
  app_temp: number;
  /**
   * Прямое нормальное солнечное излучени, Вт/м2
   */
  dni: number;
  /**
   * Видимость, км
   */
  vis: number;
  /**
   * Список источников данных, использованных в ответе
   */
  sources: string[];
  /**
   * УСТАРЕЛО
   * Угол солнечного часа, градусы
   */
  h_angle: number;
  /**
   * Точка росы, градус Цельсия
   */
  dewpt: number;
  /**
   * Снегопад, мм/ч
   */
  snow: number;
  /**
   * Индекс качества воздуха, США - стандарт EPA 0 - +500
   */
  aqi: number;
  /**
   * Рассеянная солнечная радиация, Вт/м2
   */
  dhi: number;
  /**
   * Направление ветра, градусы
   */
  wind_dir: number;
  /**
   * Угол возвышения Солнца, градусы
   */
  elev_angle: number;
  /**
   * Глобальная солнечная радиация, Вт/м2
   */
  ghi: number;
  /**
   * Осадки, мм/ч
   */
  precip: number;
  /**
   * Время закта солнца (GMT +0), ЧЧ:ММ
   */
  sunset: string;
  /**
   * УФ индекс, 0 - +11
   */
  uv: number;
  /**
   * УСТАРЕЛО
   * Текущий час, ГГГГ-ММ-ДД:ЧЧ
   */
  datetime: string;
  /**
   * Температура, градусы Цельсия
   */
  temp: number;
  weather: {
    /**
     * Иконка погоды
     */
    icon: string;
    /**
     * Код погоды
     */
    code: number;
    /**
     * Описание погоды
     */
    description: string;
  };
  /**
   * ID ближайшей метеостанции
   */
  station: string;
}
