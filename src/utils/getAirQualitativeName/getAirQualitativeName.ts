import { AirQualitativeName } from '../../constants/enums';
import IAirQualityIndex from '../../models/IAirQualityIndex';

export const getAirQualitativeName = (index: IAirQualityIndex | undefined): string | undefined => {
  if (typeof index === 'undefined') {
    return;
  }
  switch (index.aqi) {
    case AirQualitativeName.Good:
      return 'Отличное';
    case AirQualitativeName.Fair:
      return 'Хорошее';
    case AirQualitativeName.Moderate:
      return 'Умеренное';
    case AirQualitativeName.Poor:
      return 'Плохое';
    case AirQualitativeName.VeryPoor:
      return 'Очень плохое';
  }
};
