import { ICoordinates } from './ICoordinates';

export interface DailyForecastResp extends ICoordinates {
  /**
   * Список прогнозов погоды
   */
  data: any[];
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
