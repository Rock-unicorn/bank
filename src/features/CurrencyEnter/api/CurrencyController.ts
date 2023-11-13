import { coinbaseAPI } from 'shared/api/coinbaseAPI';
import { OptionsProps } from '../model/types';

interface CurrencyResponseSchema {
  data: OptionsProps[];
}

const currencyApi = coinbaseAPI.injectEndpoints({
  endpoints: (build) => ({
    getAllCurrencies: build.query<OptionsProps[], void>({
      query: () => '/currencies/',
      transformResponse: (response: CurrencyResponseSchema) => response.data,
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'currencies' as const, id })),
              { type: 'currencies', id: 'LIST' },
            ]
          : [{ type: 'currencies', id: 'LIST' }],
      keepUnusedDataFor: 60 * 60 * 24,
    }),
  }),
});

export const { useGetAllCurrenciesQuery } = currencyApi;
export const { endpoints } = currencyApi;
