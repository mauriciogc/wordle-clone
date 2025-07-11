// components/Game.tsx
'use client';
import { useTranslations } from 'next-intl';

import { useAppContext } from '@/context/AppContext';
import { useGame } from '@/hooks/useGame';
import GameEndMessage from '@/components/game-end-message';
import Keyboard from '@/components/keyboard';
import ToolBar from '@/components/tool-bar';
import LoadingRoot from '@/app/loading';
import Board from '@/components/board';

export default function Game() {
  const t = useTranslations();
  const { isLoading } = useAppContext();

  const {
    solution,
    current,
    guesses,
    gameOver,
    shake,
    keyStates,
    lastKeyPressed,
    locale,
    handleRestart,
    handleVirtualKey,
  } = useGame();

  return (
    <>
      <ToolBar hasGuesses={Boolean(guesses.length)} onRestart={handleRestart} />
      <h1 className="text-4xl sm:text-5xl lg:text-6xl  font-bold">
        {t('AppPage.title')}
        <span className="text-sm pl-2 align-super text-(--color-secondary)">
          {t('AppPage.language')}
        </span>
      </h1>
      {gameOver && (
        <GameEndMessage
          won={guesses.some((g) => g.word === solution)}
          solution={solution}
          onRestart={handleRestart}
        />
      )}
      <Board
        guesses={guesses}
        current={current}
        gameOver={gameOver}
        shake={shake}
      />
      <Keyboard
        onKeyPress={handleVirtualKey}
        keyStates={keyStates}
        lastKey={lastKeyPressed ?? ''}
        hasEnie={locale === 'es'}
      />
      {isLoading && <LoadingRoot />}
    </>
  );
}
