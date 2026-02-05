import { MonthlyCalendar } from '@/components/insights/MonthlyCalendar';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, StyleSheet } from 'react-native';
import { useFloss } from '../../components/context/FlossContext';
import { InsightsStatsRow } from '../../components/insights/Insights';
import { Legend } from '../../components/insights/legend';

export default function InsightsScreen() {
  const floss = useFloss();

  return (
    <LinearGradient
              colors={['#3D5FA8', '#2B4A9F', '#1E3A8A', '#1E3270']}
              locations={[0, 0.3, 0.7, 1]}
              style={styles.container}
            >
    <ScrollView contentContainerStyle={{ padding: 20 }}>
      <InsightsStatsRow floss={floss} />
      <MonthlyCalendar floss={floss} />
      <Legend />
    </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
