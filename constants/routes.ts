export const ROUTES = {
  ONBOARDING: {
    START: "/onboarding/onboarding",
    DETAILS: "/onboarding/onboardingDetails",
    FREQUENCY: "/onboarding/onboardingFrequency",
    GOALS: "/onboarding/onboardingGoals",
    CHRONOTYPE: "/onboarding/onboardingChronotype",
  },
  REMINDERS: {
    NOTIFICATIONS: "/reminders/notifications",
    BUY_FLOSS: "/reminders/buyFloss",
    SINK_PLACEMENT: "/reminders/sinkPlacement",
  },
  APP: {
    HOME: "/(tabs)/home",
  },
} as const;
