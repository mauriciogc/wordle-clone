// src/components/board.tsx
import { Guess } from '@/lib/types';
import { getClassForLetter } from '@/lib/words';

type BoardProps = {
  current: string;
  gameOver: boolean;
  guesses: Guess[];
  shake: boolean;
};

export default function Board({
  current,
  gameOver,
  guesses,
  shake,
}: BoardProps) {
  return (
    <div className="grid grid-rows-6 gap-2">
      {[...Array(6)].map((_, rowIndex) => {
        const guess = guesses[rowIndex];
        const isCurrent = rowIndex === guesses.length && !gameOver;

        return (
          <div
            key={rowIndex}
            className={`grid grid-cols-5 gap-2 ${
              isCurrent && shake ? 'animate-shake' : ''
            }`}
          >
            {[...Array(5)].map((_, colIndex) => {
              const char = isCurrent
                ? current[colIndex]
                : guess?.word[colIndex];
              const cellType = getClassForLetter(
                guess?.result[colIndex],
                isCurrent && colIndex === current.length
              );

              return (
                <div key={colIndex} className={`cell state ${cellType}`}>
                  {char?.toUpperCase() || ''}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
