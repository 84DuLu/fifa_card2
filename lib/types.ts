export type CardRarity = "common" | "rare" | "epic" | "legendary"

export interface CardType {
  id: number
  name: string
  rarity: CardRarity
  effect: string
}
