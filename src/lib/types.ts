// src/lib/types

export type Guess = {
  word: string;
  result: LetterState[];
};

export type LocaleWords = {
  WORDS: string[];
  VALID_WORDS: Set<string>;
};

export type LetterState = 'correct' | 'present' | 'absent';
