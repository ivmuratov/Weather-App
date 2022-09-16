import IAirPollution from './IAirPollution';
import ICoordinates from './ICoordinates';

interface AirPollutionResp {
  coord: ICoordinates;
  list: IAirPollution[];
}

export default AirPollutionResp;
