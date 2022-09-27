import { toDateTimeStr } from './toDateTimeStr';

describe('формат даты', () => {
  test('корректное значение - dd.mm', () => {
    expect(toDateTimeStr('2022-09-01 10:00:00', 'dd.mm')).toBe<string>('01.09');
  });
  test('корректное значение - dd.mm.yyyy', () => {
    expect(toDateTimeStr('2022-09-01 10:00:00', 'dd.mm.yyyy')).toBe<string>('01.09.2022');
  });
  test('корректное значение - dd.mm.yyyy, HH:MM', () => {
    expect(toDateTimeStr('2022-09-01 10:00:00', 'dd.mm.yyyy, HH:MM')).toBe<string>('01.09.2022, 10:00');
  });
  test('корректное значение - dd.mm.yyyy, HH:MM:SS', () => {
    expect(toDateTimeStr('2022-09-01 10:00:00', 'dd.mm.yyyy, HH:MM:SS')).toBe<string>('01.09.2022, 10:00:00');
  });
  test('некорректное значение - undefined', () => {
    expect(toDateTimeStr(undefined, 'dd.mm.yyyy, HH:MM:SS')).toBeUndefined();
  });
});
