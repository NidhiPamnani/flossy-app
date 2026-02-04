import { LinearGradient } from 'expo-linear-gradient';
import { View } from 'react-native';
import { EducationPage } from '../../components/Education';
import onboardingStyles from '../onboarding/onboardingPage';

export default function EducationScreen() {
return (
    <LinearGradient
            colors={['#3D5FA8', '#2B4A9F', '#1E3A8A', '#1E3270']}
            locations={[0, 0.3, 0.7, 1]}
            style={onboardingStyles.container}
    >
        <View>  
            <View style={onboardingStyles.container}>
                <EducationPage />
            </View>
        </View>
    </LinearGradient>
);
}