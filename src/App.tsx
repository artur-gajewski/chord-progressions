import { useState } from "react";
import { KEYS, STYLES } from "./data";
import { transposeProgression } from "./utils/transpose";
import "./index.css";

export default function App() {
    const styleNames = Object.keys(STYLES);
    const [selectedKey, setSelectedKey] = useState(KEYS[0]);
    const [selectedStyle, setSelectedStyle] = useState(styleNames[0]);

    // Get current style progressions
    const styleProgressions = STYLES[selectedStyle];

    // Transpose each progression to the selected key
    const verseChords = styleProgressions.verse.map(p => transposeProgression(p, selectedKey));
    const chorusChords = styleProgressions.chorus.map(p => transposeProgression(p, selectedKey));

    return (
        <div className="app">
            <h1>Chord Progression Generator</h1>

            <div className="selectors">
                <div>
                    <label htmlFor="key-select">Key</label><br/>
                    <select
                        id="key-select"
                        value={selectedKey}
                        onChange={e => setSelectedKey(e.target.value)}
                    >
                        {KEYS.map(k => (
                            <option key={k} value={k}>{k}</option>
                        ))}
                    </select>
                </div>

                <div>
                    <label htmlFor="style-select">Style</label><br/>
                    <select
                        id="style-select"
                        value={selectedStyle}
                        onChange={e => setSelectedStyle(e.target.value)}
                    >
                        {styleNames.map(s => (
                            <option key={s} value={s}>{s.toUpperCase()}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="progressions">
                <div className="progression-card">
                    <div className="progression-title">Verse Progressions</div>
                    {verseChords.map((prog, idx) => (
                        <div key={idx} className="chords">
                            {prog.map((ch, cIdx) => (
                                <div key={cIdx} className="chord">{ch}</div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="progression-card">
                    <div className="progression-title">Chorus Progressions</div>
                    {chorusChords.map((prog, idx) => (
                        <div key={idx} className="chords">
                            {prog.map((ch, cIdx) => (
                                <div key={cIdx} className="chord">{ch}</div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
