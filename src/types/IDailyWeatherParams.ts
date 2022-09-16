import ICoordinates from '../models/ICoordinates';

interface IDailyWeatherParams extends ICoordinates {
  days: number;
}

export default IDailyWeatherParams;
