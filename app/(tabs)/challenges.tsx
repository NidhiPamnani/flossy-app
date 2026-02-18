import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView } from 'react-native';
import { AccountabilityPartner, Leaderboard, RewardsProgress } from '../../components/challenges/';
import onboardingStyles from '../onboarding/onboardingPage';

export default function ChallengesScreen() {
    return (
        <LinearGradient
            colors={['#3D5FA8', '#2B4A9F', '#1E3A8A', '#1E3270']}
            locations={[0, 0.3, 0.7, 1]}
            style={[onboardingStyles.container, { paddingHorizontal: 0 }]}
        >
            <ScrollView
                contentContainerStyle={{ padding: 20, paddingBottom: 40 }}
                style={{ flex: 1, width: '100%' }}
                showsVerticalScrollIndicator={false}
            >
                <AccountabilityPartner />
                <Leaderboard />
                <RewardsProgress />
            </ScrollView>
        </LinearGradient>
    );
}