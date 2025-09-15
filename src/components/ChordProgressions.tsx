import React from "react";
import { type Scale } from "../data/scale";
import { getAllProgressionsForScale } from "../utils/chords";

interface Props {
  scale: Scale;
}

const ChordProgressions: React.FC<Props> = ({ scale }) => {
  const progressions = getAllProgressionsForScale(scale);

  return (
    <div style={{ marginTop: "1rem" }}>
      {progressions.map((prog, i) => (
        <div key={i} style={{ marginBottom: "1rem" }}>
          <strong>{prog.join(" - ")}</strong>
        </div>
      ))}
    </div>
  );
};

export default ChordProgressions;
