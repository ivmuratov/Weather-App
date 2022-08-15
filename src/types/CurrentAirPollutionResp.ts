import { IAirPollution } from './IAirPollution';
import { ICoordinates } from './ICoordinates';

export interface CurrentAirPollutionResp {
  coord: ICoordinates;
  list: IAirPollution[];
}
