import React, { useState } from "react";
import "./App.css";
import { scales, minorScales, type Scale, musicStyles } from "./data/scale";
import ScaleSelector from "./components/ScaleSelector";
import ChordProgressions from "./components/ChordProgressions";

function App() {
  const [selectedScale, setSelectedScale] = useState<Scale | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<string>("");

  const allScales = [...scales, ...minorScales];

  return (
    <div className="App" style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <ScaleSelector
        scales={allScales}
        selectedScale={selectedScale}
        onSelect={setSelectedScale}
      />

      <div style={{ marginTop: "1rem" }}>
        <select
          style={{
            width: "100%",
            padding: "0.5rem",
            borderRadius: "4px",
            fontSize: "1rem",
          }}
          id="style"
          value={selectedStyle}
          onChange={(e) => setSelectedStyle(e.target.value)}
        >
          <option value="">--Choose style--</option>
          {musicStyles.map((style) => (
            <option key={style.name} value={style.name}>
              {style.name}
            </option>
          ))}
        </select>
      </div>

      {selectedScale && selectedStyle && (
        <ChordProgressions scale={selectedScale} styleName={selectedStyle} />
      )}
    </div>
  );
}

export default App;
