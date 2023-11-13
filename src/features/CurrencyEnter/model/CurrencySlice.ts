import { createSlice } from '@reduxjs/toolkit';
import { endpoints } from '../api/CurrencyController';

export interface StateType {
  name: string;
}

const initialState: StateType = {
  name: '',
};

const currencySlice = createSlice({
  name: 'currency',
  initialState,
  reducers: {
    setCurrency: (state, action) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      endpoints.getAllCurrencies.matchFulfilled,
      (state, action) => {
        state.name = action.payload[0].name;
      }
    ),
      builder.addMatcher(endpoints.getAllCurrencies.matchRejected, (state) => {
        state.name = '';
      });
  },
});

export default currencySlice.reducer;
export const { setCurrency } = currencySlice.actions;
