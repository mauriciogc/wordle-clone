// src/components/keyboard.tsx
'use client';
import { getClassForLetter } from '@/lib/words';

type KeyBoardProps = {
  onKeyPress: (key: string) => void;
  keyStates: Record<string, 'correct' | 'present' | 'absent' | undefined>;
  lastKey: string;
  hasEnie?: boolean;
};

const KEYS = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'ñ'],
  ['Enter', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Backspace'],
];

export default function Keyboard({
  onKeyPress,
  keyStates,
  lastKey,
  hasEnie = false,
}: KeyBoardProps) {
  return (
    <div className="space-y-2">
      {KEYS.map((row, rowIndex) => (
        <div key={rowIndex} className="flex justify-center gap-1">
          {row.map((key) => {
            const state = keyStates[key];
            const bg = getClassForLetter(state);
            const label = key === 'Backspace' ? '⌫' : key;

            if (!hasEnie && key.toLowerCase() === 'ñ') {
              return;
            }

            return (
              <button
                key={key}
                onClick={() => onKeyPress(key)}
                className={`rounded-md px-3 py-2 text-sm font-semibold state  ${
                  lastKey === key ? 'state state-keyPress' : bg
                }`}
              >
                {label.toUpperCase()}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}
