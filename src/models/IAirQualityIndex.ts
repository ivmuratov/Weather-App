import { AirQualitativeName } from '../constants/enums';

/**
 * Индекс качества воздуха
 */
interface IAirQualityIndex {
  /**
   * Значение
   */
  aqi: AirQualitativeName;
}

export default IAirQualityIndex;
