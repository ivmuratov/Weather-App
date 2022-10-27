import IAirPollution from './IAirPollution';
import ICoordinates from './ICoordinates';

/**
 * Ответ сервиса о загрязнении воздуха
 */
interface AirPollutionResp {
  /**
   * Координаты
   */
  coord: ICoordinates;
  /**
   * Информация о загрязнении воздуха
   */
  list: IAirPollution[];
}

export default AirPollutionResp;
