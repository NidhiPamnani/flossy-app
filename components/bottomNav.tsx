import { Award, BarChart2, BookOpen, Home, User } from 'lucide-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface BottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const tabs = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'education', label: 'Learn', icon: BookOpen },
    { id: 'insights', label: 'Insights', icon: BarChart2 },
    { id: 'challenges', label: 'Challenges', icon: Award },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <View style={styles.navContainer}>
      {tabs.map(tab => {
        const IconComponent = tab.icon;
        const active = currentPage === tab.id;

        return (
          <Pressable
            key={tab.id}
            onPress={() => onNavigate(tab.id)}
            style={styles.tab}
          >
            <View style={[styles.iconCircle, active && styles.activeCircle]}>
              <IconComponent width={20} height={20} color={active ? '#00d3f3' : '#ffffffa0'} />
            </View>
            <Text style={[styles.label, active && styles.activeLabel]}>{tab.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#1E3270', // gradient-ish dark color
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  tab: {
    alignItems: 'center',
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  activeCircle: {
    backgroundColor: '#2B4A9F',
  },
  label: {
    fontSize: 10,
    color: '#ffffffa0',
  },
  activeLabel: {
    color: '#00d3f3',
    fontWeight: '600',
  },
});
