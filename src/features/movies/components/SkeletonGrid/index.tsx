import SkeletonCard from '@/features/movies/components/SkeletonCard'

const SkeletonGrid = () => (
  <div className="grid gap-4 md:gap-6 grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
    {Array.from({ length: 20 }).map((_, index) => (
      <SkeletonCard key={index} />
    ))}
  </div>
)

export default SkeletonGrid
