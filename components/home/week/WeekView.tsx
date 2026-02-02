import { formatDateKey, startOfToday } from '@/lib/date';
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
  const today = startOfToday();
  const monday = new Date(today);
  monday.setDate(today.getDate() - ((today.getDay() + 6) % 7));

  return (
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
            ]}
          >
            <Text style={styles.text}>{d.getDate()}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  day: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: '#1f2937',
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#00d3f3',
  },
  text: {
    color: 'white',
  },
});
