import { Text, View } from 'react-native';
import { WeekRow } from './WeekRow';
import { styles } from './insightStyles';

export function MonthSection({ year, month, weeks }: any) {
  return (
    <View style={styles.monthCard}>
      <Text style={styles.monthTitle}>
        {new Date(year, month).toLocaleString('default', { month: 'long' })}
      </Text>

      {weeks.map((week : any, i: any) => (
        <WeekRow key={i} week={week} />
      ))}
    </View>
  );
}
