import { AirQualitativeName } from '../constants/enums';
import clearCloudy from '../imgs/clear-cloudy.svg';
import cloudy from '../imgs/cloudy.svg';
import mostlyCloudy from '../imgs/mostly-cloudy.svg';
import partlyCloudy from '../imgs/partly-cloudy.svg';
import sunny from '../imgs/sunny.svg';

export const airNames = new Map<AirQualitativeName, string>([
  [AirQualitativeName.Good, 'Отличное'],
  [AirQualitativeName.Fair, 'Хорошее'],
  [AirQualitativeName.Moderate, 'Умеренное'],
  [AirQualitativeName.Poor, 'Плохое'],
  [AirQualitativeName.VeryPoor, 'Очень плохое'],
]);

//TODO: 1. добавить для остальных состояний картинки и ф-ии (switch case)
//TODO: 2. не забыть добавить ночную тему (сделать в figma луну)
export const weatherConditionsImgs = (cloudPercent: number): string => {
  if (cloudPercent >= 0 && cloudPercent < 11) {
    return sunny;
  } else if (cloudPercent < 25) {
    return clearCloudy;
  } else if (cloudPercent < 50) {
    return partlyCloudy;
  } else if (cloudPercent < 84) {
    return cloudy;
  } else {
    return mostlyCloudy;
  }
};
