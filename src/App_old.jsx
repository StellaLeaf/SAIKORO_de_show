// src/App.jsx
import { useDice, PHASE } from "./hooks/useDice";
import DiceFace from "./components/DiceFace";
import RollDice from "./components/RollDice";  // ← 追加

// 原作ボードの行の背景色（6色）
const ROW_COLORS = [
  "#f4a7b9", // 1: ピンク
  "#f4c07a", // 2: オレンジ
  "#c9a0dc", // 3: 紫
  "#f4e07a", // 4: 黄
  "#a0d4f4", // 5: 水色
  "#a0e4a0", // 6: 緑
];

export default function App() {
  const dice = useDice();

  return (
    <div
      className="min-h-screen p-4 max-w-lg mx-auto"
      style={{ background: "#f5ddd5", fontFamily: "'Noto Sans JP', sans-serif" }}
    >
      {/* タイトルエリア */}
      <header className="mb-4 text-center">
        <h1
          className="text-3xl font-black tracking-widest"
          style={{ color: "#1a1a1a" }}
        >
          サイコロでしょう
        </h1>
        <p className="text-xl text-zinc-400 mt-1 tracking-widest">
          SAIKORO de show
        </p>
      </header>

      {/* 出発地選択 */}
      <section className="mb-4 flex gap-2 justify-center flex-wrap">
        {["東京", "大阪", "札幌", "福岡", "名古屋"].map(city => (
          <button
            key={city}
            onClick={() => dice.setOrigin(city)}
            className="px-3 py-1 rounded-full text-xs border transition-all"
            style={{
              background:  dice.origin === city ? "#1a1a1a" : "transparent",
              color:       dice.origin === city ? "#f5ddd5" : "#888",
              borderColor: dice.origin === city ? "#1a1a1a" : "#bbb",
              fontWeight:  dice.origin === city ? 700 : 400,
            }}
          >
            {city}
          </button>
        ))}
      </section>

      {/* ボード本体 */}
      <section className="flex flex-col gap-2 mb-5">
        {dice.currentRoutes.map((route, i) => {
          const isSelected = dice.selectedRoute?.id === route.id;
          const isDecided  = dice.phase === PHASE.DONE && !isSelected;
            [
              { id:1, icon:"✈️", name:"飛行機" },
              { id:2, icon:"🚅", name:"新幹線" },
              { id:3, icon:"🚌", name:"高速バス" },
              { id:4, icon:"⛴️", name:"フェリー" },
              { id:5, icon:"🌙", name:"寝台列車" },
              { id:6, icon:"🚃", name:"在来線特急" },
            ].find(t => t.id === route.transportId);

          return (
            <div
              key={route.id}
              className="flex items-stretch rounded-xl overflow-hidden transition-all duration-300"
              style={{
                background: ROW_COLORS[i],
                height:     72,          // ← 行の高さを固定
                opacity:    isDecided ? 0.45 : 1,
                boxShadow:  isSelected
                  ? "0 0 0 3px #1a1a1a, 0 4px 12px rgba(0,0,0,0.3)"
                  : "0 2px 4px rgba(0,0,0,0.1)",
                transform:  isSelected ? "scale(1.02)" : "scale(1)",
              }}
            >
              {/* サイコロ */}
              <div className="flex items-center justify-center"
                style={{ width: 72, padding: "6px 0px 6px 6px" }}>
                <DiceFace value={route.diceNum} size="sm" />
              </div>

              {/* テキストエリア */}
              <div
                className="flex-1 flex items-center"
                style={{ padding: "4px 4px 4px 0px", overflow: "hidden", height: "100%" }}
              >
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 600 88"       
                  preserveAspectRatio="none"
                >
                  <text
                    x="0"
                    y="78"                    
                    dominantBaseline="auto"
                    fontFamily="'Yusei Magic', sans-serif"
                    fontWeight="1200"
                    fill="#1a1a1a"
                    fontSize="88"         
                    textLength="600"          
                    lengthAdjust="spacingAndGlyphs"
                    stroke="#1a1a1a" 
                    strokeWidth="2.5"
                    paintOrder="stroke fill"
                  >
                  {route.comment}   {route.destination}
                  </text>
                </svg>
              </div>
            </div>
          );
        })}
      </section>

      {/* サイコロ＋ボタン */}
      <section className="flex flex-col items-center gap-4 mb-5">
        <RollDice value={dice.diceValue} rolling={dice.rolling} />

        {dice.phase === PHASE.DONE && dice.selectedRoute && (
          <div
            className="w-full rounded-xl p-4 text-center"
            style={{ background: ROW_COLORS[(dice.selectedRoute.diceNum - 1)] }}
          >
            <div className="text-xs font-bold text-zinc-600 mb-1">決定！</div>
            <div className="text-2xl font-black text-zinc-900">
              {dice.selectedRoute.destination} へ！
            </div>
            <div className="text-xs text-zinc-600 mt-1">
              {dice.selectedRoute.comment}
            </div>
            {dice.selectedRoute.defunctNote && (
              <div className="text-xs text-red-600 mt-1 font-bold">
                ※{dice.selectedRoute.defunctNote}
              </div>
            )}
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={dice.roll}
            disabled={dice.rolling || dice.phase === PHASE.DONE}
            className="px-10 py-3 rounded-xl font-black text-base tracking-widest
              transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            style={{
              background:  "#1a1a1a",
              color:       "#f5ddd5",
              boxShadow:   "0 4px 0 #000",
            }}
          >
            {dice.rolling ? "振り中…" : "🎲 振る"}
          </button>

          {dice.phase === PHASE.DONE && (
            <button
              onClick={dice.reset}
              className="px-6 py-3 rounded-xl text-sm font-bold
                border-2 transition-all"
              style={{
                borderColor: "#1a1a1a",
                color:       "#1a1a1a",
                background:  "transparent",
              }}
            >
              もう一度
            </button>
          )}
        </div>
      </section>

      {/* 履歴 */}
      {dice.history.length > 0 && (
        <section
          className="rounded-xl p-3"
          style={{ background: "rgba(0,0,0,0.06)" }}
        >
          <p className="text-[10px] text-zinc-500 tracking-widest mb-2">HISTORY</p>
          <div className="flex flex-wrap gap-2">
            {dice.history.map((h, i) => (
              <span
                key={i}
                className="text-xs px-3 py-1 rounded-full font-bold"
                style={{
                  background: ROW_COLORS[(h.route.diceNum - 1)] + "cc",
                  color: "#1a1a1a",
                }}
              >
                {h.transport?.icon} {h.route.destination}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}