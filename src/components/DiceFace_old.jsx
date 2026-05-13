// src/components/DiceFace.jsx
// ボード上の固定サイコロ（白・スタンダード）

const DOT_PATTERNS = {
  1: [[1, 1]],
  2: [[0, 0], [2, 2]],
  3: [[0, 0], [1, 1], [2, 2]],
  4: [[0, 0], [0, 2], [2, 0], [2, 2]],
  5: [[0, 0], [0, 2], [1, 1], [2, 0], [2, 2]],
  6: [[0, 0], [0, 2], [1, 0], [1, 2], [2, 0], [2, 2]],
};

export default function DiceFace({ value, size = "md" }) {
  const dots     = value ? DOT_PATTERNS[value] : [];
  const dotColor = value === 1 ? "#c0392b" : "#1a1a1a";
  const isSmall  = size === "sm";
  const boxSize  = isSmall ? 55 : 80;
  const padding  = isSmall ? 4  : 12;
  const gap      = isSmall ? 2  : 5;

  return (
    <div style={{
      width:               boxSize,
      height:              boxSize,
      flexShrink:          0,
      background:          "#ffffff",
      borderRadius:        isSmall ? 6 : 10,
      border:              "1.5px solid #ccc",
      boxShadow:           "1px 2px 4px rgba(0,0,0,0.15)",
      display:             "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      padding:             padding,
      gap:                 gap,
      position:            "relative",
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
            background:   hasDot ? dotColor : "transparent",
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
          fontSize:       isSmall ? 16 : 26,
          fontWeight:     900,
          color:          "#ccc",
        }}>?</div>
      )}
    </div>
  );
}