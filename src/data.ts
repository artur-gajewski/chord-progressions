export const MAJOR_KEYS = [
    "C", "C#", "Db", "D", "D#", "Eb", "E", "F",
    "F#", "Gb", "G", "G#", "Ab", "A", "A#", "Bb", "B",
];

export const MINOR_KEYS = MAJOR_KEYS.map(k => `${k}m`);
export const KEYS = [...MAJOR_KEYS, ...MINOR_KEYS];

/**
 * Progressions are in Roman numerals (I, vi, iv, i, bVII, etc.)
 */
export const STYLES: Record<string, { verse: string[][]; chorus: string[][] }> = {
    ballad: {
        verse: [
            ["I", "vi", "IV", "V"],
            ["I", "V", "vi", "IV"],
            ["vi", "IV", "I", "V"],
            ["I", "iii", "IV", "V"],
            ["I", "IV", "I", "V"],
        ],
        chorus: [
            ["IV", "V", "I", "vi"],
            ["I", "V", "IV", "V"],
            ["vi", "V", "IV", "I"],
            ["I", "V", "vi", "IV"],
            ["IV", "I", "V", "vi"],
        ],
    },

    rock: {
        verse: [
            ["I", "bVII", "IV"],
            ["I", "V", "IV"],
            ["vi", "V", "IV"],
            ["I", "IV", "V"],
            ["I", "V", "bVII", "IV"],
        ],
        chorus: [
            ["I", "V", "vi", "IV"],
            ["IV", "I", "V"],
            ["I", "bVII", "IV"],
            ["vi", "IV", "I", "V"],
            ["I", "IV", "I", "V"],
        ],
    },

    country: {
        verse: [
            ["I", "IV", "V"],
            ["I", "V", "IV"],
            ["I", "IV", "I", "V"],
            ["I", "V", "vi", "IV"],
            ["IV", "I", "V"],
        ],
        chorus: [
            ["I", "IV", "V", "I"],
            ["V", "IV", "I"],
            ["I", "vi", "IV", "V"],
            ["I", "IV", "I", "V"],
            ["I", "IV", "V", "vi"],
        ],
    },

    rnb: {
        verse: [
            ["ii", "V", "I"],
            ["I", "vi", "ii", "V"],
            ["I", "IV", "iii", "vi"],
            ["ii", "V", "iii", "vi"],
            ["I", "V", "vi", "IV"],
        ],
        chorus: [
            ["vi", "IV", "I", "V"],
            ["I", "V", "IV"],
            ["ii", "V", "I"],
            ["I", "IV", "V", "IV"],
            ["IV", "V", "vi", "I"],
        ],
    },

    punk: {
        verse: [
            ["I", "IV", "V"],
            ["I", "bVII", "IV"],
            ["vi", "V", "IV"],
            ["I", "V", "IV"],
            ["I", "IV", "V", "IV"],
        ],
        chorus: [
            ["I", "IV", "V", "I"],
            ["V", "IV", "I"],
            ["I", "bVII", "IV"],
            ["I", "IV", "V", "IV"],
            ["vi", "IV", "I", "V"],
        ],
    },

    metal: {
        verse: [
            ["i", "bVI", "bVII"],
            ["i", "iv", "bVII"],
            ["i", "bVII", "bVI", "bVII"],
            ["i", "v", "bVI", "bVII"],
            ["i", "iv", "i", "bVII"],
        ],
        chorus: [
            ["i", "bVI", "bVII", "i"],
            ["i", "bVII", "bVI"],
            ["i", "iv", "bVII"],
            ["i", "bVI", "iv", "bVII"],
            ["i", "bVII", "i"],
        ],
    },
};
