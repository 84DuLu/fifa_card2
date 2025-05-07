import type { CardType } from "@/lib/types"

interface FootballCardProps {
  card: CardType
  small?: boolean
}

export default function FootballCard({ card, small = false }: FootballCardProps) {
  const rarityColors = {
    common: "from-gray-400 to-gray-600 border-gray-300",
    rare: "from-blue-400 to-blue-600 border-blue-300",
    epic: "from-purple-400 to-purple-600 border-purple-300",
    legendary: "from-yellow-400 to-yellow-600 border-yellow-300",
  }

  const rarityNames = {
    common: "普通",
    rare: "稀有",
    epic: "史诗",
    legendary: "传说",
  }

  const baseClasses = `rounded-xl overflow-hidden shadow-xl border-4 ${rarityColors[card.rarity]}`
  const sizeClasses = small ? "w-32 h-48" : "w-64 h-96"

  return (
    <div className={`${baseClasses} ${sizeClasses} flex flex-col bg-gradient-to-br`}>
      <div className="bg-black/30 p-2 text-center">
        <h3 className="font-bold text-white truncate">
          {small ? (card.name.length > 10 ? card.name.substring(0, 10) + "..." : card.name) : card.name}
        </h3>
      </div>

      <div className="flex-1 flex items-center justify-center p-2">
        <div
          className={`bg-white/10 rounded-lg w-full h-full flex items-center justify-center ${small ? "text-xs" : "text-base"}`}
        >
          <span className="text-white font-bold px-2 text-center">
            {small ? (card.effect.length > 40 ? card.effect.substring(0, 40) + "..." : card.effect) : card.effect}
          </span>
        </div>
      </div>

      <div className="bg-black/30 p-2 flex justify-between items-center">
        <div
          className={`rounded-full ${small ? "w-4 h-4 text-[8px]" : "w-8 h-8 text-xs"} flex items-center justify-center bg-white/20`}
        >
          <span className="font-bold text-white">{card.id}</span>
        </div>
        <div className={`text-white ${small ? "text-xs" : "text-sm"}`}>{rarityNames[card.rarity]}</div>
      </div>
    </div>
  )
}
