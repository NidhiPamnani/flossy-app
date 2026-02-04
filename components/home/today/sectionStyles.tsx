import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    alignItems: 'center',
  },
  card: {
    borderRadius: 24,
    padding: 24,
    width: '100%',
    maxWidth: 400,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(36, 195, 231, 0.64)',
  },
  dateLabel: {
    color: '#272525',
    fontSize: 14,
    marginBottom: 4,
  },
  dateText: {
    color: '#2c2a2a',
    fontSize: 13,
    marginBottom: 16,
    textAlign: 'center',
  },
  statusText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: '500',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500',
  },
  yesButton: {
    backgroundColor: '#00d3f3',
  },
  skipButton: {
    backgroundColor: 'rgba(255,165,0,0.7)',
  },
  noButton: {
    backgroundColor: 'rgba(255, 0, 0, 0.51)',
  },
  disabledButton: {
    backgroundColor: 'rgba(0, 0, 0, 0.28)',
    opacity: 0.5,
  },
  undoButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
});