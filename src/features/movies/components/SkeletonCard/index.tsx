import Skeleton from "@/components/atoms/Skeleton"

const SkeletonCard = () => (
  <div className="flex flex-col w-full">
    <Skeleton className="w-full h-64 rounded-lg" />
    <div className="flex justify-between w-full mt-2 gap-2">
      <Skeleton className="h-4 flex-1" />
      <Skeleton className="h-4 w-12" />
    </div>
    <Skeleton className="h-3 w-2/3 mt-2" />
  </div>
)

export default SkeletonCard
