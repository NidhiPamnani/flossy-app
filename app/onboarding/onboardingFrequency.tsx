import { useRouter } from 'expo-router';
import { useState } from "react";

export default function OnboardingFrequency({ onContinue }: { onContinue?: (frequency: string) => void }) {
  const router = useRouter();
  const [frequency, setFrequency] = useState("");
  
  const handleContinue = () => {
    if (frequency.trim()) {
      if (onContinue) {
        onContinue(frequency.trim());
      } else {
        router.push('/(tabs)/home');
      }
    }
  };
}