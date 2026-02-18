import { Picker } from '@react-native-picker/picker';
import React, { useEffect, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useOnboarding } from '../context/OnboardingContext';

interface EditGoalsModalProps {
  visible: boolean;
  onClose: () => void;
}

export function EditGoalsModal({ visible, onClose }: EditGoalsModalProps) {
  const { onboardingData, setOnboardingData } = useOnboarding();
  const [selectedDays, setSelectedDays] = useState(onboardingData?.goal ? parseInt(onboardingData.goal) : 2);
  const [reminderTime, setReminderTime] = useState(onboardingData?.reminderTime || '21:00');

  useEffect(() => {
    if (visible && onboardingData) {
      setSelectedDays(onboardingData.goal ? parseInt(onboardingData.goal) : 2);
      setReminderTime(onboardingData.reminderTime || '21:00');
    }
  }, [visible, onboardingData]);

  // Generate time options in 5-min increments
  const timeOptions: string[] = [];
  for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m += 5) {
      const hour = h.toString().padStart(2, '0');
      const min = m.toString().padStart(2, '0');
      timeOptions.push(`${hour}:${min}`);
    }
  }

  const restDays = 7 - selectedDays;

  const handleSave = async () => {
    await setOnboardingData({ goal: String(selectedDays), reminderTime });
    onClose();
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalCard}>
          {/* Header */}
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Edit Your Goals</Text>
            <Pressable onPress={onClose} style={styles.closeBtn}>
              <Text style={{ color: 'white', fontSize: 20 }}>×</Text>
            </Pressable>
          </View>
          <Text style={styles.modalDesc}>
            Adjust your flossing goals to match your lifestyle. Small, consistent steps lead to lasting habits.
          </Text>

          {/* Weekly Flossing Plan */}
          <View style={styles.planCard}>
            <Text style={styles.planTitle}>Weekly Flossing Plan</Text>
            <View style={{ alignItems: 'center', marginBottom: 8 }}>
              <Text style={styles.planDays}>{selectedDays}</Text>
              <Text style={styles.planDaysLabel}>days per week</Text>
              <Text style={styles.planRest}>Rest days: {restDays}</Text>
            </View>
            <View style={styles.daySelectorRow}>
              {[0, 1, 2, 3, 4, 5, 6].map((day) => (
                <TouchableOpacity
                  key={day}
                  onPress={() => setSelectedDays(day + 1)}
                  style={[styles.dayCircle, day < selectedDays && styles.dayCircleActive]}
                />
              ))}
            </View>
            <View style={styles.daySelectorLabels}>
              <Text style={styles.daySelectorLabel}>0 days</Text>
              <Text style={styles.daySelectorLabel}>7 days</Text>
            </View>
          </View>

          {/* Reminder Time Picker */}
          <View style={styles.reminderRow}>
            <Text style={styles.reminderLabel}>Reminder:    </Text>
            <View style={{ flex: 1, backgroundColor: '#fff', borderRadius: 8, overflow: 'hidden' }}>
              <Picker
                selectedValue={reminderTime}
                onValueChange={setReminderTime}
                style={{ color: '#222', backgroundColor: '#5bcbea', width: '100%' }}
                dropdownIconColor="#2563eb"
                itemStyle={{ color: '#222', backgroundColor: '#5bcbea' }}
                mode="dropdown"
              >
                {timeOptions.map((t) => (
                  <Picker.Item key={t} label={t} value={t} color="#222" style={{ fontWeight: '500' }} />
                ))}
              </Picker>
            </View>
          </View>

          {/* Save Button */}
          <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
            <Text style={styles.saveBtnText}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalCard: {
    width: '90%',
    maxWidth: 390,
    backgroundColor: 'rgba(107,126,196,1)',
    borderRadius: 24,
    padding: 24,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 10,
  },
  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  modalTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '400',
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalDesc: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
    marginBottom: 16,
  },
  planCard: {
    backgroundColor: 'rgba(66,84,153,0.4)',
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
  },
  planTitle: {
    color: 'white',
    fontSize: 16,
    marginBottom: 12,
  },
  planDays: {
    color: 'white',
    fontSize: 48,
    fontWeight: '400',
  },
  planDaysLabel: {
    color: 'white',
    fontSize: 16,
    marginBottom: 2,
  },
  planRest: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: 14,
    marginBottom: 4,
  },
  daySelectorRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 4,
  },
  dayCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.3)',
    marginHorizontal: 2,
    backgroundColor: 'transparent',
  },
  dayCircleActive: {
    backgroundColor: '#22d3ee',
    borderColor: 'transparent',
    shadowColor: '#22d3ee',
    shadowOpacity: 0.4,
    shadowRadius: 6,
  },
  daySelectorLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 2,
  },
  daySelectorLabel: {
    color: 'rgba(255,255,255,0.5)',
    fontSize: 12,
  },
  reminderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  reminderLabel: {
    color: 'rgba(255,255,255,0.7)',
    fontSize: 14,
  },
  reminderValue: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  saveBtn: {
    marginTop: 24,
    height: 48,
    borderRadius: 999,
    backgroundColor: '#22d3ee',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#22d3ee',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 2,
  },
  saveBtnText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    letterSpacing: -0.44,
  },
});
