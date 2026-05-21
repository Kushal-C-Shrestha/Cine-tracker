import { fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const tmdbBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_TMDB_BASE_URL,
    prepareHeaders: (headers) => {
        headers.set("Authorization", `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`)
        return headers
    }
})
