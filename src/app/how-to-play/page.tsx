// src/app/how-to-play/page.tsx

import { Metadata } from 'next';
import HowToPlay from '@/components/how-to-play';

export const metadata: Metadata = {
  title: 'How to Play',
  description: 'Learn how to play the Wordle clone built with Next.js',
};

export default function HowToPlayPage() {
  return <HowToPlay />;
}
