import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/store/authSlice";
import { tmdbMoviesApi } from "@/features/movies/services/tmdbMoviesApi";
import movieReducer from "@/features/movies/store/movieSlice"
import { watchlistApi } from "@/features/movies/services/watchlistApi";

export const store = configureStore({
    reducer: {
        "auth": authReducer,
        "movie": movieReducer,
        ["tmdbMoviesApi"]: tmdbMoviesApi.reducer,
        ["watchlistApi"]: watchlistApi.reducer,
    }, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbMoviesApi.middleware).concat(watchlistApi.middleware)
    ,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
