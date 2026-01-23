import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import styles from "./buttonStyles";
import onboardingStyles from "./onboardingPage";

type ReasonOption = 
  | "dentist"
  | "stress"
  | "healthier gums"
  | "health"
  | "put-together"
  | "appearance"
  | "unsure";

interface OnboardingGoalProps {
  userName: string;
  onContinue?: (reasons: ReasonOption[]) => void;
}

export default function OnboardingChronotype({ userName, onContinue }: OnboardingGoalProps) {
  const [selectedOptions, setSelectedOptions] = useState<ReasonOption[]>([]);
  const router = useRouter();

  const options: { id: ReasonOption; label: string }[] = [
    { id: "dentist", label: "Easier dentist visits" },
    { id: "stress", label: "Less stress (and cost!) at dentist visits" },
    { id: "healthier gums", label: "Healthier gums as I age" },
    { id: "health", label: "Long-term health benefits" },
    { id: "put-together", label: "Feeling more put-together in my routine" },
    { id: "appearance", label: "Appearance of my teeth" },
    { id: "unsure", label: "I'm not sure yet" },
  ];

  const handleContinue = () => {
    if (selectedOptions.length > 0) {
      if (onContinue) {
        onContinue(selectedOptions);
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
        <Text style={onboardingStyles.title}>Why does flossing matter to you?</Text>
        <Text style={styles.subtitle}>(select all that apply)</Text>
      </View>

      {/* Options */}
      <View style={styles.optionsWrap}>
        {options.map((option) => {
          const isSelected = selectedOptions.includes(option.id);
          return (
            <Pressable
              key={option.id}
              onPress={() => {
                if (isSelected) {
                  setSelectedOptions((prev) => prev.filter((p) => p !== option.id));
                } else {
                  setSelectedOptions((prev) => [...prev, option.id]);
                }
              }}
              style={({pressed,hovered}) => [
                styles.optionButton,
                isSelected && styles.optionButtonSelected,
                pressed && styles.optionPressed,
              ]}
            >
              <Text
                style={[
                  styles.optionText,
                  isSelected && styles.optionTextSelected,
                ]}
              >
                {option.label}
              </Text>
              {isSelected && <Icon name="check" size={20} color="#000" />}
            </Pressable>
          );
        })}
      </View>

      {/* Continue Button */}
      <Pressable
        onPress={() => selectedOptions.length > 0 && handleContinue()}
        style={[
          onboardingStyles.cta,
          selectedOptions.length === 0 && onboardingStyles.buttonDisabled,
        ]}
        disabled={selectedOptions.length === 0}
      >
        <Text style={onboardingStyles.ctaText}>Continue</Text>
      </Pressable>
    </View>
  </LinearGradient>
  );
}


