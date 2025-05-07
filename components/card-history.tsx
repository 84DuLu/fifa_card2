import type { CardType } from "@/lib/types"
import FootballCard from "@/components/football-card"
import { ScrollArea } from "@/components/ui/scroll-area"

interface CardHistoryProps {
  cards: CardType[]
}

export default function CardHistory({ cards }: CardHistoryProps) {
  if (cards.length === 0) {
    return <div className="h-[400px] flex items-center justify-center text-gray-300">还没有抽取过卡牌</div>
  }

  return (
    <ScrollArea className="h-[400px] pr-4">
      <div className="space-y-4">
        {cards.map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="flex items-center gap-4 p-2 rounded-lg hover:bg-green-600/30 transition-colors"
          >
            <FootballCard card={card} small />
            <div className="flex-1">
              <h4 className="font-bold">{card.name}</h4>
              <p className="text-sm text-gray-200">{card.effect}</p>
            </div>
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
