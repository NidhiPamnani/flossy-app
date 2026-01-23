import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from 'expo-router';
import { useState } from "react";
import { KeyboardAvoidingView, Platform, Pressable, Text, TextInput, View } from "react-native";
import onboardingStyles from "./onboardingPage";

export default function OnboardingDetails({ onContinue }: { onContinue?: (name: string) => void }) {
  const [name, setName] = useState("");
  const router = useRouter();
  
  const handleContinue = () => {
    if (name.trim()) {
      if (onContinue) {
        onContinue(name.trim());
      } else {
        router.push('/onboarding/onboardingFrequency');
      }
    }
  };


  return (
    <LinearGradient 
        colors={['#3D5FA8', '#2B4A9F', '#1E3A8A', '#1E3270']}
        locations={[0, 0.3, 0.7, 1]}
        style={onboardingStyles.container}
    >
        <View style={onboardingStyles.container} >
            <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            style={onboardingStyles.inner}
            >
            {/* Progress Dots */}
            <View style={onboardingStyles.dotsRow}>
                <View style={[onboardingStyles.dot, onboardingStyles.dotActive]} />
                <View style={[onboardingStyles.dot ]} />
                <View style={onboardingStyles.dot} />
            </View>

            {/* Content */}
            <View style={onboardingStyles.brand}>
                    <Text style={onboardingStyles.title}>What is your name?</Text>
                    <Text style={onboardingStyles.subtitle}>
                        Let's get to know you ✨
                    </Text>
            </View>

            {/* Input */}
            <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
                placeholderTextColor="rgba(255,255,255,0.5)"
                style={onboardingStyles.input}
                autoFocus
            />

            {/* CTA */}
            <Pressable
                onPress={handleContinue}
                disabled={!name.trim()}
                style={({ pressed }) => [
                    onboardingStyles.cta,
                    !name.trim() && onboardingStyles.buttonDisabled,
                    pressed && onboardingStyles.buttonPressed,
                ]}
            >
            <Text style={onboardingStyles.buttonText}>Continue</Text>
            </Pressable>
        </KeyboardAvoidingView>
      </View>
    </LinearGradient>
  )
}