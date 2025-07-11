// src/lib/words.ts
import { LetterState } from '@/lib/types';

type WordModule = {
  WORDS: string[];
  VALID_WORDS: Set<string>;
};

const STATE_TYPE = {
  correct: 'state-correct',
  present: 'state-present',
  absent: 'state-absent',
  default: 'state-default',
};

const wordModuleCache = new Map<string, WordModule>();
export async function getWordModule(locale: string): Promise<WordModule> {
  if (wordModuleCache.has(locale)) {
    const cachedModule = wordModuleCache.get(locale);
    if (cachedModule) {
      return cachedModule;
    }
  }

  let wModule: WordModule;

  switch (locale) {
    case 'es':
      wModule = (await import('./words.es')).default;
      break;
    case 'en':
    default:
      wModule = (await import('./words.en')).default;
      break;
  }

  wordModuleCache.set(locale, wModule);
  return wModule;
}

export function getRandomWord(words: string[]): string {
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}

export function getClassForLetter(
  state?: LetterState,
  isActive = false
): string {
  if (state && STATE_TYPE[state]) return STATE_TYPE[state];
  if (isActive) return 'state-active';
  return STATE_TYPE.default;
}
