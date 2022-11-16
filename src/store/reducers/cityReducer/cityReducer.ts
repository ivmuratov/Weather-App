import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import IDropdownItem from '../../../types/IDropdownItem';

export interface CityState {
  city: IDropdownItem;
}

const initialState: CityState = {
  city: {
    id: 5,
    label: 'Новосибирск',
    value: 'Novosibirsk',
  },
};

const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    selectCity(state, action: PayloadAction<IDropdownItem>) {
      state.city = action.payload;
    },
  },
});

export const { selectCity } = citySlice.actions;

export default citySlice.reducer;
