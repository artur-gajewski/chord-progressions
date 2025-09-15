export type Chord = string;

export interface Scale {
  name: string;
  chords: Chord[];
}

// 12 Major Keys
export const scales: Scale[] = [
  { name: 'C Major', chords: ['C', 'Dm', 'Em', 'F', 'G', 'Am', 'Bdim'] },
  { name: 'G Major', chords: ['G', 'Am', 'Bm', 'C', 'D', 'Em', 'F#dim'] },
  { name: 'D Major', chords: ['D', 'Em', 'F#m', 'G', 'A', 'Bm', 'C#dim'] },
  { name: 'A Major', chords: ['A', 'Bm', 'C#m', 'D', 'E', 'F#m', 'G#dim'] },
  { name: 'E Major', chords: ['E', 'F#m', 'G#m', 'A', 'B', 'C#m', 'D#dim'] },
  { name: 'B Major', chords: ['B', 'C#m', 'D#m', 'E', 'F#', 'G#m', 'A#dim'] },
  { name: 'F# Major', chords: ['F#', 'G#m', 'A#m', 'B', 'C#', 'D#m', 'E#dim'] },
  { name: 'C# Major', chords: ['C#', 'D#m', 'E#m', 'F#', 'G#', 'A#m', 'B#dim'] },
  { name: 'F Major', chords: ['F', 'Gm', 'Am', 'Bb', 'C', 'Dm', 'Edim'] },
  { name: 'Bb Major', chords: ['Bb', 'Cm', 'Dm', 'Eb', 'F', 'Gm', 'Adim'] },
  { name: 'Eb Major', chords: ['Eb', 'Fm', 'Gm', 'Ab', 'Bb', 'Cm', 'Ddim'] },
  { name: 'Ab Major', chords: ['Ab', 'Bbm', 'Cm', 'Db', 'Eb', 'Fm', 'Gdim'] },
];

// 12 Minor Keys (natural minor)
export const minorScales: Scale[] = [
  { name: 'A Minor', chords: ['Am', 'Bdim', 'C', 'Dm', 'Em', 'F', 'G'] },
  { name: 'E Minor', chords: ['Em', 'F#dim', 'G', 'Am', 'Bm', 'C', 'D'] },
  { name: 'B Minor', chords: ['Bm', 'C#dim', 'D', 'Em', 'F#m', 'G', 'A'] },
  { name: 'F# Minor', chords: ['F#m', 'G#dim', 'A', 'Bm', 'C#m', 'D', 'E'] },
  { name: 'C# Minor', chords: ['C#m', 'D#dim', 'E', 'F#m', 'G#m', 'A', 'B'] },
  { name: 'G# Minor', chords: ['G#m', 'A#dim', 'B', 'C#m', 'D#m', 'E', 'F#'] },
  { name: 'D# Minor', chords: ['D#m', 'E#dim', 'F#', 'G#m', 'A#m', 'B', 'C#'] },
  { name: 'A# Minor', chords: ['A#m', 'B#dim', 'C#', 'D#m', 'E#m', 'F#', 'G#'] },
  { name: 'D Minor', chords: ['Dm', 'Edim', 'F', 'Gm', 'Am', 'Bb', 'C'] },
  { name: 'G Minor', chords: ['Gm', 'Adim', 'Bb', 'Cm', 'Dm', 'Eb', 'F'] },
  { name: 'C Minor', chords: ['Cm', 'Ddim', 'Eb', 'Fm', 'Gm', 'Ab', 'Bb'] },
  { name: 'F Minor', chords: ['Fm', 'Gdim', 'Ab', 'Bbm', 'Cm', 'Db', 'Eb'] },
];

export const commonProgressions = [
  ['I', 'IV', 'V', 'I'],
  ['I', 'V', 'vi', 'IV'],
  ['ii', 'V', 'I'],
  ['vi', 'IV', 'I', 'V'],
  ['I', 'vi', 'IV', 'V'],
];
