import { View, Text, StyleSheet } from 'react-native';
import { Gift, ChevronRight } from 'lucide-react-native';

interface Reward {
  id: number;
  brand: string;
  discount: string;
  description: string;
  currentProgress: number;
  targetProgress: number;
  logoUrl: string;
  unlocked: boolean;
}

export function RewardsProgress() {
  const rewards: Reward[] = [
    {
      id: 1,
      brand: 'Summer Fridays',
      discount: '15% off',
      description: 'Clean skincare',
      currentProgress: 13,
      targetProgress: 14,
      logoUrl: '', // Add image support if needed
      unlocked: false,
    },
    {
      id: 2,
      brand: 'Moon',
      discount: '20% off',
      description: 'Oral care',
      currentProgress: 13,
      targetProgress: 21,
      logoUrl: '',
      unlocked: false,
    },
    {
      id: 3,
      brand: 'Lumineux Whitening',
      discount: '10% off',
      description: 'Teeth whitening',
      currentProgress: 13,
      targetProgress: 30,
      logoUrl: '',
      unlocked: false,
    },
  ];

  const getProgressPercentage = (current: number, target: number) => {
    return Math.min((current / target) * 100, 100);
  };

  return (
    <View style={styles.section}>
      <View style={styles.rewardsHeader}>
        <Gift size={20} color="#00D9E1" />
        <Text style={styles.sectionTitle}>Rewards</Text>
      </View>
      {rewards.map((reward) => {
        const progressPercent = getProgressPercentage(reward.currentProgress, reward.targetProgress);
        const daysRemaining = reward.targetProgress - reward.currentProgress;
        return (
          <View key={reward.id} style={styles.rewardCard}>
            <View style={styles.rewardCardHeader}>
              <View style={styles.rewardLogoBox}>
                {/* Add image support if needed */}
                <Text style={{ fontSize: 18 }}>🎁</Text>
              </View>
              <View style={{ flex: 1, minWidth: 0 }}>
                <View style={styles.rewardBrandRow}>
                  <Text style={styles.rewardBrand}>{reward.brand}</Text>
                  <View style={styles.rewardDiscountRow}>
                    <Text style={styles.rewardDiscount}>{reward.discount}</Text>
                    <ChevronRight size={16} color="#00D9E1" />
                  </View>
                </View>
                <Text style={styles.rewardDescription}>{reward.description}</Text>
              </View>
            </View>
            <View style={styles.rewardProgressBarBg}>
              <View style={[styles.rewardProgressBar, { width: `${progressPercent}%` }]} />
            </View>
            <View style={styles.rewardProgressRow}>
              <Text style={styles.rewardProgressText}>{reward.currentProgress}/{reward.targetProgress} days</Text>
              {daysRemaining > 0 ? (
                <Text style={styles.rewardDaysRemaining}>{daysRemaining} to unlock</Text>
              ) : (
                <Text style={styles.rewardUnlocked}>Unlocked! 🎉</Text>
              )}
            </View>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  section: {
    backgroundColor: 'rgba(255,255,255,0.10)',
    borderRadius: 24,
    padding: 20,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.20)',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 2,
  },
  rewardsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  rewardCard: {
    backgroundColor: 'rgba(255,255,255,0.10)',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.20)',
    marginBottom: 12,
  },
  rewardCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 8,
  },
  rewardLogoBox: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  rewardBrandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
  },
  rewardBrand: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  rewardDiscountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  rewardDiscount: {
    color: '#00D9E1',
    fontWeight: '600',
    fontSize: 13,
    marginRight: 2,
  },
  rewardDescription: {
    color: 'rgba(255,255,255,0.50)',
    fontSize: 12,
    marginTop: 2,
  },
  rewardProgressBarBg: {
    width: '100%',
    height: 8,
    backgroundColor: 'rgba(255,255,255,0.10)',
    borderRadius: 4,
    overflow: 'hidden',
    marginTop: 8,
  },
  rewardProgressBar: {
    height: 8,
    backgroundColor: '#00D9E1',
    borderRadius: 4,
  },
  rewardProgressRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  rewardProgressText: {
    color: 'rgba(255,255,255,0.60)',
    fontSize: 12,
  },
  rewardDaysRemaining: {
    color: 'rgba(255,255,255,0.50)',
    fontSize: 12,
  },
  rewardUnlocked: {
    color: '#00D9E1',
    fontWeight: '500',
    fontSize: 12,
  },
});
