import { getWeatherIcon } from './getWeatherIcon';

import atmosphere from '../../assets/weather-icons/atmosphere/atmosphere.svg';
import clearCloudy from '../../assets/weather-icons/clouds/clear-cloudy.svg';
import cloudy from '../../assets/weather-icons/clouds/cloudy.svg';
import mostlyCloudy from '../../assets/weather-icons/clouds/mostly-cloudy.svg';
import partlyCloudy from '../../assets/weather-icons/clouds/partly-cloudy.svg';
import sunny from '../../assets/weather-icons/clouds/sunny.svg';
import drizzle from '../../assets/weather-icons/drizzle/drizzle.svg';
import rain from '../../assets/weather-icons/rain/rain.svg';
import snow from '../../assets/weather-icons/snow/snow.svg';
import thunderstorm from '../../assets/weather-icons/thunderstorm/thunderstorm.svg';

describe('получить иконку погоды', () => {
  test('корректное значение - иконка с грозой (код 200)', () => {
    expect(getWeatherIcon({ icon: '', code: 200, description: '' })).toBe<string>(thunderstorm);
  });
  test('корректное значение - иконка с грозой (код 210)', () => {
    expect(getWeatherIcon({ icon: '', code: 210, description: '' })).toBe<string>(thunderstorm);
  });
  test('корректное значение - иконка с грозой (код 233)', () => {
    expect(getWeatherIcon({ icon: '', code: 233, description: '' })).toBe<string>(thunderstorm);
  });
  test('корректное значение - иконка с моросью (код 234)', () => {
    expect(getWeatherIcon({ icon: '', code: 234, description: '' })).toBe<string>(drizzle);
  });
  test('корректное значение - иконка с моросью (код 302)', () => {
    expect(getWeatherIcon({ icon: '', code: 302, description: '' })).toBe<string>(drizzle);
  });
  test('корректное значение - иконка с дождем (код 303)', () => {
    expect(getWeatherIcon({ icon: '', code: 303, description: '' })).toBe<string>(rain);
  });
  test('корректное значение - иконка с дождем (код 522)', () => {
    expect(getWeatherIcon({ icon: '', code: 522, description: '' })).toBe<string>(rain);
  });
  test('корректное значение - иконка с снегом (код 523)', () => {
    expect(getWeatherIcon({ icon: '', code: 523, description: '' })).toBe<string>(snow);
  });
  test('корректное значение - иконка с снегом (код 623)', () => {
    expect(getWeatherIcon({ icon: '', code: 623, description: '' })).toBe<string>(snow);
  });
  test('корректное значение - иконка с торнадо (код 624)', () => {
    expect(getWeatherIcon({ icon: '', code: 624, description: '' })).toBe<string>(atmosphere);
  });
  test('корректное значение - иконка с торнадо (код 751)', () => {
    expect(getWeatherIcon({ icon: '', code: 751, description: '' })).toBe<string>(atmosphere);
  });
  test('корректное значение - иконка с солнцем (код 800)', () => {
    expect(getWeatherIcon({ icon: '', code: 800, description: '' })).toBe<string>(sunny);
  });
  test('корректное значение - иконка с солнцем и облаком (код 801)', () => {
    expect(getWeatherIcon({ icon: '', code: 801, description: '' })).toBe<string>(clearCloudy);
  });
  test('корректное значение - иконка с солнцем и 2 облаком (код 802)', () => {
    expect(getWeatherIcon({ icon: '', code: 802, description: '' })).toBe<string>(partlyCloudy);
  });
  test('корректное значение - иконка с облаком (код 803)', () => {
    expect(getWeatherIcon({ icon: '', code: 803, description: '' })).toBe<string>(cloudy);
  });
  test('корректное значение - иконка с 2 облаком (код 804)', () => {
    expect(getWeatherIcon({ icon: '', code: 804, description: '' })).toBe<string>(mostlyCloudy);
  });
  test('некорректное значение - иконка с торнадо (код > 804)', () => {
    expect(getWeatherIcon({ icon: '', code: 805, description: '' })).toBe<string>(atmosphere);
  });
  test('некорректное значение - иконка с торнадо (код < 200)', () => {
    expect(getWeatherIcon({ icon: '', code: 199, description: '' })).toBe<string>(atmosphere);
  });
  test('некорректное значение - undefined', () => {
    expect(getWeatherIcon(undefined)).toBeUndefined();
  });
});
