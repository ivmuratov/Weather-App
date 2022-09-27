import { getDayOfWeek } from './getDayOfWeek';

describe('получить день недели', () => {
  test('корректное значение - ПН', () => {
    expect(getDayOfWeek('2022-08-29')).toBe<string>('ПН');
  });
  test('корректное значение - ВТ', () => {
    expect(getDayOfWeek('2022-08-30')).toBe<string>('ВТ');
  });
  test('корректное значение - СР', () => {
    expect(getDayOfWeek('2022-08-31')).toBe<string>('СР');
  });
  test('корректное значение - ЧТ', () => {
    expect(getDayOfWeek('2022-09-01')).toBe<string>('ЧТ');
  });
  test('корректное значение - ПТ', () => {
    expect(getDayOfWeek('2022-09-02')).toBe<string>('ПТ');
  });
  test('корректное значение - СБ', () => {
    expect(getDayOfWeek('2022-09-03')).toBe<string>('СБ');
  });
  test('корректное значение - ВС', () => {
    expect(getDayOfWeek('2022-09-04')).toBe<string>('ВС');
  });
  test('некорректное значение - не формата yyyy-mm-dd', () => {
    expect(getDayOfWeek('string')).toBeUndefined();
  });
  test('некорректное значение - undefined', () => {
    expect(getDayOfWeek(undefined)).toBeUndefined();
  });
});
