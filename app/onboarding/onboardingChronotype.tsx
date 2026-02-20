import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useOnboarding } from "../../components/context/OnboardingContext";
import styles from "./buttonStyles";
import onboardingStyles from "./onboardingPage";



type ChronotypeOption = 
  | "night"
  | "morning"
  | "after-meals"
  | "flexible";

interface OnboardingChronotypeProps {
  userName: string;
}

export default function OnboardingChronotype({ userName }: OnboardingChronotypeProps) {
  const [selectedOption, setSelectedOption] = useState<ChronotypeOption | null>(null);
  const router = useRouter();
  const { setCompleted } = useOnboarding();

  const options: { id: ChronotypeOption; label: string, subtitle: string }[] = [
    { id: "night", label: "Night Flosser", subtitle: "Ideal if you floss before bed" },
    { id: "morning", label: "Morning Flosser", subtitle: "Great if you like starting clean" },
    { id: "after-meals", label: "After Meals", subtitle: "Works for people who floss reactively" },
    { id: "flexible", label: "Flexible" , subtitle: "I don't have a consistent rhythm yet"},
  ];

  const iconMap: Record<ChronotypeOption, string> = {
    night: 'bedtime',
    morning: 'brightness_5',
    'after-meals': 'restaurant',
    flexible: 'sync',
  };

  const handleContinue = async () => {
  if (!selectedOption) return;

  // mark onboarding complete
  await setCompleted();

  // replace so user can't go back to onboarding
  router.replace('/reminders/notifications');
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
        <View style={[onboardingStyles.dot, onboardingStyles.dotActive ]} />
      </View>

      {/* Question */}
      <View style={onboardingStyles.brand}>
        <Text style={onboardingStyles.title}>When do you prefer to floss?</Text>
        <Text style={styles.subtitle}>(There's no wrong or right!)</Text>
      </View>

      {/* Options */}
      <View style={styles.optionsWrap}>
        {options.map((option) => {
          const isSelected = selectedOption === option.id;
          return (
            <Pressable
              key={option.id}
              onPress={() => setSelectedOption(option.id)}
              style={({pressed,hovered}) => [
                styles.optionButton,
                isSelected && styles.optionButtonSelected,
                pressed && styles.optionPressed,
              ]}
            >
              <View style={{flex:1, flexDirection:'row', alignItems:'center'}}>
                {option.id === 'morning' ? (
                  <Text style={{ fontSize: 21, marginRight: 12, color:"white" }}>{'☼'}</Text>
                ) : (
                  <Icon
                    name={iconMap[option.id]}
                    size={22}
                    color={isSelected ? '#000' : '#fff'}
                    style={{ marginRight: 12 }}
                  />
                )}
                <View style={{flex:1}}>
                  <Text
                    style={[
                      styles.optionText,
                      isSelected && styles.optionTextSelected,
                    ]}
                  >
                    {option.label}
                  </Text>
                  <Text
                    style={[
                      styles.subLabel,
                      isSelected && styles.optionTextSelected,
                    ]}
                  >
                    {option.subtitle}
                  </Text>
                </View>
              </View>
              {isSelected && <Icon name="check" size={20} color="#000" />}
            </Pressable>
          );
        })}
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


