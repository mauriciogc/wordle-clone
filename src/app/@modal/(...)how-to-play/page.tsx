// src/app/@modal/(...)how-to-play/page.tsx

import { Metadata } from 'next';
import Modal from '@/components/modal';
import HowToPlay from '@/components/how-to-play';

export const metadata: Metadata = {
  title: 'How to Play',
  description: 'Learn how to play the Wordle clone built with Next.js',
};

export default function HowToPlayPage() {
  return (
    <Modal isInterceptedRoute={true}>
      <HowToPlay backGame={false} />
    </Modal>
  );
}
