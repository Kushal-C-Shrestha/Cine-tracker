import { createApi } from "@reduxjs/toolkit/query/react"
import { tmdbBaseQuery } from "@/app/api/tmdbBaseQuery"

export const tmdbMoviesApi = createApi({
    reducerPath: "tmdbMoviesApi",
    baseQuery: tmdbBaseQuery,
    endpoints: (builder) => ({

        getMovies: builder.query<any[], void>({
            query: () => "movie/popular",
            transformResponse: (res: { results: any[] }) => res.results,
        }),

        getGenres: builder.query<Record<number, string>, void>({
            query: () => "genre/movie/list",
            transformResponse: (res: { genres: { id: number; name: string }[] }) =>
                res.genres.reduce<Record<number, string>>(
                    (acc, g) => ({ ...acc, [g.id]: g.name }),
                    {}
                ),
        }),

        getMovieById: builder.query<any, number>({
            query: (id) => `movie/${id}`,
        }),

    }),
})

export const { useGetMoviesQuery, useGetGenresQuery, useGetMovieByIdQuery } = tmdbMoviesApi
