// src/components/modal.tsx
'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

type ModalProps = {
  children: React.ReactNode;
  isInterceptedRoute?: boolean;
  onClose?: () => void;
  clickToClose?: boolean;
};

export default function Modal({
  children,
  isInterceptedRoute = false,
  onClose,
  clickToClose = true,
}: ModalProps) {
  const router = useRouter();
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.classList.add('noscroll');
    return () => document.body.classList.remove('noscroll');
  }, []);

  const onDismiss = () => {
    if (isInterceptedRoute) {
      router.back();
      return;
    }
    if (onClose) onClose();
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (clickToClose && e.target === dialogRef.current) {
      onDismiss();
    }
  };

  return createPortal(
    <div
      ref={dialogRef}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 bg-(--color-overlay) flex items-center justify-center px-16 py-8 overflow-auto"
    >
      {clickToClose && (
        <button
          onClick={onDismiss}
          aria-label="Cerrar"
          className="fixed top-4 right-4 z-50 text-white/70 hover:text-white transition cursor-pointer text-2xl"
        >
          ✕
        </button>
      )}

      <div className="relative bg-(--color-background) text-(--color-foreground) min-w-sm max-h-full max-w-5xl h-auto rounded shadow-xl overflow-y-auto">
        <div className="p-6">{children}</div>
      </div>
    </div>,
    document.getElementById('modal-root')!
  );
}
