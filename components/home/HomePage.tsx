import { formatDateKey, startOfToday } from '@/lib/date';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFloss } from '../../components/context/FlossContext';
import { SymptomTracker } from './symptoms/symptomTracker';
import { TodaySection } from './today/todaySection';
import { WeekView } from './week/WeekView';

export function HomePage() {
  const WEEKLY_GOAL = 2;

  const today = startOfToday();

  const { trackedDays, setStatusForDate, skipsLeft, maxSkips } = useFloss();

  const [selectedDate, setSelectedDate] = useState(
    formatDateKey(today)
  );


  return (
    <LinearGradient
      colors={['#3D5FA8', '#2B4A9F', '#1E3A8A', '#1E3270']}
      locations={[0, 0.3, 0.7, 1]}
      style={styles.container}
    >
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Text style={styles.title}>flossy</Text>
        
        {/* Goals Row */}
        <View style={styles.goalRow}>
          <View style={styles.goalBlock}>
            <Text style={styles.goalLabel}>Weekly Goal</Text>
            <Text style={styles.goalValue}>{WEEKLY_GOAL}× / week</Text>
          </View>

          <Text style={styles.separator}>|</Text>

          <View style={styles.goalBlock}>
            <Text style={styles.goalLabel}>Skips left</Text>
            <Text style={styles.goalValue}>
              {skipsLeft} / {maxSkips}
            </Text>
          </View>
        </View>

        {/* Today Section */}
        <TodaySection
          date={selectedDate}
          status={trackedDays.get(selectedDate) ?? null}
          onSetStatus={(s) => setStatusForDate(selectedDate, s)}
          canSkip={skipsLeft > 0}
        />

        {/* Week View */}
        <WeekView
          trackedDays={trackedDays}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />

        {/* Symptom Tracker */}
        <SymptomTracker selectedDate={selectedDate} />
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },
  title: {
    color: '#ffffff',
    fontSize: 28,
    fontWeight: '600',
    marginTop: '16%',
    marginBottom: 12,
    textAlign: 'center',
  },
  goalRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  goalBlock: {
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  goalLabel: {
    fontSize: 12,
    color: 'rgba(255,255,255,0.7)',
  },
  goalValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
    marginTop: 2,
  },
  separator: {
    color: 'rgba(255,255,255,0.4)',
    fontSize: 18,
    marginHorizontal: 4,
  },
});

export default HomePage;