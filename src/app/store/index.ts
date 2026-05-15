import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/store/authSlice";
import { tmdbMoviesApi } from "@/features/movies/services/tmdbMoviesApi";

export const store = configureStore({
    reducer: {
        "auth": authReducer,
        ["tmdbMoviesApi"]: tmdbMoviesApi.reducer,
    }, middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(tmdbMoviesApi.middleware)
    ,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
