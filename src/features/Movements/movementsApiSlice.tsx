import { createSelector, createEntityAdapter } from '@reduxjs/toolkit';

import { apiSlice } from '../../app/api/apiSlice';
import { RootState } from '../../app/store';

const movementsAdapter = createEntityAdapter({});

const initialState = movementsAdapter.getInitialState();

export const movementsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMovements: builder.query({
      query: () => ({
        url: '/api/v1/transactions',
        validateStatus: (response, result) => {
          return response.status === 200 && !result.isError;
        },
      }),
      providesTags: (result, _, __) => {
        if (result?.ids) {
          return [
            { type: 'Movement', id: 'LIST' },
            ...result.ids.map((id: string) => ({ type: 'Movement', id })),
          ];
        } else return [{ type: 'Movement', id: 'LIST' }];
      },
    }),
  }),
});

export const { useGetMovementsQuery } = movementsApiSlice;

// returns the query result object
export const selectMovementsResult = movementsApiSlice.endpoints.getMovements.select(0);

// creates memoized selector
const selectMovementsData = createSelector(
  selectMovementsResult,
  (movementsResult) => movementsResult.data, // normalized state object with ids & entities
);

//getSelectors creates these selectors and we rename them with aliases using destructuring
export const {
  selectAll: selectAllNotes,
  selectById: selectNoteById,
  selectIds: selectNoteIds,
  // Pass in a selector that returns the notes slice of state
} = movementsAdapter.getSelectors<RootState>((state) => selectMovementsData(state) ?? initialState);
