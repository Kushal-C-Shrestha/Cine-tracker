import MovieCard from '@/features/movies/components/MovieCard'
import { useGetGenresQuery, useGetMoviesQuery } from '@/features/movies/services/tmdbMoviesApi'
import Loader from '@/components/atoms/Loader'
import { setSelectedMovieId } from '@/features/movies/store/movieSlice'
import { useAppDispatch } from '@/app/store/hooks'

const MovieGrid = () => {
  const dispatch = useAppDispatch();
  const { data: genres = {} } = useGetGenresQuery()
  const { data: movies = [], isLoading } = useGetMoviesQuery()

  if (isLoading) {
    return (
      <div className="flex-1 flex items-center justify-center gap-2">
        <Loader className="text-gray-500" />
        <p className="text-gray-500">Loading movies...</p>
      </div>
    )
  }

  if (movies.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500">No movies found</p>
      </div>
    )
  }

  return (
    <>
      <div className="grid gap-4 md:gap-6 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {movies.map((movie: any) => (
          <MovieCard
            key={movie.id}
            movie={{
              id: movie.id,
              title: movie.title,
              rating: movie.vote_average,
              genre: movie.genre_ids.map((id: number) => genres[id] || 'Unknown'),
              posterUrl: movie.poster_path,
            }}
            onClick={() => dispatch(setSelectedMovieId(movie.id))}
          />
        ))}
      </div>
    </>
  )
}

export default MovieGrid
