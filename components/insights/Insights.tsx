import { formatDateKey } from '@/lib/date';
import { Flame, Star } from 'lucide-react-native';
import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { FlossStatus } from '../context/FlossContext';
import { styles } from './insightStyles';

interface FlossContextType {
  trackedDays: Map<string, FlossStatus>;
}

interface InsightsStatsRowProps {
  floss: FlossContextType;
  year?: number;
}

export function InsightsStatsRow({ floss, year }: InsightsStatsRowProps) {
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = year ?? today.getFullYear();

  const stats = useMemo(() => {
    // Convert Map entries to typed array
    const days: { key: string; date: Date; status: FlossStatus }[] = Array.from(
      floss.trackedDays.entries()
    ).map(([key, value]) => ({
      key,
      date: new Date(key),
      status: value,
    })).filter(d => d.date.getFullYear() === currentYear);

    // Sort descending by date
    days.sort((a, b) => b.date.getTime() - a.date.getTime());

    // Current streak (consecutive flossed days ending today)
    let streak = 0;
    let date = new Date(today);
    while (true) {
      const key = formatDateKey(date);
      if (floss.trackedDays.get(key) === 'yes') {
        streak++;
        date.setDate(date.getDate() - 1);
      } else {
        break;
      }
    }

    // Month counts
    let flossed = 0;
    let skipped = 0;
    days.forEach(d => {
      if (d.date.getMonth() === currentMonth) {
        if (d.status === 'yes') flossed++;
        if (d.status === 'skip') skipped++;
      }
    });

    return { flossed, skipped, streak };
  }, [floss.trackedDays, currentMonth, today]);

  return (
    <View style={styles.statsGrid}>
      <Stat label="Flossed" value={stats.flossed} suffix="days this month" />
      <Stat
        label="Current Streak"
        value={stats.streak}
        icon={<Flame size={20} color="#fb923c" />}
      />
      <Stat label="Skipped" value={stats.skipped} suffix="days this month" />
      <Stat
        label="Weekly Goal Streak"
        value={0} // we can compute this later
        icon={<Star size={20} color="#fbbf24" />}
      />
    </View>
  );
}

interface StatProps {
  label: string;
  value: number;
  suffix?: string;
  icon?: React.ReactNode;
}

function Stat({ label, value, suffix, icon }: StatProps) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statLabel}>{label}</Text>
      <View style={styles.statValueRow}>
        <Text style={styles.statValue}>{value}</Text>
        {icon}
      </View>
      {suffix && <Text style={styles.statSub}>{suffix}</Text>}
    </View>
  );
}
