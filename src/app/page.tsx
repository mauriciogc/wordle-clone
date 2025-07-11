// src/app/page.tsx
import { Metadata } from 'next';
import Game from '@/components/game';

export const metadata: Metadata = {
  title: 'Wordle Clone',
  description: 'A modern Wordle clone built with Next.js 15',
};

export default function Home() {
  return (
    <main className="max-w-2xl flex w-full min-h-screen flex-col items-center justify-center p-4 gap-6 text-gray-800  dark:text-white">
      <Game />
    </main>
  );
}
