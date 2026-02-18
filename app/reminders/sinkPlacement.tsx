
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Sparkles } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import onboardingStyles from "../onboarding/onboardingPage";
import styles from "./sinkStyles";

interface SinkPlacementPageProps {
  onContinue?: () => void;
}

export default function SinkPlacementPage({ onContinue }: SinkPlacementPageProps) {
  const router = useRouter();

  const handleContinue = async () => {
    // Mark reminders as completed
    await AsyncStorage.setItem('hasCompletedReminders', 'true');
    if (onContinue) {
      onContinue();
    } else {
      router.push("/(tabs)/home");
    }
  };

  return (
     <LinearGradient
      colors={['#3D5FA8', '#2B4A9F', '#1E3A8A', '#1E3270']}
      locations={[0, 0.3, 0.7, 1]}
      style={onboardingStyles.container}
    >
    <View style={styles.container}>
      {/* Progress dots */}
      <View style={styles.progress}>
        <View style={styles.dotInactive} />
        <View style={styles.dotInactive} />
        <View style={styles.dotActive} />
      </View>

      {/* Text content */}
      <View style={styles.textContainer}>
        <Text style={styles.title}>One last thing! ✨</Text>
        <Text style={styles.subtitle}>
          Put your floss on the sink where you can see it
        </Text>
        <Text style={styles.description}>
          Out of sight, out of mind. Make it visible!
        </Text>
      </View>

      {/* Sink Scene */}
      <View style={styles.sinkScene}>
        <View style={styles.sinkCounter}>
          <View style={styles.sinkBowl}>
            <View style={styles.drain} />
          </View>

          <View style={styles.faucet}>
            <View style={styles.faucetNeck} />
            <View style={styles.faucetSpoutCurve} />
            <View style={styles.faucetSpoutDown} />
            <View style={styles.faucetHandleLeft} />
            <View style={styles.faucetHandleRight} />
          </View>

          <View style={styles.mirror}>
            <View style={styles.mirrorReflection} />
          </View>
        </View>

        {/* Floss Box */}
        <View style={styles.flossBoxContainer}>
          <View style={styles.flossBox}>
            <View style={styles.boxLabelTop} />
            <View style={styles.boxLabelMiddle} />
            <Text style={styles.toothIcon}>🦷</Text>
            <View style={styles.boxLabelBottom} />
            <Sparkles width={24} height={24} color="#FFD700" style={styles.sparkle1} />
            <Sparkles width={20} height={20} color="#FFD700" style={styles.sparkle2} />
            <Sparkles width={16} height={16} color="#FFD700" style={styles.sparkle3} />
            <Sparkles width={20} height={20} color="#FFD700" style={styles.sparkle4} />
          </View>
        </View>

        {/* Decorative items */}
        <View style={styles.decorativeLeft}>
          <Text style={styles.decorativeEmoji}>🧴</Text>
        </View>
        <View style={styles.decorativeRight}>
          <Text style={styles.decorativeEmoji}>🪥</Text>
        </View>

        {/* Arrow pointing */}
        <View style={styles.arrow}>
          <Text style={styles.arrowEmoji}>👈</Text>
        </View>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.button} onPress={handleContinue}>
        <Text style={styles.buttonText}>Got it! Let's go! 🎉</Text>
      </TouchableOpacity>
    </View>
    </LinearGradient>
  );
}
