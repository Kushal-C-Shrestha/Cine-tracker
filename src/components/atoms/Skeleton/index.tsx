type Skeleton = {
  className?: string
}

const Skeleton = ({ className = "" }: Skeleton) => (
  <div className={`bg-zinc-700 animate-pulse ${className}`} />
)

export default Skeleton
