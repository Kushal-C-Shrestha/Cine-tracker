import toast from 'react-hot-toast'
import { useAppSelector } from '@/app/store/hooks'
import { selectUser } from '@/features/auth/store/authSelector'
import {
  useGetWatchlistIdsQuery,
  useAddToWatchlistMutation,
  useRemoveFromWatchlistMutation,
} from '@/features/movies/services/watchlistApi'

const useWatchlist = () => {
  const user = useAppSelector(selectUser)

  const { data: watchlistIds = [], isLoading: loading } = useGetWatchlistIdsQuery(
    user?.id ?? '',
    { skip: !user?.id }
  )

  const [addToWatchlist] = useAddToWatchlistMutation()
  const [removeFromWatchlist] = useRemoveFromWatchlistMutation()

  const isInWatchlist = (movieId: number) => watchlistIds.includes(movieId)

  const addMovie = async (movieId: number) => {
    if (!user?.id) {
      toast.error('Sign in to add movies to your watchlist')
      return
    }
    await addToWatchlist({ userId: user.id, movieId }).unwrap()
  }

  const removeMovie = async (movieId: number) => {
    if (!user?.id) return
    await removeFromWatchlist({ userId: user.id, movieId }).unwrap()
  }

  const toggleMovie = async (movieId: number) => {
    if (isInWatchlist(movieId)) await removeMovie(movieId)
    else await addMovie(movieId)
  }

  return { watchlistIds, loading, isInWatchlist, addMovie, removeMovie, toggleMovie }
}

export default useWatchlist
