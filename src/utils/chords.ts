import { type Scale } from '../data/scale';

const romanNumeralMap: Record<string, number> = {
  I: 0,
  ii: 1,
  iii: 2,
  IV: 3,
  V: 4,
  vi: 5,
  vii: 6,
};

export const getChordsFromProgression = (scale: Scale, progression: string[]) => {
  return progression.map(step => scale.chords[romanNumeralMap[step]]);
};
