const MAJOR_OFFSETS = [0,2,4,5,7,9,11];
const MINOR_OFFSETS = [0,2,3,5,7,8,10];

const SHARP_NOTES = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
const FLAT_NOTES  = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];

export function transposeProgression(prog: number[], key: string): string[] {
    const isMinor = key.endsWith("m");
    const root = isMinor ? key.slice(0,-1) : key;
    const chromatic = root.includes("b") ? FLAT_NOTES : SHARP_NOTES;
    const rootIndex = chromatic.indexOf(root);
    const offsets = isMinor ? MINOR_OFFSETS : MAJOR_OFFSETS;

    return prog.map(n => {
        const note = chromatic[(rootIndex + offsets[n]) % 12];
        return note + (isMinor ? "m" : "");
    });
}
