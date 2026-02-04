import { BottomNav } from '@/components/bottomNav'; // adjust path if needed
import { Slot } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

export default function TabsLayout() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <View style={styles.container}>
      {/* Slot renders the current page (home, education, etc.) */}
      <Slot />

      {/* Bottom navigation */}
      <BottomNav currentPage={currentPage} onNavigate={setCurrentPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
