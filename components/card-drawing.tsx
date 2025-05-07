"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { CardType } from "@/lib/types"
import FootballCard from "@/components/football-card"

interface CardDrawingProps {
  isDrawing: boolean
  latestCard: CardType | undefined
}

export default function CardDrawing({ isDrawing, latestCard }: CardDrawingProps) {
  const [showCard, setShowCard] = useState(false)

  useEffect(() => {
    if (isDrawing) {
      setShowCard(false)
      const timer = setTimeout(() => {
        setShowCard(true)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [isDrawing])

  return (
    <div className="flex items-center justify-center h-[400px] relative">
      <AnimatePresence>
        {isDrawing && !showCard && (
          <motion.div
            key="card-back"
            initial={{ rotateY: 0, scale: 0.5 }}
            animate={{ rotateY: 180, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="w-64 h-96 bg-gradient-to-br from-blue-800 to-blue-600 rounded-xl flex items-center justify-center shadow-xl border-4 border-gold">
              <div className="text-white text-2xl font-bold rotate-180">FIFA CARD</div>
            </div>
          </motion.div>
        )}

        {showCard && latestCard && (
          <motion.div
            key="card-front"
            initial={{ rotateY: 180, opacity: 0 }}
            animate={{ rotateY: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <FootballCard card={latestCard} />
          </motion.div>
        )}

        {!isDrawing && !latestCard && <div className="text-center text-gray-300 text-xl">点击下方按钮抽取卡牌</div>}
      </AnimatePresence>
    </div>
  )
}
