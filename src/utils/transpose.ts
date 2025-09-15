const SHARP_NOTES = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const FLAT_NOTES  = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];

// Major and natural-minor degree offsets (in semitones) from the root
const MAJOR_OFFSETS = [0, 2, 4, 5, 7, 9, 11];
const MINOR_OFFSETS = [0, 2, 3, 5, 7, 8, 10];

const FLAT_PREFERRED_ROOTS = new Set(["F","Bb","Eb","Ab","Db","Gb","Cb"]);

const ROMAN_TO_NUM: Record<string, number> = {
    I: 1, II: 2, III: 3, IV: 4, V: 5, VI: 6, VII: 7
};

function chooseChromatic(rootName: string) {
    if (rootName.includes("b")) return FLAT_NOTES;
    if (rootName.includes("#")) return SHARP_NOTES;
    if (FLAT_PREFERRED_ROOTS.has(rootName)) return FLAT_NOTES;
    return SHARP_NOTES;
}

function findRootIndex(chromatic: string[], rootName: string) {
    const idx = chromatic.indexOf(rootName);
    if (idx !== -1) return idx;
    // fallback: try the other naming (enharmonic)
    const other = chromatic === SHARP_NOTES ? FLAT_NOTES : SHARP_NOTES;
    return other.indexOf(rootName);
}

/**
 * Transpose a single Roman step (e.g. "I", "vi", "bVII", "iv") into a chord name
 * in the selected key (e.g. key="C" => "C", "Am", "Bb", "Fm").
 */
export function transposeStep(step: string, key: string): string {
    const isMinorKey = key.endsWith("m");
    const rootName = isMinorKey ? key.slice(0, -1) : key; // "Am" -> "A"
    const chromatic = chooseChromatic(rootName);
    const rootIndex = findRootIndex(chromatic, rootName);
    const offsets = isMinorKey ? MINOR_OFFSETS : MAJOR_OFFSETS;

    // parse accidental (b or #) at start
    let s = step;
    let accidental = 0;
    if (s.startsWith("b")) { accidental = -1; s = s.slice(1); }
    else if (s.startsWith("#")) { accidental = 1; s = s.slice(1); }

    s = s.replace("°", ""); // ignore degree sign if present
    const sUpper = s.toUpperCase();
    const romanNum = ROMAN_TO_NUM[sUpper] ?? 1;
    const baseOffset = offsets[romanNum - 1];
    const semitone = ((rootIndex + baseOffset + accidental) % 12 + 12) % 12;
    const note = chromatic[semitone] ?? SHARP_NOTES[semitone];

    // determine chord quality: if roman is lowercase => minor, uppercase => major
    // special-case: 'vii' in major often is diminished -> show 'dim'
    const originalNoAcc = step.replace(/^b|^#/, "").replace("°", "");
    const isLower = originalNoAcc !== originalNoAcc.toUpperCase();
    let suffix = "";
    if (originalNoAcc.toLowerCase() === "vii" && !isMinorKey) suffix = "dim";
    else if (isLower) suffix = "m";

    return note + suffix;
}

/** Transpose an entire progression array of steps into chord names for a key */
export function transposeProgression(prog: string[], key: string): string[] {
    return prog.map(step => transposeStep(step, key));
}
