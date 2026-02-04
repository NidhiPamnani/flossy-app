import { formatDateKey, startOfToday } from '@/lib/date';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SymptomTracker } from './symptoms/symptomTracker';
import { TodaySection } from './today/todaySection';
import { WeekView } from './week/WeekView';

export function HomePage() {
  const MAX_SKIPS = 5;
  const WEEKLY_GOAL = 2;
  const [skipsLeft, setSkipsLeft] = useState(MAX_SKIPS);

  const today = startOfToday();

  const [selectedDate, setSelectedDate] = useState(
    formatDateKey(today)
  );

  const [trackedDays, setTrackedDays] = useState<
    Map<string, 'yes' | 'no' | 'skip'>
  >(new Map());

  const setStatusForDate = (
  date: string,
  status: 'yes' | 'no' | 'skip' | null
) => {
  const prevStatus = trackedDays.get(date);
  const next = new Map(trackedDays);

  // remove status
  if (status === null) {
    next.delete(date);

    // undo skip → restore skip
    if (prevStatus === 'skip') {
      setSkipsLeft((s) => Math.min(s + 1, MAX_SKIPS));
    }
  } else {
    next.set(date, status);

    // consume skip
    if (status === 'skip' && prevStatus !== 'skip') {
      setSkipsLeft((s) => Math.max(s - 1, 0));
    }
  }

  setTrackedDays(next);
};



  return (

    <View style={{flex:1}}>
    <LinearGradient
      colors={['#3D5FA8', '#2B4A9F', '#1E3A8A', '#1E3270']}
      locations={[0, 0.3, 0.7, 1]}
      style={styles.container}
    >

      <Text style={styles.title}>flossy</Text>
        <View style={styles.goalRow}>
          <View style={styles.goalBlock}>
          <Text style={styles.goalLabel}>Weekly Goal</Text>
          <Text style={styles.goalValue}>{WEEKLY_GOAL}× / week</Text>
        </View>

        <Text style={styles.separator}>|</Text>

        <View style={styles.goalBlock}>
        <Text style={styles.goalLabel}>Skips left</Text>
        <Text style={styles.goalValue}>
            {skipsLeft} / {MAX_SKIPS}
        </Text>
        </View>
      </View>


      <TodaySection
        date={selectedDate}
        status={trackedDays.get(selectedDate) ?? null}
        onSetStatus={(s) => setStatusForDate(selectedDate, s)}
        canSkip={skipsLeft > 0}
      />

      <WeekView
        trackedDays={trackedDays}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />

      <SymptomTracker selectedDate={selectedDate} />
    </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 16,
    paddingBottom: 100,
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
  },
  title: {
      color: '#ffffff',
      fontSize: 25,
      fontWeight: '600',
      marginTop: 5,
      marginBottom: 6,
      textAlign: 'center',
      alignSelf: 'center',
    },
  goalRow: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: 14,
},

goalBlock: {
  alignItems: 'center',
  paddingHorizontal: 12,
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