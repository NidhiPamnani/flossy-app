import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Colors } from '../constants/theme';

const theme = {
  colors: {
    background: '#0f1724',
    primary: '#35d0ff',
    dotActive: '#35d0ff',
    dotInactive: '#8fb8c6',
    text: '#ffffff',
    textDim: '#cfeaf6',
    cta: '#12d7f1',
  },
};

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>flossy</Text>

      <View style={styles.artworkWrap}>
        <Image
          source={require('../assets/images/splash-icon.png')}
          style={styles.artwork}
          resizeMode="contain"
        />
      </View>

      <View style={styles.dotsRow}>
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <Text style={styles.title}>Welcome to Flossy 👋</Text>
      <Text style={styles.subtitle}>Let's make flossing simple, consistent, and fun.</Text>

      <TouchableOpacity
        style={styles.cta}
        onPress={() => {
          router.push('/(tabs)');
        }}
        accessibilityRole="button"
        accessibilityLabel="Get Started"
      >
        <Text style={styles.ctaText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  brand: {
    color: theme.colors.primary,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 18,
  },
  artworkWrap: {
    width: 180,
    height: 180,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0ea5e9',
    marginBottom: 18,
  },
  artwork: {
    width: 140,
    height: 140,
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.dotInactive,
    marginHorizontal: 6,
  },
  dotActive: {
    backgroundColor: theme.colors.dotActive,
  },
  title: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 6,
  },
  subtitle: {
    color: theme.colors.textDim,
    textAlign: 'center',
    marginBottom: 24,
  },
  cta: {
    backgroundColor: theme.colors.cta,
    paddingVertical: 12,
    paddingHorizontal: 34,
    borderRadius: 8,
    width: '70%',
    alignItems: 'center',
  },
  ctaText: {
    color: '#00303f',
    fontWeight: '700',
  },
});
