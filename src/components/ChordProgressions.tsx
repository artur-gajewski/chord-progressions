import React from "react";
import { type Scale, musicStyles } from "../data/scale";

interface Props {
  scale: Scale;
  styleName: string;
}

// Map Roman numerals to chord indexes
const romanMap: Record<string, number> = {
  I: 0,
  ii: 1,
  iii: 2,
  IV: 3,
  V: 4,
  vi: 5,
  vii: 6,
  i: 0,
  bII: 1,
  bIII: 2,
  bVI: 5,
  bVII: 6,
  iv: 3,
  v: 4,
  VI: 5,
  III: 2,
  VII: 6,
};

const ChordProgressions: React.FC<Props> = ({ scale, styleName }) => {
  const style = musicStyles.find((s) => s.name === styleName);
  if (!style) return <p>No progressions for this style.</p>;

  const progressions = style.progressions.map((prog) =>
    prog.map((step) => {
      const idx = romanMap[step];
      return scale.chords[idx] ?? step; // fallback if not found
    })
  );

  return (
    <div style={{ marginTop: "2rem" }}>
      {progressions.map((prog, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <strong>{prog.join(" - ")}</strong>
        </div>
      ))}
    </div>
  );
};

export default ChordProgressions;
