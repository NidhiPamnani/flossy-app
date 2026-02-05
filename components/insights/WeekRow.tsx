import { Star } from 'lucide-react-native';
import { View } from 'react-native';
import { DayCell } from './DayCell';
import { styles } from './insightStyles';

export function WeekRow({ week }: any) {
  return (
    <View style={styles.weekRow}>
      <View style={styles.weekGrid}>
        {week.days.map((d: any, i: number) => (
          <DayCell key={i} day={d} />
        ))}
      </View>

      {week.achievedStreak && (
        <Star size={16} color="#fbbf24" fill="#fbbf24" />
      )}
    </View>
  );
}
