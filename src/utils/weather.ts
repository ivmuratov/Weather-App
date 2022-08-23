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
import { IWeather } from '../types/IWeather';

//TODO: 2. сделать в figma луну
export const weatherConditions = (weather: IWeather | undefined): string | undefined => {
  if (typeof weather === 'undefined') {
    return;
  }
  const {
    weather: { code },
  } = weather;

  if (code <= 233 && code >= 200) {
    return thunderstorm;
  } else if (code <= 302) {
    return drizzle;
  } else if (code <= 522) {
    return rain;
  } else if (code <= 623) {
    return snow;
  } else if (code <= 751) {
    return atmosphere;
  } else if (code === 800) {
    return sunny;
  } else if (code === 801) {
    return clearCloudy;
  } else if (code === 802) {
    return partlyCloudy;
  } else if (code === 803) {
    return cloudy;
  } else if (code === 804) {
    return mostlyCloudy;
  } else {
    return atmosphere;
  }
};
