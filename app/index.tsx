import AsyncStorage from '@react-native-async-storage/async-storage';
import { Redirect } from 'expo-router';
import { useEffect, useState } from 'react';
import { ROUTES } from '../constants/routes';

export default function Index() {
  const [loading, setLoading] = useState(true);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] = useState(false);
  const [hasCompletedReminders, setHasCompletedReminders] = useState(false);

  useEffect(() => {
    const checkStatus = async () => {
      const onboardingValue = await AsyncStorage.getItem('hasCompletedOnboarding');
      const remindersValue = await AsyncStorage.getItem('hasCompletedReminders');
      setHasCompletedOnboarding(onboardingValue === 'true');
      setHasCompletedReminders(remindersValue === 'true');
      setLoading(false);
    };
    checkStatus();
  }, []);

  if (loading) return null; // or a splash screen

  // If onboarding is not done, go to onboarding
  if (!hasCompletedOnboarding) {
    return <Redirect href={ROUTES.ONBOARDING.START} />;
  }

  // If onboarding just finished (this session), show reminders, then mark reminders as completed
  // If reminders are not done, show reminders
  if (!hasCompletedReminders) {
    return <Redirect href={ROUTES.REMINDERS.NOTIFICATIONS} />;
  }

  // If both onboarding and reminders are completed, always go to home
  return <Redirect href={ROUTES.APP.HOME} />;
}
