import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  statsGrid: {
    paddingTop: "12%",
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginBottom: 24,
    //paddingLeft: "5%",
  },

  statCard: {
    width: '48%',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 16,
    padding: 16,
  },

  statLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 16 },
  statValue: { fontSize: 28, color: '#fff' },
  statValueRow: { flexDirection: 'row', alignItems: 'center', gap: 6, },
  statSub: { color: 'rgba(255,255,255,0.6)', marginTop: 4 },

  monthCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    padding: 16,
    marginBottom: 20,
    width: '100%',
  },

  monthTitle: { color: '#fff', marginBottom: 12, fontSize: 19, fontWeight: '600' },

  weekRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginBottom: 8,
  },

  weekGrid: {
    flexDirection: 'row',
    gap: 4,
    flex: 1,
  },

  dayCell: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 8,
    borderColor: 'rgba(255,255,255,0.2)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dayEmpty: { flex: 1 },

  dayNumber: {
    position: 'absolute',
    top: 4,
    left: 6,
    fontSize: 10,
    color: 'rgba(255,255,255,0.8)',
  },

  yes: { backgroundColor: '#22d3ee' },
  skip: { backgroundColor: 'rgba(251,146,60,0.6)' },
  no: { backgroundColor: 'rgba(114,133,244,0.6)' },
  weekBar: {
  height: 10,
  borderRadius: 999,
  backgroundColor: '#fbbf24',
  marginTop: 6,
},
legendContainer: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 16, // spacing between items
  marginTop: 12,
  paddingTop: 12,
  borderTopWidth: 1,
  borderTopColor: 'rgba(255,255,255,0.2)',
},
legendItem: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 4,
},
legendIcon: {
  width: 24,
  height: 24,
  borderRadius: 6,
  justifyContent: 'center',
  alignItems: 'center',
},
legendLabel: {
  color: 'rgba(255,255,255,0.7)',
  fontSize: 12,
},
yearSelector: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 16,
  paddingHorizontal: 16,
},

yearButton: {
  padding: 8,
  borderRadius: 8,
},

yearButtonText: {
  color: '#fff', // or any color that fits your theme
  fontSize: 18,
  fontWeight: '600',
},

yearLabel: {
  color: '#fff',
  fontSize: 18,
  fontWeight: '600',
},


});
