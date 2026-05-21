import Skeleton from "@/components/atoms/Skeleton"

const SkeletonSidebar = () => (
  <div className="w-72 md:w-80 lg:w-96 xl:w-100 bg-zinc-900 flex flex-col relative shrink-0">
    <Skeleton className="w-full aspect-video rounded-none" />
    <div className="flex flex-col p-6 gap-3">
      <Skeleton className="h-7 w-3/4" />
      <Skeleton className="h-4 w-16" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-24" />
      </div>
      <Skeleton className="h-4 w-28" />
      <div className="flex flex-col gap-2 mt-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
    <div className="flex gap-4 absolute bottom-0 left-0 px-6 py-4 w-full bg-zinc-900">
      <Skeleton className="h-10 flex-1" />
      <Skeleton className="h-10 flex-1" />
    </div>
  </div>
)

export default SkeletonSidebar
