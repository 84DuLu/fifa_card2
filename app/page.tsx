"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CardDrawing from "@/components/card-drawing"
import CardHistory from "@/components/card-history"
import type { CardType } from "@/lib/types"
import { cardPool } from "@/lib/card-pool"

export default function Home() {
  const [drawnCards, setDrawnCards] = useState<CardType[]>([])
  const [isDrawing, setIsDrawing] = useState(false)

  const drawCard = () => {
    if (isDrawing) return

    setIsDrawing(true)

    // Determine rarity first based on probabilities
    const rarityRoll = Math.random() * 100
    let rarity: "common" | "rare" | "epic" | "legendary"

    if (rarityRoll < 50) {
      rarity = "common"
    } else if (rarityRoll < 80) {
      rarity = "rare"
    } else if (rarityRoll < 95) {
      rarity = "epic"
    } else {
      rarity = "legendary"
    }

    // Filter cards by rarity
    const rarityPool = cardPool.filter((card) => card.rarity === rarity)

    // Select random card from the rarity pool
    const randomIndex = Math.floor(Math.random() * rarityPool.length)
    const drawnCard = rarityPool[randomIndex]

    // Add to drawn cards
    setDrawnCards((prev) => [drawnCard, ...prev])

    // Reset drawing state after animation
    setTimeout(() => {
      setIsDrawing(false)
    }, 2000)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-green-800 to-green-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          FIFA 抽卡游戏
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="col-span-1 lg:col-span-2 bg-green-700/50 border-green-600">
            <CardContent className="p-6">
              <CardDrawing isDrawing={isDrawing} latestCard={drawnCards[0]} />

              <div className="mt-6 text-center">
                <Button
                  size="lg"
                  onClick={drawCard}
                  disabled={isDrawing}
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-6 text-xl"
                >
                  {isDrawing ? "抽取中..." : "抽取卡牌"}
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-700/50 border-green-600">
            <CardContent className="p-6">
              <Tabs defaultValue="history">
                <TabsList className="grid grid-cols-2 mb-4 bg-green-800">
                  <TabsTrigger value="history">抽卡历史</TabsTrigger>
                  <TabsTrigger value="info">概率信息</TabsTrigger>
                </TabsList>

                <TabsContent value="history">
                  <CardHistory cards={drawnCards} />
                </TabsContent>

                <TabsContent value="info">
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">抽卡概率</h3>
                    <ul className="space-y-2">
                      <li className="flex justify-between">
                        <span>普通 (Common)</span>
                        <span className="font-mono">50%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>稀有 (Rare)</span>
                        <span className="font-mono">30%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>史诗 (Epic)</span>
                        <span className="font-mono">15%</span>
                      </li>
                      <li className="flex justify-between">
                        <span>传说 (Legendary)</span>
                        <span className="font-mono">5%</span>
                      </li>
                    </ul>

                    <h3 className="text-xl font-bold mt-6">卡牌总数</h3>
                    <p>卡池中共有 {cardPool.length} 张卡牌</p>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
