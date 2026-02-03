import { formatDateKey, startOfToday } from '@/lib/date';
import { LinearGradient } from 'expo-linear-gradient';
import { ChevronLeft, ChevronRight } from 'lucide-react-native';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export function WeekView({
  trackedDays,
  selectedDate,
  onSelectDate,
}: {
  trackedDays: Map<string, 'yes' | 'no' | 'skip'>;
  selectedDate: string;
  onSelectDate: (d: string) => void;
}) {
  const [weekOffset, setWeekOffset] = useState(0);
  const today = startOfToday();

  const monday = new Date(today);
  const offsetDays = weekOffset * 7;
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7) + offsetDays);

  const weekStart = new Date(monday);
  const weekEnd = new Date(monday);
  weekEnd.setDate(monday.getDate() + 6);

  const monthNames = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const weekRange = `${monthNames[weekStart.getMonth()]} ${weekStart.getDate()} – ${weekEnd.getDate()}`;

  return (
    <View style={styles.container}>
    <LinearGradient
      colors={['#577bd1', '#4f6fb3', '#2B4A9F', '#1E3A8A', '#1E3270']}
      locations={[0, 0.18, 0.45, 0.75, 1]}
      style={styles.card}
    >
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => setWeekOffset(weekOffset - 1)} style={styles.arrow}>
          <ChevronLeft color="#ffffff" width={24} height={24} />
        </Pressable>

        <Text style={styles.weekText}>{weekRange}</Text>

        <Pressable onPress={() => setWeekOffset(weekOffset + 1)} style={styles.arrow}>
          <ChevronRight color="#ffffff" width={24} height={24} />
        </Pressable>
      </View>

      {/* Week days */}
      <View style={styles.row}>
        {Array.from({ length: 7 }).map((_, i) => {
          const d = new Date(monday);
          d.setDate(monday.getDate() + i);
          const key = formatDateKey(d);

          return (
            <Pressable
              key={key}
              onPress={() => onSelectDate(key)}
              style={[
                styles.day,
                key === selectedDate && styles.selected,
                trackedDays.has(key) && styles.tracked,
              ]}
            >
              <Text style={styles.text}>{d.getDate()}</Text>
            </Pressable>
          );
        })}
      </View>
    </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  card: {
    backgroundColor: '#2c62cd',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 20,
    width: '85%',           // slightly smaller than TodaySection
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
    marginVertical: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  weekText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 16,
  },
  arrow: {
    padding: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#374151',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tracked: {
    borderWidth: 2,
    borderColor: '#00d3f3',
  },
  selected: {
    backgroundColor: '#00d3f3',
  },
  text: {
    color: '#ffffff',
  },
});
