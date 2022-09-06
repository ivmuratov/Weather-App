import { useAppSelector } from '../hooks/useAppSelector';
import { ICoordinates } from '../models/ICoordinates';
import { useGetCoordQuery } from '../services/openWeatherMapService';

export const useCoord = (): ICoordinates | undefined => {
  const { city } = useAppSelector((state) => state.cityReducer);

  const { data } = useGetCoordQuery(city.value);

  return data;
};
