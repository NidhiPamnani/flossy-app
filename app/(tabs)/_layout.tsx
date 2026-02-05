import { BottomNav } from '@/components/bottomNav';
import { FlossProvider } from '@/components/context/FlossContext';
import { Slot, usePathname, useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';

export default function TabsLayout() {
  const router = useRouter();
  const pathname = usePathname();

  // Determine current page from the URL pathname
  const getCurrentPage = () => {
    if (pathname.includes('/education')) return 'education';
    if (pathname.includes('/insights')) return 'insights';
    if (pathname.includes('/challenges')) return 'challenges';
    if (pathname.includes('/profile')) return 'profile';
    return 'home';
  };

  // Navigate to the selected page
  const handleNavigate = (page: string) => {
    // Use type assertion to handle the route string
    switch (page) {
      case 'education':
        router.push('/(tabs)/education');
        break;
      case 'insights':
        router.push('/(tabs)/insights');
        break;
      case 'home':
        router.push('/(tabs)/home');
        break;
      case 'challenges':
        router.push('/(tabs)/challenges');
        break;
      case 'profile':
        router.push('/(tabs)/profile');
        break;
    }
  };

  return (
    <FlossProvider>
    <View style={styles.container}>
      {/* Slot renders the current page (home, education, etc.) */}
      <View style={styles.content}>
        <Slot />
      </View>

      {/* Bottom navigation */}
      <BottomNav 
        currentPage={getCurrentPage()} 
        onNavigate={handleNavigate} 
      />
    </View>
    </FlossProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});