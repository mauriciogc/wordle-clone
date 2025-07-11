// src/hooks/useGame.ts
import { useEffect, useState, useCallback } from 'react';
import { useLocale } from 'next-intl';

import { useAppContext } from '@/context/AppContext';
import { Guess, LetterState, LocaleWords } from '@/lib/types';
import { validateGuess, isValidWord } from '@/lib/validate';
import { getWordModule, getRandomWord } from '@/lib/words';

export function useGame() {
  const { setIsLoading } = useAppContext();
  const locale = useLocale();
  const [lastKeyPressed, setLastKeyPressed] = useState<string | null>(null);
  const [wordsModule, setWordsModule] = useState<LocaleWords | null>(null);
  const [solution, setSolution] = useState('');
  const [current, setCurrent] = useState('');
  const [guesses, setGuesses] = useState<Guess[]>([]);
  const [shake, setShake] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const keyStates: Record<string, LetterState> = {};
  guesses.forEach(({ word, result }) => {
    word.split('').forEach((char, i) => {
      const prev = keyStates[char];
      const next = result[i];
      if (prev === 'correct') return;
      if (prev === 'present' && next === 'absent') return;
      keyStates[char] = next;
    });
  });

  const handleKey = useCallback(
    (e: { key: string }) => {
      if (gameOver) return;
      const key = e.key;
      console.log(key);
      setLastKeyPressed(key);

      if (key === 'Enter' && current.length === 5) {
        if (!wordsModule || !isValidWord(current, wordsModule.VALID_WORDS)) {
          setShake(true);
          setTimeout(() => setShake(false), 400);
          return;
        }

        const result = validateGuess(current, solution);
        const newGuesses = [...guesses, { word: current, result }];
        setGuesses(newGuesses);
        setCurrent('');
        if (current === solution || newGuesses.length >= 6) {
          setGameOver(true);
        }
      } else if (key === 'Backspace') {
        setCurrent((prev) => prev.slice(0, -1));
      } else if (current.length < 5) {
        const isValidLetter =
          locale === 'es' ? /^[a-zA-ZñÑ]$/.test(key) : /^[a-zA-Z]$/.test(key);

        if (isValidLetter) {
          setCurrent((prev) => prev + key.toLowerCase());
        }
      }
    },
    [current, guesses, solution, gameOver, wordsModule]
  );

  const handleVirtualKey = (key: string) => {
    handleKey({ key });
  };

  const handleRestart = () => {
    if (wordsModule) {
      setSolution(getRandomWord(wordsModule.WORDS));
    }
    setCurrent('');
    setGuesses([]);
    setGameOver(false);
  };

  useEffect(() => {
    setIsLoading(true);
    getWordModule(locale).then((words) => {
      setWordsModule(words);
      setIsLoading(false);
    });
  }, [locale, setIsLoading]);

  useEffect(() => {
    if (wordsModule) {
      setSolution(getRandomWord(wordsModule.WORDS));
    }
  }, [wordsModule]);

  useEffect(() => {
    if (!lastKeyPressed) return;
    const timeout = setTimeout(() => setLastKeyPressed(null), 500);
    return () => clearTimeout(timeout);
  }, [lastKeyPressed]);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => handleKey(e as KeyboardEvent);
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, [handleKey]);

  return {
    solution,
    current,
    guesses,
    gameOver,
    shake,
    lastKeyPressed,
    keyStates,
    locale,
    handleRestart,
    handleVirtualKey,
  };
}
