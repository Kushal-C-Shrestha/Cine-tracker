import MovieGrid from '@/features/movies/components/MovieGrid'
import MovieDetail from '@/features/movies/components/MovieDetail'
import { useAppSelector } from '@/app/store/hooks'
import { selectSelectedMovieId } from '@/features/movies/store/movieSelector'
import { setSelectedMovieId } from '@/features/movies/store/movieSlice'
import { useAppDispatch } from '@/app/store/hooks'

const Home = () => {
  const selectedMovieId = useAppSelector(selectSelectedMovieId);
  const dispatch = useAppDispatch();

  return (
    <>
      <div className="flex flex-1 min-h-0 overflow-hidden">
        <div className="flex-1 min-w-0 overflow-y-auto scroll-smooth scrollbar-none flex flex-col px-8 py-6">
          <MovieGrid />
        </div>
      </div>
      {selectedMovieId && (
        <MovieDetail
          movie={{ id: selectedMovieId }}
          setSelectedMovie={() => dispatch(setSelectedMovieId(null))}
        />
      )}
    </>
  )
}

export default Home