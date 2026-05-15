import MovieGrid from '@/features/movies/components/MovieGrid'

const Home = () => {
  return (
    <div className="flex flex-1 min-h-0 overflow-hidden">
      <div className="flex-1 min-w-0 overflow-y-auto scroll-smooth scrollbar-none flex flex-col px-8 py-6">
        <MovieGrid />
      </div>
    </div>
  )
}

export default Home