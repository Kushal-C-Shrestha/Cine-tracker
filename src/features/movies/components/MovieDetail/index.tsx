import { X } from 'lucide-react'
import { useGetMovieByIdQuery } from '@/features/movies/services/tmdbMoviesApi'

type MovieDetailProps = {
  movie: { id: number }
  setSelectedMovie: () => void
}

const MovieDetail = ({ movie, setSelectedMovie }: MovieDetailProps) => {
  const { data: movieDetail, isLoading } = useGetMovieByIdQuery(movie.id)

  if (isLoading) {
    return (
      <div className="w-72 md:w-80 lg:w-96 xl:w-100 bg-black flex items-center justify-center min-h-100">
        <p className="text-gray-500 animate-pulse text-sm font-medium tracking-wide">Loading...</p>
      </div>
    )
  }

  return (
    <div className="w-72 md:w-80 lg:w-96 xl:w-100 bg-black flex flex-col shrink-0 overflow-hidden">
      <div className="relative shrink-0">
        <img
          src={movieDetail?.backdrop_path ? `${import.meta.env.VITE_TMDB_IMAGE_BASE_URL}${movieDetail.backdrop_path}` : ''}
          alt={movieDetail?.title || 'Movie Poster'}
          className="w-full aspect-video object-cover"
        />
        <button
          onClick={() => setSelectedMovie()}
          className="absolute top-4 right-4 text-white rounded-full bg-black/30 backdrop-blur-md p-1 border border-white/10 hover:bg-black/60 transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-none p-6">
        <h2 className="text-white text-2xl font-bold">{movieDetail?.title}</h2>

        {movieDetail?.vote_average !== undefined && (
          <div className="flex items-center gap-2 my-2">
            <span className="text-yellow-400 font-semibold">{movieDetail.vote_average.toFixed(1)}</span>
            <span className="text-gray-400 text-sm">/ 10</span>
          </div>
        )}

        <div className="flex gap-2 flex-wrap mb-2">
          {movieDetail?.genres?.map((genre: any) => (
            <span key={genre.id} className="text-xs px-2 py-1 bg-gray-800 rounded text-gray-400">
              {genre.name}
            </span>
          ))}
        </div>

        <span className="text-sm text-gray-400 block mb-4">Released: {movieDetail.release_date}</span>
        <p className="text-gray-300 text-sm leading-relaxed">{movieDetail?.overview}</p>
      </div>

    </div>
  )
}

export default MovieDetail