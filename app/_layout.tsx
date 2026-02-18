import { Stack } from 'expo-router';
import { OnboardingProvider } from '../components/context/OnboardingContext';

export default function RootLayout() {
  return (
    <OnboardingProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </OnboardingProvider>
  );
}
