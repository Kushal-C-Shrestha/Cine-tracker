import MovieDetail from '@/features/movies/components/MovieDetail'
import { useAppSelector } from '@/app/store/hooks'
import { selectSelectedMovie } from '@/features/movies/store/movieSelector'
import Input from '@/components/atoms/Input'
import { Search } from 'lucide-react'
import { useMemo, Suspense } from 'react'
import MovieGridContainer from "@/features/movies/components/MovieGridContainer";
import SkeletonGrid from "@/features/movies/components/SkeletonGrid";
import SkeletonSidebar from '@/features/movies/components/SkeletonSidebar'
import { useSuspenseMovie } from '@/features/movies/hooks/useSuspenseMovie'

const Home = () => {
  const selectedMovie = useAppSelector(selectSelectedMovie);
  const { fetchGenres, fetchMovies } = useSuspenseMovie()

  const homePromise = useMemo(() => {
    return Promise.all([fetchGenres(), fetchMovies()]).then(([genres, movies]) => {
      return movies.map((movie: any) => ({
        ...movie,
        genres: movie.genre_ids.map((id: number) => genres[id])
      }))
    })
  }, [])



  return (
    <>
      <div className="flex flex-1 min-h-0 overflow-hidden">
        <div className="flex-1 min-w-0 overflow-y-auto scroll-smooth scrollbar-none flex flex-col px-8 py-6">
          <div className='mb-6 flex justify-end h-10'>
            <Input rightIcon={<Search className='text-white' />} width="w-100" />
          </div>
          <Suspense fallback={<SkeletonGrid />}>
            <MovieGridContainer moviePromise={homePromise} />
          </Suspense>
        </div>
      </div>
      {selectedMovie && (
        <Suspense fallback={<SkeletonSidebar />}>
          <MovieDetail key={selectedMovie.id} movie={selectedMovie} />
        </Suspense>

      )}
    </>
  )
}

export default Home
