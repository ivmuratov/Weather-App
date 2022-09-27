import ICoordinates from '../models/ICoordinates';

interface IDailyWeatherListParams extends ICoordinates {
  days: number;
}

export default IDailyWeatherListParams;
