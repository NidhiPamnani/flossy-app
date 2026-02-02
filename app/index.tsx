import { Redirect } from 'expo-router';
import { ROUTES } from '../constants/routes';


export default function Index() {
  const hasCompletedOnboarding = false; // later from storage
  const hasCompletedReminders = false;

  if (!hasCompletedOnboarding) {
    return <Redirect href={ROUTES.ONBOARDING.START} />;
  }

  if (!hasCompletedReminders) {
    return <Redirect href={ROUTES.REMINDERS.NOTIFICATIONS} />;
  }

  return <Redirect href={ROUTES.APP.HOME} />;
}
