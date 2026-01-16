import { StyleSheet } from 'react-native';

export const theme = {
  colors: {
    background: '#2a74eb',
    primary: '#35d0ff',
    dotActive: '#35d0ff',
    dotInactive: '#8fb8c6',
    text: '#ffffff',
    textDim: '#cfeaf690',
    cta: '#12d7f1',
  },
};

const onboardingStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  brand: {
    color: theme.colors.primary,
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 18,
  },
  artworkWrap: {
    width: 170,
    height: 170,
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#448dbd',
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 6,
  },
  artwork: {
    width: 150,
    height: 150,
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
    fontWeight: '600',
    marginTop: 10,
    marginBottom: 6,
  },
  subtitle: {
    color: theme.colors.textDim,
    textAlign: 'center',
    marginBottom: 24,
    fontSize: 15,
  },
  cta: {
    backgroundColor: theme.colors.cta,
    paddingVertical: 12,
    paddingHorizontal: 34,
    borderRadius: 8,
    width: 240,
    alignItems: 'center',
  },
  ctaText: {
    color: '#00303f',
    fontWeight: '700',
  },
});


export default onboardingStyles;
