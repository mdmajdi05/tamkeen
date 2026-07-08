'use client';

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import localData from '@/data/content.json';
import type { SiteData } from '@/lib/types';

interface DataContextValue {
  data: SiteData;
  isLoading: boolean;
  isApiMode: boolean;
}

const DataContext = createContext<DataContextValue>({
  data: localData as SiteData,
  isLoading: false,
  isApiMode: false,
});

export function DataProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<SiteData>(localData as SiteData);
  const [isLoading, setIsLoading] = useState(false);
  const [isApiMode, setIsApiMode] = useState(false);

  useEffect(() => {
    const runtimeUrl = window.__RUNTIME_CONFIG__?.API_URL?.trim();
    const envUrl = process.env.NEXT_PUBLIC_API_URL?.trim();
    const apiUrl = runtimeUrl || envUrl || 'https://tamkeen-es.com';
    if (!apiUrl) return;

    setIsLoading(true);
    setIsApiMode(true);
    fetch(`${apiUrl}/api/all`)
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<SiteData>;
      })
      .then((freshData) => setData(freshData))
      .catch(() => setIsApiMode(false))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ data, isLoading, isApiMode }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext(): DataContextValue {
  return useContext(DataContext);
}
