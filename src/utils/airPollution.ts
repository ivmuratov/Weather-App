import { AirQualitativeName } from '../constants/enums';

export const airNames = new Map<AirQualitativeName, string>([
  [AirQualitativeName.Good, 'Отличное'],
  [AirQualitativeName.Fair, 'Хорошее'],
  [AirQualitativeName.Moderate, 'Умеренное'],
  [AirQualitativeName.Poor, 'Плохое'],
  [AirQualitativeName.VeryPoor, 'Очень плохое'],
]);
