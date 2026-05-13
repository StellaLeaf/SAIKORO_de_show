// src/components/RollDice.jsx
// 振るサイコロ（白・正方形・赤い点）

const DOT_PATTERNS = {
  1: [[1, 1]],
  2: [[0, 0], [2, 2]],
  3: [[0, 0], [1, 1], [2, 2]],
  4: [[0, 0], [0, 2], [2, 0], [2, 2]],
  5: [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]],
  6: [[0, 0], [0, 2], [1, 0], [1, 2], [2, 0], [2, 2]],
};

export default function RollDice({ value, rolling }) {
  const dots = value ? DOT_PATTERNS[value] : [];

  return (
    <div style={{
      width:               88,
      height:              88,
      flexShrink:          0,
      background:          "#ffffff",
      borderRadius:        0,
      border:              "none",
      display:             "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      padding:             10,
      gap:                 3,
      position:            "relative",
      animation:           rolling ? "rollDiceAnim 0.1s linear infinite" : "none",
    }}>
      {[...Array(9)].map((_, i) => {
        const row    = Math.floor(i / 3);
        const col    = i % 3;
        const hasDot = dots.some(([r, c]) => r === row && c === col);
        return (
          <div key={i} style={{
            width:        "100%",
            aspectRatio:  "1",
            borderRadius: "50%",
            background:   hasDot ? "#c0392b" : "transparent",
          }} />
        );
      })}
      {!value && (
        <div style={{
          position:       "absolute",
          inset:          0,
          display:        "flex",
          alignItems:     "center",
          justifyContent: "center",
          fontSize:       32,
          fontWeight:     900,
          color:          "#c0392b",
        }}>?</div>
      )}
    </div>
  );
}