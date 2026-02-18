import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';

type OnboardingData = {
  name: string;
  goal: string;
  frequency: string;
  chronotype: string;
  reminderTime?: string;
};

type OnboardingContextType = {
  hasCompletedOnboarding: boolean;
  setCompleted: () => Promise<void>;
  loading: boolean;
  onboardingData: OnboardingData | null;
  setOnboardingData: (data: Partial<OnboardingData>) => Promise<void>;
};

const OnboardingContext = createContext<OnboardingContextType | undefined>(
  undefined
);

const STORAGE_KEY = 'hasCompletedOnboarding';
const DATA_KEY = 'onboardingData';

export const OnboardingProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {

  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [loading, setLoading] = useState(true);
  const [onboardingData, setOnboardingDataState] = useState<OnboardingData | null>(null);


  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const value = await AsyncStorage.getItem(STORAGE_KEY);
        if (value === 'true') {
          setHasCompletedOnboarding(true);
        }
        const data = await AsyncStorage.getItem(DATA_KEY);
        if (data) {
          setOnboardingDataState(JSON.parse(data));
        }
      } catch (error) {
        console.log('Error reading onboarding status', error);
      } finally {
        setLoading(false);
      }
    };
    checkOnboarding();
  }, []);


  const setCompleted = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, 'true');
      setHasCompletedOnboarding(true);
    } catch (error) {
      console.log('Error saving onboarding status', error);
    }
  };

  const setOnboardingData = async (data: Partial<OnboardingData>) => {
    try {
      const prev = onboardingData || { name: '', goal: '2', frequency: '', chronotype: '' };
      const updated: OnboardingData = {
        ...prev,
        ...data,
      };
      setOnboardingDataState(updated);
      await AsyncStorage.setItem(DATA_KEY, JSON.stringify(updated));
    } catch (error) {
      console.log('Error saving onboarding data', error);
    }
  };

  return (
    <OnboardingContext.Provider
      value={{
        hasCompletedOnboarding,
        setCompleted,
        loading,
        onboardingData,
        setOnboardingData,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () => {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used inside OnboardingProvider');
  }
  return context;
};
