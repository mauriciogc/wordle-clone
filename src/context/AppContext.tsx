'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type AppContextType = {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const value: AppContextType = { isLoading, setIsLoading };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used inside <AppProvider>.');
  }
  return context;
}
