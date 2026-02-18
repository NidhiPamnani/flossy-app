import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

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

  const [trackedDays, setTrackedDays] = useState<Map<string, FlossStatus>>(new Map());

  // Load trackedDays from AsyncStorage on mount
  useEffect(() => {
    const loadTrackedDays = async () => {
      try {
        const data = await AsyncStorage.getItem('flossy_trackedDays');
        if (data) {
          const obj = JSON.parse(data);
          const today = new Date();
          const cleanedEntries = Object.entries(obj).filter(([date]) => {
            const d = new Date(date);
            // Only keep dates up to today
            return d <= today;
          });
          const cleanedMap = new Map<string, FlossStatus>(cleanedEntries as [string, FlossStatus][]);
          setTrackedDays(cleanedMap);
          // Persist cleaned map if any entries were removed
          if (cleanedEntries.length !== Object.entries(obj).length) {
            await AsyncStorage.setItem('flossy_trackedDays', JSON.stringify(Object.fromEntries(cleanedMap)));
          }
        }
      } catch (e) {
        console.log('Failed to load floss data', e);
      }
    };
    loadTrackedDays();
  }, []);

  // Save trackedDays to AsyncStorage whenever it changes
  useEffect(() => {
    const saveTrackedDays = async () => {
      try {
        // Convert Map to object for JSON
        const obj = Object.fromEntries(trackedDays.entries());
        await AsyncStorage.setItem('flossy_trackedDays', JSON.stringify(obj));
      } catch (e) {
        console.log('Failed to save floss data', e);
      }
    };
    saveTrackedDays();
  }, [trackedDays]);

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
