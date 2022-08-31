import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CityState {
  name: string;
}

const initialState: CityState = {
  name: 'Novosibirsk',
};

export const citySlice = createSlice({
  name: 'city',
  initialState,
  reducers: {
    selectCity(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});

export default citySlice.reducer;
