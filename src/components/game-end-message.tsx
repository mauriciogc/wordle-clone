// src/components/GameEndMessage.tsx
'use client';
import { useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Crown, Ghost, RefreshCcw } from 'lucide-react';
import Modal from './modal';

type GameEndMessageProps = {
  won: boolean;
  solution: string;
  onRestart: () => void;
};

export default function GameEndMessage({
  won,
  solution,
  onRestart,
}: GameEndMessageProps) {
  const t = useTranslations('GameEnd');
  const Icon = won ? Crown : Ghost;
  const iconClass = won ? 'text-yellow-600' : 'text-red-600';
  const title = won ? t('winTitle') : t('loseTitle');

  const message = useMemo(() => {
    const messages = won ? t.raw('winMessages') : t.raw('loseMessages');
    return messages[Math.floor(Math.random() * messages.length)];
  }, [won, t]);

  return (
    <Modal onClose={onRestart} clickToClose={false}>
      <div className="flex items-center gap-6 max-w-md">
        <div>
          <Icon size={64} strokeWidth={0.5} className={iconClass} />
        </div>

        <div className="flex flex-col items-start  justify-center w-full">
          <p className="font-semibold text-3xl text-(--color-foreground)">
            {title}
          </p>
          <p className="text-lg text-(--color-secondary)">
            {message}
            {!won && (
              <p className="text-xs">
                {t('wordWas', { word: solution.toUpperCase() })}
              </p>
            )}
          </p>
        </div>
        <button onClick={onRestart} className="btn-ico">
          <RefreshCcw size={18} />
        </button>
      </div>
    </Modal>
  );
}
