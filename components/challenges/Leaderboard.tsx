import { Flame, Trophy } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

interface LeaderboardEntry {
  rank?: number;
  name: string;
  avatar: string;
  streak: number;
  flossesThisWeek: number;
  isCurrentUser: boolean;
}

import { formatDateKey } from '@/lib/date';
import { useFloss } from '../context/FlossContext';

export function Leaderboard() {
  // Get user's streak from floss context
  const { trackedDays } = useFloss ? useFloss() : { trackedDays: new Map() };
  // Calculate current streak using formatDateKey for consistency
  let userStreak = 0;
  let date = new Date();
  // Removed todayStatus logic (moved to AccountabilityPartner)
  while (true) {
    const key = formatDateKey(date);
    if (trackedDays.get(key) === 'yes') {
      userStreak++;
      date.setDate(date.getDate() - 1);
    } else {
      break;
    }
  }

  // Example leaderboard data (other users)
  const others: LeaderboardEntry[] = [
    { name: 'Emma Rodriguez', avatar: '👩🏽', streak: 15, flossesThisWeek: 14, isCurrentUser: false },
    { name: 'Sarah Chen', avatar: '👩🏻', streak: 12, flossesThisWeek: 12, isCurrentUser: false },
    { name: 'Marcus Johnson', avatar: '👨🏾', streak: 8, flossesThisWeek: 11, isCurrentUser: false },
    { name: 'David Park', avatar: '👨🏻', streak: 5, flossesThisWeek: 10, isCurrentUser: false },
  ];
  // Add user entry
  const userEntry: LeaderboardEntry = {
    name: 'You',
    avatar: '😊',
    streak: userStreak,
    flossesThisWeek: userStreak, // Or use a real value if available
    isCurrentUser: true,
  };
  // Combine and sort
  let allEntries = [...others, userEntry];
  allEntries = allEntries.sort((a, b) => b.streak - a.streak);
  // If user streak is 0, put at bottom
  if (userStreak === 0) {
    allEntries = allEntries.filter(e => !e.isCurrentUser).concat([userEntry]);
  }
  // Assign ranks
  allEntries = allEntries.map((entry, idx) => ({ ...entry, rank: idx + 1 }));

  const getMedalEmoji = (rank: number) => {
    if (rank === 1) return '🥇';
    if (rank === 2) return '🥈';
    if (rank === 3) return '🥉';
    return null;
  };

  return (
    <View style={styles.section}>
      <View style={styles.leaderboardHeader}>
        <Trophy size={20} color="#00D9E1" />
        <Text style={styles.sectionTitle}>This Week</Text>
      </View>
      {allEntries.map((entry) => (
        <View
          key={entry.rank}
          style={[
            styles.leaderboardEntry,
            entry.isCurrentUser && styles.leaderboardEntryCurrentUser,
          ]}
        >
          <View style={styles.leaderboardMedalBox}>
            {getMedalEmoji(entry.rank ?? 0) ? (
              <Text style={styles.leaderboardMedal}>{getMedalEmoji(entry.rank ?? 0)}</Text>
            ) : (
              <Text style={styles.leaderboardRank}>#{entry.rank}</Text>
            )}
          </View>
          <Text style={styles.leaderboardAvatar}>{entry.avatar}</Text>
          <View style={{ flex: 1, minWidth: 0 }}>
            <Text style={[styles.leaderboardName, entry.isCurrentUser && styles.leaderboardNameCurrentUser]} numberOfLines={1}>
              {entry.name}
            </Text>
            <View style={styles.leaderboardStreakRow}>
              <Flame size={12} color="#fb923c" />
              <Text style={styles.leaderboardStreakText}>{entry.streak} days</Text>
            </View>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.leaderboardFlosses}>{entry.flossesThisWeek}</Text>
            <Text style={styles.leaderboardFlossesLabel}>flosses</Text>
          </View>
        </View>
      ))}
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
  leaderboardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  leaderboardEntry: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    borderRadius: 14,
    backgroundColor: 'rgba(255,255,255,0.05)',
    marginBottom: 8,
  },
  leaderboardEntryCurrentUser: {
    backgroundColor: 'rgba(0,217,225,0.20)',
    borderWidth: 1,
    borderColor: 'rgba(0,217,225,0.40)',
  },
  leaderboardMedalBox: {
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leaderboardMedal: {
    fontSize: 18,
  },
  leaderboardRank: {
    color: 'rgba(255,255,255,0.40)',
    fontSize: 13,
  },
  leaderboardAvatar: {
    fontSize: 22,
    marginRight: 8,
  },
  leaderboardName: {
    color: 'white',
    fontWeight: '500',
    fontSize: 14,
  },
  leaderboardNameCurrentUser: {
    color: '#00D9E1',
  },
  leaderboardStreakRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  leaderboardStreakText: {
    color: '#fb923c',
    fontSize: 12,
    marginLeft: 2,
  },
  leaderboardFlosses: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'right',
  },
  leaderboardFlossesLabel: {
    color: 'rgba(255,255,255,0.50)',
    fontSize: 11,
    textAlign: 'right',
  },
});
