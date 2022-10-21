import { colors } from './colors';
import { getAirPollColorIndicate } from './getAirPollColorIndicate';

describe('получить цвет индикатора', () => {
  test('корректное значение CO - Зеленый', () => {
    expect(
      getAirPollColorIndicate(
        {
          co: 7500,
          no2: 0,
          so2: 0,
          no: 0,
          o3: 0,
          pm2_5: 0,
          pm10: 0,
          nh3: 0,
        },
        'CO',
      ),
    ).toBe<string>(colors.green);
  });
  test('корректное значение CO - Желтый', () => {
    expect(
      getAirPollColorIndicate(
        {
          co: 7501,
          no2: 0,
          so2: 0,
          no: 0,
          o3: 0,
          pm2_5: 0,
          pm10: 0,
          nh3: 0,
        },
        'CO',
      ),
    ).toBe<string>(colors.yellow);
  });
  test('корректное значение CO - Красный', () => {
    expect(
      getAirPollColorIndicate(
        {
          co: 20001,
          no2: 0,
          so2: 0,
          no: 0,
          o3: 0,
          pm2_5: 0,
          pm10: 0,
          nh3: 0,
        },
        'CO',
      ),
    ).toBe<string>(colors.red);
  });
});
