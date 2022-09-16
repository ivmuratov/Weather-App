import ICoordinates from './ICoordinates';
import IDailyWeatherItem from './IDailyWeatherItem';

interface DailyWeatherResp extends ICoordinates {
  /**
   * Список прогнозов погоды
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
