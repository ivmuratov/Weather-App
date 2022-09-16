import IAirComponents from './IAirComponents';
import IAirQualityIndex from './IAirQualityIndex';

interface IAirPollution {
  dt: number;
  main: IAirQualityIndex;
  components: IAirComponents;
}

export default IAirPollution;
