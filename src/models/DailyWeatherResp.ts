import ICoordinates from './ICoordinates';
import IDailyWeatherItem from './IDailyWeatherItem';

/**
 * Ответ сервиса о ежедневной погоде
 */
interface DailyWeatherResp extends ICoordinates {
  /**
   * Прогноз погоды по дням
   */
  data: IDailyWeatherItem[];
  /**
   * Местный часовой пояс
   */
  timezone: string;
  /**
   * Название города
   */
  city_name: string;
  /**
   * Аббревиатура страны
   */
  country_code: string;
  /**
   * Код штата
   */
  state_code: string;
}

export default DailyWeatherResp;
