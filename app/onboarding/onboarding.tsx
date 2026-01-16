import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import onboardingStyles from './onboardingPage';

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={['#3D5FA8', '#2B4A9F', '#1E3A8A', '#1E3270']}
      locations={[0, 0.3, 0.7, 1]}
      style={onboardingStyles.container}
      >
      <View style={onboardingStyles.container}>
        <Text style={onboardingStyles.brand}>flossy</Text>

          <View style={onboardingStyles.artworkWrap}>
            <Image
              source={require('../../assets/images/ToothFairy.png')}
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
          <Text style={onboardingStyles.subtitle}>Small habits, healthier smiles.</Text>

          <TouchableOpacity
            style={onboardingStyles.cta}
            onPress={() => {
            router.push('/(tabs)/home');
          }}
            accessibilityRole="button"
            accessibilityLabel="Get Started"
          >
            <Text style={onboardingStyles.ctaText}>Get Started</Text>
          </TouchableOpacity>
        </View>
    </LinearGradient>
  );
}

