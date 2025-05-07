import type { CardType } from "./types"

export const cardPool: CardType[] = [
  // 普通卡牌 (Common)
  {
    id: 1,
    name: "Ban",
    rarity: "common",
    effect: "赛前使用。禁止对方一名球员在下场比赛中出战。",
  },
  {
    id: 2,
    name: "体能训练",
    rarity: "common",
    effect: "赛前使用。你的球队体能值+10，持续一场比赛。",
  },
  {
    id: 3,
    name: "战术调整",
    rarity: "common",
    effect: "比赛中使用。更换当前战术，不消耗战术变更次数。",
  },
  {
    id: 4,
    name: "替补上场",
    rarity: "common",
    effect: "比赛中使用。立即进行一次换人，不消耗换人次数。",
  },
  {
    id: 5,
    name: "加时休息",
    rarity: "common",
    effect: "加时赛前使用。你的球队体能恢复20%。",
  },
  {
    id: 6,
    name: "战术分析",
    rarity: "common",
    effect: "赛前使用。查看对手的首发阵容。",
  },
  {
    id: 7,
    name: "医疗团队",
    rarity: "common",
    effect: "比赛中使用。恢复一名球员的体能值。",
  },
  {
    id: 8,
    name: "球迷助威",
    rarity: "common",
    effect: "比赛中使用。提升球队士气，持续10分钟。",
  },

  // 稀有卡牌 (Rare)
  {
    id: 101,
    name: "战术大师",
    rarity: "rare",
    effect: "赛前使用。本场比赛战术变更次数+2。",
  },
  {
    id: 102,
    name: "精准传球",
    rarity: "rare",
    effect: "比赛中使用。接下来15分钟内，你的传球成功率提高20%。",
  },
  {
    id: 103,
    name: "铁壁防守",
    rarity: "rare",
    effect: "比赛中使用。接下来10分钟内，你的防守属性提高15。",
  },
  {
    id: 104,
    name: "换人大师",
    rarity: "rare",
    effect: "赛前使用。本场比赛换人次数+1。",
  },
  {
    id: 105,
    name: "点球专家",
    rarity: "rare",
    effect: "点球大战中使用。提高下一个点球的成功率30%。",
  },

  // 史诗卡牌 (Epic)
  {
    id: 201,
    name: "战术革新",
    rarity: "epic",
    effect: "赛前使用。解锁一个特殊战术，持续整场比赛。",
  },
  {
    id: 202,
    name: "超级替补",
    rarity: "epic",
    effect: "比赛中使用。下一个替补上场的球员属性提升20%，持续30分钟。",
  },
  {
    id: 203,
    name: "关键时刻",
    rarity: "epic",
    effect: "比赛最后15分钟使用。你的球队所有属性提升15%。",
  },
  {
    id: 204,
    name: "防守反击",
    rarity: "epic",
    effect: "比赛中使用。接下来的10分钟内，反击成功率提高40%。",
  },

  // 传说卡牌 (Legendary)
  {
    id: 301,
    name: "球星时刻",
    rarity: "legendary",
    effect: "比赛中使用。指定一名球员，其属性提升30%，持续整场比赛。",
  },
  {
    id: 302,
    name: "战术天才",
    rarity: "legendary",
    effect: "赛前使用。本场比赛中，你可以使用任意战术，且不消耗战术变更次数。",
  },
  {
    id: 303,
    name: "逆转时刻",
    rarity: "legendary",
    effect: "落后时使用。你的球队所有属性提升25%，持续20分钟。",
  },
]
