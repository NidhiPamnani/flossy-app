import React, { createContext, useContext, useState } from 'react';

export type FlossStatus = 'yes' | 'no' | 'skip';

type FlossContextType = {
  trackedDays: Map<string, FlossStatus>;
  setStatusForDate: (
    date: string,
    status: FlossStatus | null
  ) => void;

  skipsLeft: number;
  maxSkips: number;
};

const MAX_SKIPS = 5;

const FlossContext = createContext<FlossContextType | null>(null);

export function FlossProvider({ children }: { children: React.ReactNode }) {
  const [trackedDays, setTrackedDays] = useState<
    Map<string, FlossStatus>
  >(new Map());

  const [skipsLeft, setSkipsLeft] = useState(MAX_SKIPS);

  const setStatusForDate = (
    date: string,
    status: FlossStatus | null
  ) => {
    setTrackedDays(prev => {
      const next = new Map(prev);
      const prevStatus = prev.get(date);

      // Remove status
      if (status === null) {
        next.delete(date);

        // Restore skip if undoing a skip
        if (prevStatus === 'skip') {
          setSkipsLeft(s => Math.min(s + 1, MAX_SKIPS));
        }
      } else {
        next.set(date, status);

        // Consume skip
        if (status === 'skip' && prevStatus !== 'skip') {
          setSkipsLeft(s => Math.max(s - 1, 0));
        }
      }

      return next;
    });
  };

  return (
    <FlossContext.Provider
      value={{
        trackedDays,
        setStatusForDate,
        skipsLeft,
        maxSkips: MAX_SKIPS,
      }}
    >
      {children}
    </FlossContext.Provider>
  );
}

export function useFloss() {
  const ctx = useContext(FlossContext);
  if (!ctx) throw new Error('useFloss must be used inside FlossProvider');
  return ctx;
}
