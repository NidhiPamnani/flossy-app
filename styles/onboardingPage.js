import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    background: '#0f1724',
    primary: '#35d0ff',
    dotActive: '#35d0ff',
    dotInactive: '#8fb8c6',
    text: '#ffffff',
    textDim: '#cfeaf6',
    cta: '#12d7f1',
  },
};

const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  brand: {
    color: theme.colors.primary,
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 18,
  },
  artworkWrap: {
    width: 180,
    height: 180,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0ea5e9',
    marginBottom: 18,
  },
  artwork: {
    width: 140,
    height: 140,
  },
  dotsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    marginBottom: 12,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.dotInactive,
    marginHorizontal: 6,
  },
  dotActive: {
    backgroundColor: theme.colors.dotActive,
  },
  title: {
    color: theme.colors.text,
    fontSize: 18,
    fontWeight: '700',
    marginTop: 10,
    marginBottom: 6,
  },
  subtitle: {
    color: theme.colors.textDim,
    textAlign: 'center',
    marginBottom: 24,
  },
  cta: {
    backgroundColor: theme.colors.cta,
    paddingVertical: 12,
    paddingHorizontal: 34,
    borderRadius: 8,
    width: '70%',
    alignItems: 'center',
  },
  ctaText: {
    color: '#00303f',
    fontWeight: '700',
  },
});


export default onboardingStyles;
