// src/data/transports.js
// ============================================================
// 移動手段データ
// defunct: true = 原作当時は存在したが現在廃止・大幅縮小
// ============================================================

export const TRANSPORTS = [
  {
    id: 1,
    name: "飛行機",
    icon: "✈️",
    color: "#4a9eff",
    defunct: false,
    note: "国内線全般",
  },
  {
    id: 2,
    name: "新幹線",
    icon: "🚅",
    color: "#ff6b6b",
    defunct: false,
    note: "全線対象",
  },
  {
    id: 3,
    name: "高速バス",
    icon: "🚌",
    color: "#5dde8a",
    defunct: false,
    note: "夜行便含む",
  },
  {
    id: 4,
    name: "フェリー",
    icon: "⛴️",
    color: "#ffb347",
    defunct: false,
    note: "長距離航路",
  },
  {
    id: 5,
    name: "寝台列車",
    icon: "🌙",
    color: "#c77dff",
    defunct: true,
    note: "サンライズ除きほぼ廃止",
  },
  {
    id: 6,
    name: "在来線特急",
    icon: "🚃",
    color: "#ff9f43",
    defunct: false,
    note: "全国の特急列車",
  },
];