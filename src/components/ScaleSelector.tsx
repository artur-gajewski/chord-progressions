import React from "react";
import { type Scale } from "../data/scale";

interface Props {
  scales: Scale[];
  selectedScale: Scale | null;
  onSelect: (scale: Scale) => void;
}

const ScaleSelector: React.FC<Props> = ({
  scales,
  selectedScale,
  onSelect,
}) => {
  return (
    <div>
      <select
        style={{ fontSize: "1rem", padding: "0.5rem", borderRadius: "4px" }}
        id="scale"
        value={selectedScale?.name || ""}
        onChange={(e) => {
          const scale = scales.find((s) => s.name === e.target.value);
          if (scale) onSelect(scale);
        }}
      >
        <option value="">--Choose scale--</option>
        {scales.map((scale) => (
          <option key={scale.name} value={scale.name}>
            {scale.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ScaleSelector;
