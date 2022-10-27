import ICoordinates from './ICoordinates';
import IWeather from './IWeather';

type PartDay = 'd' | 'n';

/**
 * Текущая погода
 */
interface ICurrentWeather extends ICoordinates, IWeather {
  /**
   * Часть суток
   */
  pod: PartDay;
  /**
   * Местный часовой пояс
   */
  timezone: string;
  /**
   * Время последнего наблюдения, yyyy-mm-dd HH:MM
   */
  ob_time: string;
  /**
   * Код страны
   */
  country_code: string;
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
   * Время восхода солнца (GMT +0), HH:MM
   */
  sunrise: string;
  /**
   * "Ощущаемая" температура, градус Цельсия
   */
  app_temp: number;
  /**
   * Прямое нормальное солнечное излучение, Вт/м2
   */
  dni: number;
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
   * Индекс качества воздуха, США - стандарт EPA 0 - +500
   */
  aqi: number;
  /**
   * Рассеянное солнечное излучение, Вт/м2
   */
  dhi: number;
  /**
   * Угол возвышения Солнца, градусы
   */
  elev_angle: number;
  /**
   * Глобальное солнечное излучение, Вт/м2
   */
  ghi: number;
  /**
   * Время заката солнца (GMT +0), HH:MM
   */
  sunset: string;
  /**
   * ID ближайшей метеостанции
   */
  station: string;
}

export default ICurrentWeather;
