// src/components/locale-switcher-select.tsx
'use client';
import { Languages, Check } from 'lucide-react';
import { useLocaleSwitcher } from '@/hooks/useLocaleSwitcher';

export default function LocaleSwitcherSelect() {
  const { t, ref, open, setOpen, locale, locales, handleSelect } =
    useLocaleSwitcher();

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((prev) => !prev)} className="btn-ico">
        <Languages />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-36 bg-(--background) rounded-md border border-gray-200 dark:border-neutral-800 z-50">
          {locales.map((item) => (
            <button
              key={item}
              onClick={() => handleSelect(item)}
              className="w-full flex items-center gap-2 px-3 py-2 text-sm justify-start hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer"
            >
              {locale === item ? (
                <Check className="w-4 h-4 text-pink-600" />
              ) : (
                <span className="mr-4" />
              )}
              {t(item)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
