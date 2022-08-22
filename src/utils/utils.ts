import { currentDateUnix, isDay } from './date';

import { AirQualitativeName } from '../constants/enums';
import atmosphere from '../imgs/atmosphere/atmosphere.svg';
import clearCloudy from '../imgs/clouds/clear-cloudy.svg';
import cloudy from '../imgs/clouds/cloudy.svg';
import mostlyCloudy from '../imgs/clouds/mostly-cloudy.svg';
import partlyCloudy from '../imgs/clouds/partly-cloudy.svg';
import sunny from '../imgs/clouds/sunny.svg';
import drizzle from '../imgs/drizzle/drizzle.svg';
import rain from '../imgs/rain/rain.svg';
import snow from '../imgs/snow/snow.svg';
import thunderstorm from '../imgs/thunderstorm/thunderstorm.svg';
import { CurrentWeatherResp } from '../types/CurrentWeatherResp';

export const airNames = new Map<AirQualitativeName, string>([
  [AirQualitativeName.Good, 'Отличное'],
  [AirQualitativeName.Fair, 'Хорошее'],
  [AirQualitativeName.Moderate, 'Умеренное'],
  [AirQualitativeName.Poor, 'Плохое'],
  [AirQualitativeName.VeryPoor, 'Очень плохое'],
]);

//TODO: 2. сделать в figma луну
export const cloudsConditions = (cloudPercent: number): string => {
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

export const weatherConditions = (weatherResp: CurrentWeatherResp | undefined): string | undefined => {
  if (typeof weatherResp === 'undefined') {
    return;
  }
  const {
    weather: [{ main: condition }],
    clouds: { all: cloudPercent },
    sys: { sunrise, sunset },
  } = weatherResp;
  /* console.log(`рассвет - ${sunrise}`);
  console.log(`текущее время - ${currentDateUnix()} день - ${isDay(sunrise, sunset)}`);
  console.log(`закат - ${sunset}`); */
  switch (condition) {
    case 'Rain':
      return rain;
    case 'Drizzle':
      return drizzle;
    case 'Thunderstorm':
      return thunderstorm;
    case 'Snow':
      return snow;
    case 'Mist':
    case 'Smoke':
    case 'Haze':
    case 'Dust':
    case 'Fog':
    case 'Sand':
    case 'Ash':
    case 'Squall':
    case 'Tornado':
      return atmosphere;
    case 'Clear':
    case 'Clouds':
    default:
      return cloudsConditions(cloudPercent);
  }
};
