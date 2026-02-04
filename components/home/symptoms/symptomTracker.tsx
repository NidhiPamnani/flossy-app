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
    <View style={styles.container}>
      <Text style={styles.title}>Track Symptoms</Text>
      <View style={styles.grid}>
        {SYMPTOMS.map(s => {
          const IconComponent = s.icon;
          const isActive = selected.has(s.id);

          return (
            <Pressable
              key={s.id}
              onPress={() => toggle(s.id)}
              style={[styles.item, isActive && styles.active]}
            >
              <View style={styles.itemContent}>
                <View style={[styles.iconCircle, isActive && styles.activeCircle]}>
                  {IconComponent && <IconComponent width={18} height={18} color="white" />}
                </View>
                <Text style={styles.text}>{s.label}</Text>
              </View>
            </Pressable>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 10,
  },
  item: {
    width: '100%',
    maxWidth: 400,
    padding: 14,
    backgroundColor: '#2560b1',
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  active: {
    borderColor: '#00d3f3',
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeCircle: {
    backgroundColor: '#00d3f3',
  },
  text: {
    color: 'white',
    fontWeight: '500',
    fontSize: 15,
  },
});