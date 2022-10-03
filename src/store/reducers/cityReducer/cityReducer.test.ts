import cityReducer, { citySlice, CityState } from './cityReducer';

const { selectCity } = citySlice.actions;

describe('получить город', () => {
  const initCity: CityState = {
    city: {
      id: 0,
      label: '',
      value: '',
    },
  };

  test('Новосибирск', () => {
    expect(cityReducer(initCity, selectCity({ id: 2, label: 'Новосибирск', value: 'Novosibirsk' }))).toEqual<CityState>(
      {
        city: { id: 2, label: 'Новосибирск', value: 'Novosibirsk' },
      },
    );
  });
});
