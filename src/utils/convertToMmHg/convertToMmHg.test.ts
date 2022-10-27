import { convertToMmHg } from './convertToMmHg';

describe('конвертировать атмосферное давление в мм рт ст', () => {
  test('корректное значение - 1013 мбар', () => {
    expect(convertToMmHg(1013)).toBe<string>('760');
  });
  test('корректное значение - 0 мбар', () => {
    expect(convertToMmHg(0)).toBe<string>('0');
  });
});
