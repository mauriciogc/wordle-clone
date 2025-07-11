// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale } from 'next-intl/server';
import { AppProvider } from '@/context/AppContext';

const dmSans = DM_Sans({
  weight: '300',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Wordle Clone',
  description: 'A modern Wordle clone built with Next.js 15',
};

export default async function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
      <body
        className={`antialiased min-h-screen flex items-center justify-center ${dmSans.className}`}
      >
        <AppProvider>
          <NextIntlClientProvider>
            {children}
            {modal}
            <div id="modal-root" />
          </NextIntlClientProvider>
        </AppProvider>
      </body>
    </html>
  );
}
