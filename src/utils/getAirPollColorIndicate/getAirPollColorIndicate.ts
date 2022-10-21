import { colors } from './colors';

import IAirComponents from '../../models/IAirComponents';

type AirComponent = 'CO' | 'NO2' | 'SO2' | 'PM2.5' | 'PM10';

export const getAirPollColorIndicate = (airComp: IAirComponents, component: AirComponent): string => {
  const { co, no2, so2, pm2_5, pm10 } = airComp;

  switch (component) {
    case 'CO': {
      if (co <= 7500) {
        return colors.green;
      } else if (co < 20000) {
        return colors.yellow;
      } else if (co >= 20000) {
        return colors.red;
      }
      break;
    }
    case 'NO2': {
      if (no2 <= 100) {
        return colors.green;
      } else if (no2 < 400) {
        return colors.yellow;
      } else if (no2 >= 400) {
        return colors.red;
      }
      break;
    }
    case 'SO2': {
      if (so2 <= 100) {
        return colors.green;
      } else if (so2 < 500) {
        return colors.yellow;
      } else if (so2 >= 500) {
        return colors.red;
      }
      break;
    }
    case 'PM2.5': {
      if (pm2_5 <= 30) {
        return colors.green;
      } else if (pm2_5 < 110) {
        return colors.yellow;
      } else if (pm2_5 >= 110) {
        return colors.red;
      }
      break;
    }
    case 'PM10': {
      if (pm10 <= 50) {
        return colors.green;
      } else if (pm10 < 180) {
        return colors.yellow;
      } else if (pm10 >= 180) {
        return colors.red;
      }
      break;
    }
  }
  return colors.green;
};
