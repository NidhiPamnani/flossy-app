import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import { Bell } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import styles from './notificationStyles';

export default function NotificationScreen() {
  const router = useRouter();

  const goNext = () => {
    router.push('/reminders/buyFloss');
  };

  const requestNotifications = async () => {
    // hook up expo-notifications later
    goNext();
  };

  return (
    <LinearGradient
      colors={['#3D5FA8', '#2B4A9F', '#1E3A8A', '#1E3270']}
      locations={[0, 0.3, 0.7, 1]}
      style={styles.container}
    >
      {/* Progress dots */}
      <View style={styles.progressRow}>
        <View style={[styles.dot, styles.dotActive]} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* Animated Bell */}
        <View style={styles.bellWrapper}>
          <Bell size={64} color="#4A5FBF" strokeWidth={2.5} />
        </View>

        {/* Text */}
        <View style={styles.textWrap}>
          <Text style={styles.title}>First things first 💪</Text>
          <Text style={styles.subtitle}>
            Turn on notifications so we can remind you to floss daily
          </Text>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <Pressable style={styles.primaryButton} onPress={requestNotifications}>
            <Text style={styles.primaryButtonText}>Enable Notifications</Text>
          </Pressable>

          <Pressable onPress={goNext}>
            <Text style={styles.secondaryButtonText}>Maybe later</Text>
          </Pressable>
        </View>
      </View>

      <View style={styles.bottomSpacer} />
    </LinearGradient>
  );
}
