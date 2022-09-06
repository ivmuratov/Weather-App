import { IAirComponents } from './IAirComponents';
import { IAirQualityIndex } from './IAirQualityIndex';

export interface IAirPollution {
  dt: number;
  main: IAirQualityIndex;
  components: IAirComponents;
}
