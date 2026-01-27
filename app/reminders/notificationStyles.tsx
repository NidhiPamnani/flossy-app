// notificationStyles.ts
import { StyleSheet } from 'react-native';

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 32,
    paddingVertical: 48,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  progressRow: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 32,
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255,255,255,0.3)',
  },

  dotActive: {
    backgroundColor: '#22d3ee',
  },

  content: {
    flex: 1,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
  },

  bellWrapper: {
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: '#22d3ee',
    alignItems: 'center',
    justifyContent: 'center',
  },

  notificationDot: {
    position: 'absolute',
    top: -4,
    right: -4,
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fde047',
  },

  textWrap: {
    alignItems: 'center',
    gap: 16,
  },

  title: {
    fontSize: 28,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },

  subtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.8)',
    textAlign: 'center',
  },

  actions: {
    width: '100%',
    gap: 16,
  },

  primaryButton: {
    backgroundColor: '#22d3ee',
    paddingVertical: 16,
    borderRadius: 20,
  },

  primaryButtonText: {
    color: '#2A3F8F',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },

  secondaryButtonText: {
    color: 'rgba(255,255,255,0.6)',
    textAlign: 'center',
    fontSize: 16,
  },

  bottomSpacer: {
    height: 32,
  },
});
export default styles;
