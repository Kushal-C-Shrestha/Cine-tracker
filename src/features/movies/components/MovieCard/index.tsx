import { useAppDispatch } from "@/app/store/hooks"
import { setSelectedMovie } from "@/features/movies/store/movieSlice"

type MovieCardProps = {
    movie?: {
        id: number
        title: string
        rating: number
        genre: string[]
        posterUrl?: string
    },
    onClick?: () => void
}

const MovieCard = ({ movie }: MovieCardProps) => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        dispatch(setSelectedMovie(movie));
    }
    return (
        <div className="flex flex-col w-full cursor-pointer" onClick={handleClick}>
            <div className="rounded-lg overflow-hidden">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie?.posterUrl}`}
                    alt={movie?.title}
                    className="w-full h-64 object-cover object-top"
                />
            </div>
            <div className="flex justify-between w-full mt-2 gap-2">
                <h2 className="text-sm text-white flex-1 truncate">{movie?.title}</h2>
                <p className="text-sm text-white">{movie?.rating.toFixed(1)}/10</p>
            </div>
            <p className="text-xs text-zinc-400 mt-1">{movie?.genre.slice(0, 3).join(' · ')}</p>
        </div>
    )
}

export default MovieCard
