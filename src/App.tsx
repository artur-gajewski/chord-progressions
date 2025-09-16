import { useState, useMemo } from "react";
import "./App.css";
import { KEYS, STYLES, getProgressions } from "./data";

export default function App() {
  const styleNames = Object.keys(STYLES);

  const [selectedKey, setSelectedKey] = useState<string>("C");
  const [selectedMode, setSelectedMode] = useState<"major" | "minor">("major");
  const [selectedStyle, setSelectedStyle] = useState<string>(styleNames[0]);

  // recompute progressions only when inputs change
  const { verse, chorus } = useMemo(() => {
    return getProgressions(selectedKey, selectedMode, selectedStyle);
  }, [selectedKey, selectedMode, selectedStyle]);

  return (
    <div className="app">
      <h1>Chord Progression Generator</h1>

      <div className="selectors">
        <div className="selector">
          <label htmlFor="key-select">Key</label>
          <br />
          <select
            id="key-select"
            value={selectedKey}
            onChange={(e) => setSelectedKey(e.target.value)}
          >
            {KEYS.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>

        <div className="selector">
          <label htmlFor="mode-select">Mode</label>
          <br />
          <select
            id="mode-select"
            value={selectedMode}
            onChange={(e) =>
              setSelectedMode(e.target.value as "major" | "minor")
            }
          >
            <option value="major">Major</option>
            <option value="minor">Minor</option>
          </select>
        </div>

        <div className="selector">
          <label htmlFor="style-select">Style</label>
          <br />
          <select
            id="style-select"
            value={selectedStyle}
            onChange={(e) => setSelectedStyle(e.target.value)}
          >
            {styleNames.map((s) => (
              <option key={s} value={s}>
                {s.toUpperCase()}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="progressions">
        <div className="progression-card">
          <div className="progression-title">Verse Progressions</div>
          {verse.map((prog, idx) => (
            <div key={idx} className="chords">
              {prog.map((ch, cIdx) => (
                <div key={cIdx} className="chord">
                  {ch}
                </div>
              ))}
            </div>
          ))}
        </div>

        <div className="progression-card">
          <div className="progression-title">Chorus Progressions</div>
          {chorus.map((prog, idx) => (
            <div key={idx} className="chords">
              {prog.map((ch, cIdx) => (
                <div key={cIdx} className="chord">
                  {ch}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
