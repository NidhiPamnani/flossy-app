import { formatDateKey } from '@/lib/date';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { useFloss } from '../context/FlossContext';
import { useOnboarding } from '../context/OnboardingContext';
import { EditGoalsModal } from './EditGoalsModal';

export function ProfilePage() {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [educationalTipsEnabled, setEducationalTipsEnabled] = useState(true);
  const [showEditGoals, setShowEditGoals] = useState(false);
  const { onboardingData } = useOnboarding();
  const { trackedDays } = useFloss();

  // Calculate current streak (same as challenges/insights)
  let userStreak = 0;
  let date = new Date();
  while (true) {
    const key = formatDateKey(date);
    if (trackedDays.get(key) === 'yes') {
      userStreak++;
      date.setDate(date.getDate() - 1);
    } else {
      break;
    }
  }

  return (
    <LinearGradient
      colors={['#3D5FA8', '#2B4A9F', '#1E3A8A', '#1E3270']}
      locations={[0, 0.3, 0.7, 1]}
      style={{ flex: 1 }}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Profile</Text>
          {/* Profile Avatar */}
          <View style={styles.avatarWrap}>
            <LinearGradient
              colors={['#22d3ee', '#14b8a6']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.avatarBg}
            >
              {/* Simple SVG User Icon Replacement */}
              <Text style={styles.avatarIcon}>👤</Text>
            </LinearGradient>
          </View>
          {/* Name */}
          <Text style={styles.name}>{onboardingData?.name || 'Your Name'}</Text>
          {/* Streak Badge */}
          <View style={styles.streakBadge}>
            <Text style={styles.streakFlame}>🔥</Text>
            <Text style={styles.streakText}>{userStreak}-day streak</Text>
          </View>
        </View>

        {/* Your Goal Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Your Goal</Text>
          <View style={styles.goalRow}>
            <Text style={styles.goalLabel}>Weekly floss goal</Text>
            <Text style={styles.goalValue}>{onboardingData?.goal ? `${onboardingData.goal}× per week` : '2× per week'}</Text>
          </View>
          <View style={styles.goalRow}>
            <Text style={styles.goalLabel}>Skips allowed</Text>
            <Text style={styles.goalValue}>{onboardingData?.goal ? `${7 - Number(onboardingData.goal)} per week` : '1 per week'}</Text>
          </View>
          <View style={styles.goalRow}>
            <Text style={styles.goalLabel}>Reminder time</Text>
            <Text style={styles.goalValue}>{onboardingData?.reminderTime || '9:00 PM'}</Text>
          </View>
          <TouchableOpacity style={styles.editGoalsBtn} onPress={() => setShowEditGoals(true)}>
            <Text style={styles.editGoalsBtnText}>Edit Goals</Text>
          </TouchableOpacity>
        </View>

        {/* Preferences Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <View style={styles.prefRow}>
            <View style={styles.prefLabelRow}>
              <Text style={styles.prefIcon}>🔔</Text>
              <Text style={styles.prefLabel}>Notifications</Text>
            </View>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: 'rgba(255,255,255,0.2)', true: '#22d3ee' }}
              thumbColor={notificationsEnabled ? '#fff' : '#eee'}
            />
          </View>
          <View style={styles.prefRow}>
            <View style={styles.prefLabelRow}>
              <Text style={styles.prefIcon}>💡</Text>
              <Text style={styles.prefLabel}>Educational tips</Text>
            </View>
            <Switch
              value={educationalTipsEnabled}
              onValueChange={setEducationalTipsEnabled}
              trackColor={{ false: 'rgba(255,255,255,0.2)', true: '#22d3ee' }}
              thumbColor={educationalTipsEnabled ? '#fff' : '#eee'}
            />
          </View>
        </View>

        {/* Account Section */}
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.accountRow}>
            <Text style={styles.accountLabel}>Privacy</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountRow}>
            <Text style={styles.accountLabel}>Help & Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.accountRow}>
            <Text style={[styles.accountLabel, { color: '#f87171' }]}>Log out</Text>
          </TouchableOpacity>
        </View>

        {/* Edit Goals Modal */}
        {showEditGoals && <EditGoalsModal visible={showEditGoals} onClose={() => setShowEditGoals(false)} />}
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 40,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 24,
  },
  avatarWrap: {
    marginBottom: 16,
  },
  avatarBg: {
    width: 112,
    height: 112,
    borderRadius: 56,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#22d3ee',
    shadowOffset: { width: 0, height: 25 },
    shadowOpacity: 0.3,
    shadowRadius: 50,
  },
  avatarIcon: {
    fontSize: 56,
    color: 'white',
  },
  name: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
    marginBottom: 12,
  },
  streakBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 999,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    paddingHorizontal: 20,
    paddingVertical: 10,
    gap: 8,
  },
  streakFlame: {
    fontSize: 24,
  },
  streakText: {
    color: 'white',
    fontSize: 18,
    letterSpacing: -0.44,
  },
  sectionCard: {
    backgroundColor: 'rgba(66,84,153,0.5)',
    borderRadius: 24,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    padding: 29,
    marginBottom: 20,
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: '400',
    letterSpacing: -0.45,
    marginBottom: 20,
  },
  goalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 16,
    letterSpacing: -0.31,
  },
  goalValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
    letterSpacing: -0.31,
  },
  editGoalsBtn: {
    marginTop: 16,
    height: 48,
    borderRadius: 999,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#22d3ee',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.4,
    shadowRadius: 25,
    elevation: 4,
  },
  editGoalsBtnText: {
    color: '#2563eb', // blueish text
    fontSize: 18,
    letterSpacing: -0.44,
    fontWeight: '500',
  },
  prefRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  prefLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  prefIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  prefLabel: {
    color: 'white',
    fontSize: 16,
    letterSpacing: -0.31,
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 4,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  accountLabel: {
    color: 'white',
    fontSize: 16,
    letterSpacing: -0.31,
    flex: 1,
  },
});
