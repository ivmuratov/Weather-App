import ICoordinates from '../../models/ICoordinates';
import IDailyWeatherListParams from '../../types/IDailyWeatherListParams';

export const getDailyWeatherListParams = (
  coord: ICoordinates | undefined,
  days: number,
): IDailyWeatherListParams | undefined => {
  if (typeof coord === 'undefined') {
    return;
  }
  const { lat, lon } = coord;
  return {
    lat,
    lon,
    days,
  };
};
