import { getDailyWeatherListParams } from './getDailyWeatherListParams';

import IDailyWeatherListParams from '../../types/IDailyWeatherListParams';

describe('получить параметры для запроса на прогноз погоды', () => {
  test('корректное значение', () => {
    expect(getDailyWeatherListParams({ lat: 50, lon: 50 }, 16)).toEqual<IDailyWeatherListParams>({
      lat: 50,
      lon: 50,
      days: 16,
    });
  });
  test('некорректное значение - undefined', () => {
    expect(getDailyWeatherListParams(undefined, 16)).toBeUndefined();
  });
});
