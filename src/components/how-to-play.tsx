// src/components/how-to-play.tsx
import Link from 'next/link';
import { useTranslations } from 'next-intl';

type howToPlayProps = {
  backGame?: boolean;
};

export default function HowToPlay({ backGame = true }: howToPlayProps) {
  const t = useTranslations('HowToPlay');

  return (
    <section className="max-w-2xl mx-auto px-4 py-12 text-(--color-foreground)">
      <h1 className="text-3xl font-bold mb-6">{t('title')}</h1>
      <p className="mb-4">
        {t.rich('description', {
          strong: (chunks) => <strong className="font-bold">{chunks}</strong>,
        })}
      </p>
      <ul className="space-y-3 list-disc list-inside mb-8">
        <li>
          {t.rich(`correct`, {
            strong: (chunks) => (
              <strong className={`text-(--color-correct) font-bold`}>
                {chunks}
              </strong>
            ),
          })}
        </li>
        <li>
          {t.rich(`present`, {
            strong: (chunks) => (
              <strong className={`text-(--color-present) font-bold`}>
                {chunks}
              </strong>
            ),
          })}
        </li>
        <li>
          {t.rich(`absent`, {
            strong: (chunks) => (
              <strong className={`text-(--color-absent) font-bold`}>
                {chunks}
              </strong>
            ),
          })}
        </li>
      </ul>
      <p className="mb-4">
        {t.rich('useKeyboard', {
          kbd: (chunks) => <kbd>{chunks}</kbd>,
        })}
      </p>
      <p className="mb-4">{t('invalidWord')}</p>
      {backGame && (
        <Link
          href="/"
          className="flex items-center justify-center gap-2 text-sm text-white bg-(--color-button) hover:bg-(--color-button)/70  px-3 py-3 rounded-md  cursor-pointer transition-all duration-200"
        >
          {t('backGame')}
        </Link>
      )}
    </section>
  );
}
