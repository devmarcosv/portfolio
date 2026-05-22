import { LucideIcon } from "lucide-react"

interface GameCardProps {
  title: string
  category: string
  icon: LucideIcon
}

export function GameCard({
  title,
  category,
  icon: Icon,
}: GameCardProps) {
  return (
    <div className="overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
      <div className="h-28 bg-zinc-900 flex items-center justify-center">
        <Icon className="w-8 h-8 text-zinc-700" />
      </div>

      <div className="p-5">
        <h3 className="text-sm font-medium text-zinc-200">
          {title}
        </h3>

        <p className="text-xs text-zinc-500 mt-1">
          {category}
        </p>
      </div>
    </div>
  )
}