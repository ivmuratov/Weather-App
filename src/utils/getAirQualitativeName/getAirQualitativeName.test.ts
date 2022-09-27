import { getAirQualitativeName } from './getAirQualitativeName';

describe('получить качество воздуха', () => {
  test('корректное значение - Отличное', () => {
    expect(getAirQualitativeName({ aqi: 1 })).toBe<string>('Отличное');
  });
  test('корректное значение - Хорошее', () => {
    expect(getAirQualitativeName({ aqi: 2 })).toBe<string>('Хорошее');
  });
  test('корректное значение - Умеренное', () => {
    expect(getAirQualitativeName({ aqi: 3 })).toBe<string>('Умеренное');
  });
  test('корректное значение - Плохое', () => {
    expect(getAirQualitativeName({ aqi: 4 })).toBe<string>('Плохое');
  });
  test('корректное значение - Очень плохое', () => {
    expect(getAirQualitativeName({ aqi: 5 })).toBe<string>('Очень плохое');
  });
  test('некорректное значение - aqi < 1', () => {
    expect(getAirQualitativeName({ aqi: 0 })).toBeUndefined();
  });
  test('некорректное значение - aqi > 5', () => {
    expect(getAirQualitativeName({ aqi: 6 })).toBeUndefined();
  });
  test('некорректное значение - undefined', () => {
    expect(getAirQualitativeName(undefined)).toBeUndefined();
  });
});
