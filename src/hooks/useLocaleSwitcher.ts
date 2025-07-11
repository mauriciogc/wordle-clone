'use client';

import { useEffect, useRef, useState, useTransition } from 'react';
import { useAppContext } from '@/context/AppContext';
import { useLocale } from 'next-intl';
import { useTranslations } from 'next-intl';

import { setUserLocale } from '@/services/locale';
import { Locale, locales } from '@/i18n/config';

export function useLocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const locale = useLocale();

  const [isPending, startTransition] = useTransition();
  const { setIsLoading } = useAppContext();

  // Actualiza render de react y setea propiedad
  const handleSelect = (item: Locale) => {
    setOpen(false);
    startTransition(() => setUserLocale(item));
  };

  // Cerrar al hacer click fuera del dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Actualizar estado global de loading
  useEffect(() => {
    setIsLoading(isPending);
  }, [isPending, setIsLoading]);

  return {
    ref: dropdownRef,
    open,
    setOpen,
    isPending,
    locale,
    locales,
    handleSelect,
    t,
  };
}
