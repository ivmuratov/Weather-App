import IAirComponents from './IAirComponents';
import IAirQualityIndex from './IAirQualityIndex';

/**
 * Загрязнение воздуха
 */
interface IAirPollution {
  /**
   * Дата и время, unix
   */
  dt: number;
  /**
   * Индекс качества воздуха
   */
  main: IAirQualityIndex;
  /**
   * Список вредных элементов
   */
  components: IAirComponents;
}

export default IAirPollution;
