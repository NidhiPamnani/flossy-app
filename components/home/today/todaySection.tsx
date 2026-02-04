import { LinearGradient } from 'expo-linear-gradient';
import { Check, Minus, X } from 'lucide-react-native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './sectionStyles';

interface TodaySectionProps {
  date: string;
  status: 'yes' | 'no' | 'skip' | null;
  onSetStatus: (status: 'yes' | 'no' | 'skip' | null) => void;
  canSkip: boolean;
}

export function TodaySection({ date, status, onSetStatus, canSkip }: TodaySectionProps) {
  const formatDate = (dateStr: string) => {
    const d = new Date(dateStr + 'T00:00:00');
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    return {
      dayName: dayNames[d.getDay()],
      monthName: monthNames[d.getMonth()],
      date: d.getDate(),
      year: d.getFullYear()
    };
  };

  const formattedDate = formatDate(date);
  
  // Check if date is today
  const today = new Date();
  const dateObj = new Date(date + 'T00:00:00');
  const isToday = dateObj.toDateString() === today.toDateString();

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#b0c3d8', '#7eb1e7', '#7db8f7', '#5CADFF', '#369AFF']}
        locations={[0, 0.18, 0.45, 0.75, 1]}
        style={styles.card}
      >
        <Text style={styles.dateLabel}>{isToday ? 'Today' : formattedDate.dayName}</Text>
        <Text style={styles.dateText}>
          {formattedDate.dayName}, {formattedDate.monthName} {formattedDate.date}, {formattedDate.year}
        </Text>

        <Text style={styles.statusText}>
          {status === 'yes' ? 'Flossed! 🎉' :
           status === 'no' ? 'Maybe tomorrow' :
           status === 'skip' ? 'Skipped' :
           'Did you floss?'}
        </Text>

        <View style={styles.actions}>
          {status === null ? (
            <>
              <TouchableOpacity
                style={[styles.button, styles.yesButton]}
                onPress={() => onSetStatus('yes')}
              >
                <Check width={16} height={16} color="white" />
                <Text style={styles.buttonText}>Yes</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, canSkip ? styles.skipButton : styles.disabledButton]}
                onPress={() => onSetStatus('skip')}
                disabled={!canSkip}
              >
                <Minus width={16} height={16} color="white" />
                <Text style={styles.buttonText}>Skip</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, canSkip ? styles.disabledButton : styles.noButton]}
                onPress={() => onSetStatus('no')}
                disabled={canSkip}
              >
                <X width={16} height={16} color="white" />
                <Text style={styles.buttonText}>No</Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              style={[styles.button, styles.undoButton]}
              onPress={() => onSetStatus(null)}
            >
              <X width={16} height={16} color="white" />
              <Text style={styles.buttonText}>Undo</Text>
            </TouchableOpacity>
          )}
        </View>
      </LinearGradient>
    </View>
  );
}