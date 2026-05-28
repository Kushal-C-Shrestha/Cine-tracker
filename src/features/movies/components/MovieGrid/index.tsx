import MovieCard from '@/features/movies/components/MovieCard'

const MovieGrid = ({ movies }: { movies: any[] }) => {
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
              genre: movie.genres,
              posterUrl: movie.poster_path,
            }}
          />
        ))}
      </div>
    </>
  )
}

export default MovieGrid
