import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import onboardingStyles from '../styles/onboardingPage';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <View style={onboardingStyles.container}>
      <Text style={onboardingStyles.brand}>flossy</Text>

      <View style={onboardingStyles.artworkWrap}>
        <Image
          source={require('../assets/images/splash-icon.png')}
          style={onboardingStyles.artwork}
          resizeMode="contain"
        />
      </View>

      <View style={onboardingStyles.dotsRow}>
        <View style={[onboardingStyles.dot, onboardingStyles.dotActive]} />
        <View style={onboardingStyles.dot} />
        <View style={onboardingStyles.dot} />
      </View>

      <Text style={onboardingStyles.title}>Welcome to Flossy 👋</Text>
      <Text style={onboardingStyles.subtitle}>Let's make flossing simple, consistent, and fun.</Text>

      <TouchableOpacity
        style={onboardingStyles.cta}
        onPress={() => {
          router.push('/(tabs)');
        }}
        accessibilityRole="button"
        accessibilityLabel="Get Started"
      >
        <Text style={onboardingStyles.ctaText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

