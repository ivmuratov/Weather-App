import ICurrentWeather from './ICurrentWeather';

/**
 * Ответ сервиса о текущей погоде
 */
interface CurrentWeatherResp {
  /**
   * Информация о текущая погода
   */
  data: ICurrentWeather[];
  /**
   * Количество возвращенных наблюдений
   */
  count: number;
}

export default CurrentWeatherResp;
