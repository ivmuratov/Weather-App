import { IAirPollution } from './IAirPollution';
import { ICoordinates } from './ICoordinates';

export interface AirPollutionResp {
  coord: ICoordinates;
  list: IAirPollution[];
}
