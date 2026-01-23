import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./buttonStyles";
import onboardingStyles from "./onboardingPage";

type ChronotypeOption = 
  | "night"
  | "morning"
  | "after-meals"
  | "flexible";

interface OnboardingChronotypeProps {
  userName: string;
  onContinue: (chronotype: ChronotypeOption) => void;
}

export default function OnboardingChronotype({ userName, onContinue }: OnboardingChronotypeProps) {
  const [selectedOption, setSelectedOption] = useState<ChronotypeOption | null>(null);
  const router = useRouter();

  const options: { id: ChronotypeOption; label: string }[] = [
    { id: "night", label: "Night Flosser" },
    { id: "morning", label: "Morning Flosser" },
    { id: "after-meals", label: "After Meals" },
    { id: "flexible", label: "Flexible" },
  ];

  const handleContinue = () => {
    if (selectedOption) {
      if (onContinue) {
        onContinue(selectedOption);
      } else {
        router.push('/(tabs)/home');
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


