import atmosphere from '../../assets/weather-icons/atmosphere/atmosphere.svg';
import clearCloudy from '../../assets/weather-icons/clouds/clear-cloudy.svg';
import cloudy from '../../assets/weather-icons/clouds/cloudy.svg';
import mostlyCloudy from '../../assets/weather-icons/clouds/mostly-cloudy.svg';
import partlyCloudy from '../../assets/weather-icons/clouds/partly-cloudy.svg';
import sunny from '../../assets/weather-icons/clouds/sunny.svg';
import drizzle from '../../assets/weather-icons/drizzle/drizzle.svg';
import rain from '../../assets/weather-icons/rain/rain.svg';
import snow from '../../assets/weather-icons/snow/snow.svg';
import thunderstorm from '../../assets/weather-icons/thunderstorm/thunderstorm.svg';
import IWeatherConditions from '../../models/IWeatherConditions';

export const getWeatherIcon = (weather: IWeatherConditions | undefined): string | undefined => {
  if (typeof weather === 'undefined') {
    return;
  }
  const { code } = weather;
  if (code < 200) {
    return atmosphere;
  }
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
