import { formatDateKey } from '@/lib/date';
import { Flame, UserPlus } from 'lucide-react-native';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useFloss } from '../context/FlossContext';

export function AccountabilityPartner() {
  const [hasPartner, setHasPartner] = useState(true);
  const partner = {
    name: 'Emma Rodriguez',
    avatar: '👩🏽',
    streak: 15,
    flossedToday: true,
  };

  // User floss status for today
  const { trackedDays } = useFloss();
  const todayKey = formatDateKey(new Date());
  const userTodayStatus = trackedDays.get(todayKey) ?? null;

  return (
    <View style={styles.section}>
      <View style={{ marginBottom: 16 }}>
        <Text style={styles.sectionTitle}>Accountability Buddy</Text>
        <Text style={styles.sectionSubtitle}>Stay motivated together</Text>
      </View>
      {hasPartner ? (
        <View style={styles.partnerCard}>
          <View style={styles.partnerRow}>
            <Text style={styles.partnerAvatar}>{partner.avatar}</Text>
            <View style={{ flex: 1 }}>
              <Text style={styles.partnerName}>{partner.name}</Text>
              <View style={styles.partnerStreakRow}>
                <Flame size={16} color="#00D9E1" />
                <Text style={styles.partnerStreakText}>{partner.streak} day streak</Text>
              </View>
            </View>
            {partner.flossedToday && <Text style={styles.partnerFlossedToday}>✨</Text>}
          </View>
          <View style={styles.partnerStatusRow}>
            <View style={styles.partnerStatusBox}>
              <Text style={styles.partnerStatusLabel}>Their Status</Text>
              <Text style={styles.partnerStatusValue}>Flossed today!</Text>
            </View>
            <View style={[styles.partnerStatusBox, styles.partnerStatusBoxActive]}>
              <Text style={styles.partnerStatusLabel}>Your Status</Text>
              {userTodayStatus === 'yes' && (
                <Text style={styles.partnerStatusValueActive}>Flossed today!</Text>
              )}
              {userTodayStatus === 'skip' && (
                <Text style={styles.partnerStatusValueActive}>Skipped today</Text>
              )}
              {userTodayStatus !== 'yes' && userTodayStatus !== 'skip' && (
                <Text style={[styles.partnerStatusValue, { color: '#e11d48' }]}>Not flossed today 😔</Text>
              )}
            </View>
          </View>
        </View>
      ) : (
        <TouchableOpacity style={styles.findBuddyButton} onPress={() => setHasPartner(true)}>
          <UserPlus size={20} color="#3B5BC7" />
          <Text style={styles.findBuddyButtonText}>Find a Buddy</Text>
        </TouchableOpacity>
      )}
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
  sectionSubtitle: {
    color: 'rgba(255,255,255,0.60)',
    fontSize: 14,
  },
  partnerCard: {
    backgroundColor: 'rgba(255,255,255,0.10)',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.20)',
    marginBottom: 8,
  },
  partnerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 12,
  },
  partnerAvatar: {
    fontSize: 32,
    marginRight: 12,
  },
  partnerName: {
    color: 'white',
    fontWeight: '500',
    fontSize: 16,
  },
  partnerStreakRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  partnerStreakText: {
    color: '#00D9E1',
    fontSize: 13,
    marginLeft: 4,
  },
  partnerFlossedToday: {
    fontSize: 22,
    marginLeft: 8,
  },
  partnerStatusRow: {
    flexDirection: 'row',
    gap: 8,
  },
  partnerStatusBox: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.10)',
    borderRadius: 10,
    padding: 8,
    alignItems: 'center',
  },
  partnerStatusBoxActive: {
    backgroundColor: 'rgba(0,217,225,0.20)',
    borderWidth: 1,
    borderColor: 'rgba(0,217,225,0.30)',
  },
  partnerStatusLabel: {
    color: 'rgba(255,255,255,0.60)',
    fontSize: 12,
  },
  partnerStatusValue: {
    color: 'white',
    fontWeight: '500',
    marginTop: 2,
    fontSize: 13,
  },
  partnerStatusValueActive: {
    color: '#00D9E1',
    fontWeight: '500',
    marginTop: 2,
    fontSize: 13,
  },
  findBuddyButton: {
    backgroundColor: '#00D9E1',
    borderRadius: 16,
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  findBuddyButtonText: {
    color: '#3B5BC7',
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 8,
  },
});
