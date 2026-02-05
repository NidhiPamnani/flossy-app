import { Check, Minus, X } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { styles } from './insightStyles';

type DayStatus = 'yes' | 'skip' | 'no';

interface Day {
  date: Date;
  status: DayStatus;
}

export function DayCell({ day }: { day: Day }) {
  if (isNaN(day.date.getTime())) {
    return <View style={styles.dayEmpty} />;
  }

  return (
    <View style={[styles.dayCell, styles[day.status]]}>
      <Text style={styles.dayNumber}>{day.date.getDate()}</Text>
      {day.status === 'yes' && <Check size={12} color="#fff" />}
      {day.status === 'skip' && <Minus size={12} color="#fff" />}
      {day.status === 'no' && <X size={12} color="#fff" />}
    </View>
  );
}
