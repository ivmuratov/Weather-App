import ICurrentWeather from './ICurrentWeather';

interface CurrentWeatherResp {
  data: ICurrentWeather[];
  count: number;
}

export default CurrentWeatherResp;
