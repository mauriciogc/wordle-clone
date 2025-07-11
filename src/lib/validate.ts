// src/lib/validate.ts
import { LetterState } from '@/lib/types';

export function validateGuess(guess: string, solution: string): LetterState[] {
  const result: LetterState[] = Array(5).fill('absent');
  const solutionChars = solution.split('');
  const guessChars = guess.split('');
  const used = Array(5).fill(false);

  for (let i = 0; i < 5; i++) {
    if (guessChars[i] === solutionChars[i]) {
      result[i] = 'correct';
      used[i] = true;
      guessChars[i] = '';
    }
  }

  for (let i = 0; i < 5; i++) {
    if (result[i] !== 'correct' && guessChars[i]) {
      const index = solutionChars.findIndex(
        (c, j) => c === guessChars[i] && !used[j]
      );
      if (index !== -1) {
        result[i] = 'present';
        used[index] = true;
      }
    }
  }

  return result;
}

export function isValidWord(word: string, VALID_WORDS: Set<string>): boolean {
  return VALID_WORDS.has(word.toLowerCase());
}
