// src/data.ts

// -------------------
// Exports: KEYS, STYLES, MODES, getProgressions
// -------------------

// Root selection options (allow both enharmonic spellings)
export const KEYS: string[] = [
  "C","C#","Db","D","D#","Eb","E","F","F#","Gb","G","G#","Ab","A","A#","Bb","B"
];

// -------------------
// Note names (chromatic)
// -------------------
const NOTES_SHARP = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const NOTES_FLAT  = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];

// choose flat vs sharp naming for a given root
function useNoteNames(root: string): string[] {
  if (root.includes("b")) return NOTES_FLAT;
  if (root.includes("#")) return NOTES_SHARP;
  const flatPreferred = new Set(["F","Bb","Eb","Ab","Db","Gb"]);
  return flatPreferred.has(root) ? NOTES_FLAT : NOTES_SHARP;
}

// -------------------
// Scale building (major / natural minor)
// -------------------
const MAJOR_STEPS = [2,2,1,2,2,2,1]; // W W H W W W H
const MINOR_STEPS = [2,1,2,2,1,2,2]; // natural minor: W H W W H W W

function buildScale(root: string, mode: "major" | "minor"): string[] {
  const chromatic = useNoteNames(root);
  const rootIndex = chromatic.indexOf(root);
  if (rootIndex === -1) {
    // try enharmonic fallback (if user passed e.g. "Gb" but chromatic chosen was sharps)
    const other = chromatic === NOTES_SHARP ? NOTES_FLAT : NOTES_SHARP;
    const altIndex = other.indexOf(root);
    if (altIndex === -1) throw new Error(`Invalid root: ${root}`);
    // switch chromatic to the other naming set
    return buildScaleFromChromatic(other, altIndex, mode);
  }
  return buildScaleFromChromatic(chromatic, rootIndex, mode);
}

function buildScaleFromChromatic(chromatic: string[], rootIndex: number, mode: "major" | "minor"): string[] {
  const steps = mode === "major" ? MAJOR_STEPS : MINOR_STEPS;
  const scale: string[] = [chromatic[rootIndex]];
  let idx = rootIndex;
  // push next 6 notes (total 7)
  for (let i = 0; i < 6; i++) {
    idx = (idx + steps[i]) % 12;
    scale.push(chromatic[idx]);
  }
  return scale;
}

// -------------------
// Mode chord qualities
// -------------------
export const MODES: Record<"major" | "minor", string[]> = {
  major: ["", "m", "m", "", "", "m", "dim"], // I ii iii IV V vi vii°
  minor: ["m", "dim", "", "m", "m", "", ""], // i ii° III iv v VI VII (natural minor)
};

// -------------------
// STYLES (degree arrays)
// 0..6 are scale degrees I..VII
// 7 = bVII (flat 7), 8 = bVI (flat 6)
// -------------------
export const STYLES: Record<string, { verse: number[][]; chorus: number[][] }> = {
  ballad: {
    verse: [
      [0, 5, 3, 4],   // I vi IV V
      [0, 4, 5, 3],   // I V vi IV
      [5, 3, 0, 4],   // vi IV I V
      [0, 2, 3, 4],   // I iii IV V
      [0, 3, 0, 4],   // I IV I V
    ],
    chorus: [
      [3, 4, 0, 5],   // IV V I vi
      [0, 4, 3, 4],   // I V IV V
      [5, 4, 3, 0],   // vi V IV I
      [0, 4, 5, 3],   // I V vi IV
      [3, 0, 4, 5],   // IV I V vi
    ],
  },

  rock: {
    verse: [
      [0, 7, 3],      // I bVII IV  (use 7 for bVII)
      [0, 4, 3],      // I V IV
      [5, 4, 3],      // vi V IV
      [0, 3, 4],      // I IV V
      [0, 4, 7, 3],   // I V bVII IV
    ],
    chorus: [
      [0, 4, 5, 3],   // I V vi IV
      [3, 0, 4],      // IV I V
      [0, 7, 3],      // I bVII IV
      [5, 3, 0, 4],   // vi IV I V
      [0, 3, 0, 4],   // I IV I V
    ],
  },

  country: {
    verse: [
      [0, 3, 4],      // I IV V
      [0, 4, 3],      // I V IV
      [0, 3, 0, 4],   // I IV I V
      [0, 4, 5, 3],   // I V vi IV
      [3, 0, 4],      // IV I V
    ],
    chorus: [
      [0, 3, 4, 0],   // I IV V I
      [4, 3, 0],      // V IV I
      [0, 5, 3, 4],   // I vi IV V
      [0, 3, 0, 4],   // I IV I V
      [0, 3, 4, 5],   // I IV V vi
    ],
  },

  rnb: {
    verse: [
      [1, 4, 0],      // ii V I
      [0, 5, 1, 4],   // I vi ii V
      [0, 3, 2, 5],   // I IV iii vi
      [1, 4, 2, 5],   // ii V iii vi
      [0, 4, 5, 3],   // I V vi IV
    ],
    chorus: [
      [5, 3, 0, 4],   // vi IV I V
      [0, 4, 3],      // I V IV
      [1, 4, 0],      // ii V I
      [0, 3, 4, 3],   // I IV V IV
      [3, 4, 5, 0],   // IV V vi I
    ],
  },

  punk: {
    verse: [
      [0, 3, 4],      // I IV V
      [0, 7, 3],      // I bVII IV
      [5, 4, 3],      // vi V IV
      [0, 4, 3],      // I V IV
      [0, 3, 4, 3],   // I IV V IV
    ],
    chorus: [
      [0, 3, 4, 0],   // I IV V I
      [4, 3, 0],      // V IV I
      [0, 7, 3],      // I bVII IV
      [0, 3, 4, 3],   // I IV V IV
      [5, 3, 0, 4],   // vi IV I V
    ],
  },

  metal: {
    verse: [
      [0, 8, 7],      // i bVI bVII  (8=bVI, 7=bVII)
      [0, 3, 7],      // i iv bVII
      [0, 7, 8, 7],   // i bVII bVI bVII
      [0, 8, 3, 7],   // i bVI iv bVII  (ordering may vary)
      [0, 3, 0, 7],   // i iv i bVII
    ],
    chorus: [
      [0, 8, 7, 0],   // i bVI bVII i
      [0, 7, 8],      // i bVII bVI
      [0, 3, 7],      // i iv bVII
      [0, 8, 3, 7],   // i bVI iv bVII
      [0, 7, 0],      // i bVII i
    ],
  },
};

