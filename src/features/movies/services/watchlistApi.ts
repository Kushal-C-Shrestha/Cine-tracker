import { createApi } from '@reduxjs/toolkit/query/react'
import { supabase } from '@/lib/supabase'
import supabaseBaseQuery from '@/app/api/supabaseBaseQuery'

export const watchlistApi = createApi({
  reducerPath: 'watchlistApi',
  baseQuery: supabaseBaseQuery,
  endpoints: (builder) => ({

    getWatchlistIds: builder.query<number[], string>({
      query: (userId) => () =>
        supabase.from('watchlist').select('movie_id').eq('user_id', userId),
      transformResponse: (rows: { movie_id: number }[]) =>
        rows.map((r) => r.movie_id),
    }),

    addToWatchlist: builder.mutation<void, { userId: string; movieId: number }>({
      query: ({ userId, movieId }) => () =>
        supabase.from('watchlist').insert({ user_id: userId, movie_id: movieId }),
      async onQueryStarted({ userId, movieId }, { dispatch, queryFulfilled }) {
        const patch = dispatch(
          watchlistApi.util.updateQueryData('getWatchlistIds', userId, (draft) => {
            draft.push(movieId)
          })
        )
        try { await queryFulfilled }
        catch { patch.undo() }
      },
    }),

    removeFromWatchlist: builder.mutation<void, { userId: string; movieId: number }>({
      query: ({ userId, movieId }) => () =>
        supabase.from('watchlist').delete().eq('user_id', userId).eq('movie_id', movieId),
      async onQueryStarted({ userId, movieId }, { dispatch, queryFulfilled }) {
        const patch = dispatch(
          watchlistApi.util.updateQueryData('getWatchlistIds', userId, (draft) => {
            const i = draft.indexOf(movieId)
            if (i !== -1) draft.splice(i, 1)
          })
        )
        try { await queryFulfilled }
        catch { patch.undo() }
      },
    }),

  }),
})

export const {
  useGetWatchlistIdsQuery,
  useAddToWatchlistMutation,
  useRemoveFromWatchlistMutation,
} = watchlistApi

export default watchlistApi.reducer;
