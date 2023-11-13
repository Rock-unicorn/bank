import { combineReducers, configureStore } from '@reduxjs/toolkit';
import CurrencySlice from 'features/CurrencyEnter/model/CurrencySlice';
import { coinbaseAPI } from 'shared/api/coinbaseAPI';

const rootReducer = combineReducers({
  currencyReduser: CurrencySlice,
  [coinbaseAPI.reducerPath]: coinbaseAPI.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(coinbaseAPI.middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
