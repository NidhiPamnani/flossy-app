import {
    AlertCircle,
    CheckCircle,
    Clock,
    Droplet,
    Frown,
    Moon,
    MoreHorizontal,
    Zap,
} from "lucide-react-native";


export const SYMPTOMS = [
  { id: 'bleeding', label: 'Bleeding', icon: Droplet, color: '#ef4444' },
  { id: 'sensitivity', label: 'Sensitivity', icon: Zap, color: '#f59e0b' },
  { id: 'pain', label: 'Pain', icon: AlertCircle, color: '#dc2626' },
  { id: 'discomfort', label: 'Discomfort', icon: Frown, color: '#f97316' },
  { id: 'too-tired', label: 'Too tired to floss', icon: Moon, color: '#8b5cf6' },
  { id: 'no-symptoms', label: 'No symptoms', icon: CheckCircle, color: '#10b981' },
  { id: 'late-bedtime', label: 'Late bedtime', icon: Clock, color: '#6366f1' },
  { id: 'other', label: 'Other', icon: MoreHorizontal, color: '#64748b' },
];
