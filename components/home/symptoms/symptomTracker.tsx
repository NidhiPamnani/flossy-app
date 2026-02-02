import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SYMPTOMS } from './symptoms.config';

export function SymptomTracker({ selectedDate }: { selectedDate: string }) {
  const [byDate, setByDate] = useState<Map<string, Set<string>>>(new Map());
  const selected = byDate.get(selectedDate) ?? new Set();

  const toggle = (id: string) => {
    const next = new Map(byDate);
    const set = new Set(selected);
    set.has(id) ? set.delete(id) : set.add(id);
    set.size ? next.set(selectedDate, set) : next.delete(selectedDate);
    setByDate(next);
  };

  return (
    <View>
      <Text style={styles.title}>Track Symptoms</Text>
      <View style={styles.grid}>
        {SYMPTOMS.map(s => (
          <Pressable
            key={s.id}
            onPress={() => toggle(s.id)}
            style={[
              styles.item,
              selected.has(s.id) && styles.active,
            ]}
          >
            <Text style={styles.text}>{s.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: 'white',
    fontSize: 18,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  item: {
    width: '48%',
    padding: 14,
    backgroundColor: '#7a9ed1',
    borderRadius: 16,
  },
  active: {
    borderColor: '#00d3f3',
    borderWidth: 2,
  },
  text: {
    color: 'white',
  },
});
