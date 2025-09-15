import { useState } from "react";
import "./App.css";
import { scales, minorScales, type Scale } from "./data/scale";
import ScaleSelector from "./components/ScaleSelector";
import ChordProgressions from "./components/ChordProgressions";

function App() {
  const [selectedScale, setSelectedScale] = useState<Scale | null>(null);

  const allScales = [...scales, ...minorScales];

  return (
    <div
      className="App"
      style={{ padding: "2rem", paddingTop: 0, fontFamily: "sans-serif" }}
    >
      <h2>Chord Progressions</h2>
      <ScaleSelector
        scales={allScales}
        selectedScale={selectedScale}
        onSelect={setSelectedScale}
      />
      {selectedScale && <ChordProgressions scale={selectedScale} />}
    </div>
  );
}

export default App;
