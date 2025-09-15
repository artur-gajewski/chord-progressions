export const KEYS = [
    "C","C#","Db","D","D#","Eb","E","F",
    "F#","Gb","G","G#","Ab","A","A#","Bb","B",
    "Cm","C#m","Dbm","Dm","D#m","Ebm","Em","Fm",
    "F#m","Gbm","Gm","G#m","Abm","Am","A#m","Bbm","Bm"
];

// Each number corresponds to a scale degree: 0=I, 1=II, ..., 6=VII
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
            [0, 6, 3],      // I bVII IV
            [0, 4, 3],      // I V IV
            [5, 4, 3],      // vi V IV
            [0, 3, 4],      // I IV V
            [0, 4, 6, 3],   // I V bVII IV
        ],
        chorus: [
            [0, 4, 5, 3],   // I V vi IV
            [3, 0, 4],      // IV I V
            [0, 6, 3],      // I bVII IV
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
            [0, 6, 3],      // I bVII IV
            [5, 4, 3],      // vi V IV
            [0, 4, 3],      // I V IV
            [0, 3, 4, 3],   // I IV V IV
        ],
        chorus: [
            [0, 3, 4, 0],   // I IV V I
            [4, 3, 0],      // V IV I
            [0, 6, 3],      // I bVII IV
            [0, 3, 4, 3],   // I IV V IV
            [5, 3, 0, 4],   // vi IV I V
        ],
    },
    metal: {
        verse: [
            [0, 4, 6],      // i bVI bVII
            [0, 3, 6],      // i iv bVII
            [0, 6, 4, 6],   // i bVII bVI bVII
            [0, 4, 3, 6],   // i v bVI bVII
            [0, 3, 0, 6],   // i iv i bVII
        ],
        chorus: [
            [0, 4, 6, 0],   // i bVI bVII i
            [0, 6, 4],      // i bVII bVI
            [0, 3, 6],      // i iv bVII
            [0, 4, 3, 6],   // i bVI iv bVII
            [0, 6, 0],      // i bVII i
        ],
    },
};
