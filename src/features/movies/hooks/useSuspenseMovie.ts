import { useAppDispatch } from "@/app/store/hooks"
import api from "@/features/movies/services/tmdbMoviesApi"
import { fetchResource } from "@/features/movies/store/movieCache"

export const useSuspenseMovie = () => {
    const dispatch = useAppDispatch()

    const fetchData = (endpoint: string, params: any) => {
        const entry = fetchResource(
            endpoint,
            params,
            () =>
                dispatch(
                    api.endpoints[endpoint].initiate(params)
                ).unwrap()
        )
        return entry.promise
    }

    const fetchGenres = () => {
        return fetchData("getGenres", {})
    }


    const fetchMovies = () => {
        return fetchData("getMovies", "")
    }

    const fetchMovieById = (id: number) => {
        return fetchData("getMovieById", id)
    }

    const searchMovies = (query: string) => {
        return fetchData("searchMovies", { query })
    }

    const fetchWatchlistMovies = (ids: number[]) => {
        return Promise.all(ids.map(id => fetchData("getMovieById", id)))
    }

    return { fetchGenres, fetchMovies, fetchMovieById, searchMovies, fetchWatchlistMovies }
}