// -------------------
// Transpose helpers
// -------------------
// degree: 0..6 = natural scale degrees; 7 = bVII; 8 = bVI
function transposeChord(root: string, degree: number, mode: "major" | "minor"): string {
  // choose chromatic for naming (to pick flats for keys like Db, Bb)
  const chromatic = useNoteNames(root);
  // find root index in chosen chromatic; if not found try other representation
  let rootIndex = chromatic.indexOf(root);
  if (rootIndex === -1) {
    const other = chromatic === NOTES_SHARP ? NOTES_FLAT : NOTES_SHARP;
    rootIndex = other.indexOf(root);
    if (rootIndex === -1) throw new Error(`Invalid root name: ${root}`);
    // set chromatic to the other one so naming matches selection
    // (useNoteNames handles common cases, this is fallback)
    // (we keep chromatic as 'other' here)
    // but for simplicity swap
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // (we can just use 'other' next)
  }

  // natural degree: build scale and grab index
  if (degree >= 0 && degree <= 6) {
    const scale = buildScale(root, mode);
    const chordRoot = scale[degree];
    const quality = MODES[mode][degree] || "";
    return chordRoot + quality;
  }

  // bVII -> semitone offset = root + 10 (i.e., -2)
  if (degree === 7) {
    const chrom = useNoteNames(root);
    const idx = chrom.indexOf(root);
    const note = chrom[(idx + 10) % 12];
    return note; // typically major
  }

  // bVI -> semitone offset = root + 8 (i.e., -4)
  if (degree === 8) {
    const chrom = useNoteNames(root);
    const idx = chrom.indexOf(root);
    const note = chrom[(idx + 8) % 12];
    return note; // typically major
  }

  throw new Error(`Unhandled degree code: ${degree}`);
}

// -------------------
// Public API
// -------------------
export function getProgressions(
  key: string,
  mode: "major" | "minor",
  style: string
): { verse: string[][]; chorus: string[][] } {
  const styleData = STYLES[style];
  if (!styleData) throw new Error(`Invalid style: ${style}`);

  // validate key
  // allow either enharmonic spelling passed in KEYS
  const allRoots = [...NOTES_SHARP, ...NOTES_FLAT];
  if (!allRoots.includes(key)) {
    // try adding/normalizing (e.g., user may pass "Db" etc.)
    // but if not found, throw
    throw new Error(`Invalid key/root: ${key}`);
  }

  return {
    verse: styleData.verse.map((prog) =>
      prog.map((degree) => transposeChord(key, degree, mode))
    ),
    chorus: styleData.chorus.map((prog) =>
      prog.map((degree) => transposeChord(key, degree, mode))
    ),
  };
}
