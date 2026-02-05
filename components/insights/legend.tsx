import { Check, Minus, X } from 'lucide-react-native';
import { Text, View } from 'react-native';
import { styles } from './insightStyles';

export function Legend() {
  return (
    <View style={styles.legendContainer}>
      <LegendItem label="Flossed" color="#22d3ee" icon={<Check size={16} color="#fff" />} />
      <LegendItem label="Skipped" color="rgba(251,146,60,0.61)" icon={<Minus size={16} color="#fff" />} />
      <LegendItem label="Didn't Floss" color="rgba(114,133,244,0.6)" icon={<X size={16} color="#fff" />} />
    </View>
  );
}

interface LegendItemProps {
  label: string;
  color: string;
  icon: React.ReactNode;
}

function LegendItem({ label, color, icon }: LegendItemProps) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendIcon, { backgroundColor: color }]}>{icon}</View>
      <Text style={styles.legendLabel}>{label}</Text>
    </View>
  );
}
