import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IDropdownItem } from '../../types/IDropdownItem';

interface CityState {
  city: IDropdownItem;
}

const initialState: CityState = {
  city: {
    id: 1,
    label: 'Новосибирск',
    value: 'Novosibirsk',
  },
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    selectCity(state, action: PayloadAction<IDropdownItem>) {
      state.city = action.payload;
    },
  },
});

export default citySlice.reducer;
