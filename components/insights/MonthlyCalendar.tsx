import { getWeeksForMonth } from '@/lib/insightsDates';
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MonthSection } from './MonthSection';
import { styles } from './insightStyles'; // reuse your Figma-based styles

export function MonthlyCalendar({ floss }: any) {
  const today = new Date();
  const [year, setYear] = useState(today.getFullYear());

  const handlePrevYear = () => setYear((y) => y - 1);
  const handleNextYear = () => setYear((y) => y + 1);

  return (
    <View>
      {/* Year Selector */}
      <View style={styles.yearSelector}>
        <TouchableOpacity onPress={handlePrevYear} style={styles.yearButton}>
          <Text style={styles.yearButtonText}>←</Text>
        </TouchableOpacity>

        <Text style={styles.yearLabel}>{year}</Text>

        <TouchableOpacity onPress={handleNextYear} style={styles.yearButton}>
          <Text style={styles.yearButtonText}>→</Text>
        </TouchableOpacity>
      </View>

      {/* Calendar */}
      {Array.from({ length: 12 }).map((_, month) => (
        <MonthSection
          key={month}
          year={year}
          month={month}
          weeks={getWeeksForMonth(year, month, floss.trackedDays)}
        />
      ))}
    </View>
  );
}
