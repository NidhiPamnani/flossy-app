import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./buttonStyles";
import onboardingStyles from "./onboardingPage";

type GoalsOption = 
  | "0-1x"
  | "2-3x"
  | "4+"
  | "unsure";

interface OnboardingGoalProps {
  userName: string;
  onContinue: (chronotype: GoalsOption) => void;
}

export default function OnboardingChronotype({ userName, onContinue }: OnboardingGoalProps) {
  const [selectedOption, setSelectedOption] = useState<GoalsOption | null>(null);
  const router = useRouter();

  const options: { id: GoalsOption; label: string }[] = [
    { id: "0-1x", label: "0-1x per week" },
    { id: "2-3x", label: "2-3x per week" },
    { id: "4+", label: "4+ times a week" },
    { id: "unsure", label: "Not sure/I need guidance" },
  ];

  const handleContinue = () => {
    if (selectedOption) {
      if (onContinue) {
        onContinue(selectedOption);
      } else {
        router.push('/onboarding/onboardingChronotype');
      }
    }
  };

  return (
    <LinearGradient
      colors={['#3D5FA8', '#2B4A9F', '#1E3A8A', '#1E3270']}
      locations={[0, 0.3, 0.7, 1]}
      style={onboardingStyles.container}
    >
    <View style={onboardingStyles.container}>
      {/* Logo */}
      <View style={styles.artworkWrap}>
        <Image source={
          require('../../assets/images/ToothFairy.png')
        } style={styles.artwork} 
        resizeMode="contain"
        />
      </View>

      {/* Progress Dots */}
      <View style={onboardingStyles.dotsRow}>
        <View style={[onboardingStyles.dot, onboardingStyles.dotActive]} />
        <View style={[onboardingStyles.dot, onboardingStyles.dotActive]} />
        <View style={[onboardingStyles.dot, onboardingStyles.dotActive ]} />
        <View style={[onboardingStyles.dot ]} />
      </View>

      {/* Question */}
      <View style={onboardingStyles.brand}>
        <Text style={onboardingStyles.title}>When do you prefer to floss?</Text>
        <Text style={styles.subtitle}>(There's no wrong or right!)</Text>
      </View>

      {/* Options */}
      <View style={styles.optionsWrap}>
        {options.map((option) => (
          <Pressable
            key={option.id}
            onPress={() => setSelectedOption(option.id)}
            style={({pressed,hovered}) => [
              styles.optionButton,
              selectedOption === option.id && styles.optionButtonSelected,
              pressed && styles.optionPressed,
            ]}
          >
            <Text
              style={[
                styles.optionText,
                selectedOption === option.id && styles.optionTextSelected,
              ]}
            >
              {option.label}
            </Text>
            {selectedOption === option.id && <Icon name="check" size={20} color="#000" />}
          </Pressable>
        ))}
      </View>

      {/* Continue Button */}
      <Pressable
        onPress={() => selectedOption && handleContinue()}
        style={[
          onboardingStyles.cta,
          !selectedOption && onboardingStyles.buttonDisabled,
        ]}
        disabled={!selectedOption}
      >
        <Text style={onboardingStyles.ctaText}>Continue</Text>
      </Pressable>
    </View>
  </LinearGradient>
  );
}


