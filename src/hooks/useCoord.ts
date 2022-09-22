import { useAppSelector } from '../hooks/useAppSelector';
import ICoordinates from '../models/ICoordinates';
import { useGetCoordQuery } from '../services/openWeatherMapService';

export const useCoord = (): { data: ICoordinates | undefined; isLoading: boolean; isSuccess: boolean } => {
  const { city } = useAppSelector((state) => state.cityReducer);

  const { data, isLoading, isSuccess } = useGetCoordQuery(city.value);

  return { data, isLoading, isSuccess };
};
