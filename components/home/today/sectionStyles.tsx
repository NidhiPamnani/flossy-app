import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#2c62cd',
    borderRadius: 30,
    padding: 30,
    width: '90%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  dateLabel: {
    color: '#ababab',
    fontSize: 12,
    marginBottom: 4,
  },
  dateText: {
    color: '#ababab',
    fontSize: 12,
    marginBottom: 16,
    textAlign: 'center',
  },
  statusText: {
    fontSize: 24,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
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
  },
  yesButton: {
    backgroundColor: '#00d3f3',
  },
  skipButton: {
    backgroundColor: 'rgba(255,165,0,0.7)',
  },
  noButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  disabledButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    opacity: 0.5,
  },
  undoButton: {
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
});
