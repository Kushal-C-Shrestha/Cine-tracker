import { use } from 'react'
import MovieGrid from '../MovieGrid'

const MovieGridContainer = ({ moviePromise }) => {
    const movies: any[] = use(moviePromise);


    return (
        <MovieGrid movies={movies} />
    )
}

export default MovieGridContainer