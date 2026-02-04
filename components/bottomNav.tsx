import { Award, BarChart2, BookOpen, Home, User } from 'lucide-react-native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

interface BottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function BottomNav({ currentPage, onNavigate }: BottomNavProps) {
  const tabs = [
    { id: 'education', label: 'Learn', icon: BookOpen },
    { id: 'insights', label: 'Insights', icon: BarChart2 },
    { id: 'home', label: 'Home', icon: Home, isCenter: true },
    { id: 'challenges', label: 'Challenges', icon: Award },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <View style={styles.navContainer}>
      {tabs.map(tab => {
        const IconComponent = tab.icon;
        const active = currentPage === tab.id;

        // Special styling for center home button
        if (tab.isCenter) {
          return (
            <Pressable
              key={tab.id}
              onPress={() => onNavigate(tab.id)}
              style={styles.centerTab}
            >
              <View style={[
                styles.centerIconCircle,
                active && styles.centerIconCircleActive
              ]}>
                <IconComponent 
                  width={28} 
                  height={28} 
                  color={active ? '#101828' : '#ffffff'} 
                />
              </View>
              <Text style={[styles.label, active && styles.activeLabel]}>
                {tab.label}
              </Text>
            </Pressable>
          );
        }

        // Regular tabs
        return (
          <Pressable
            key={tab.id}
            onPress={() => onNavigate(tab.id)}
            style={styles.tab}
          >
            <View style={[styles.iconCircle, active && styles.activeCircle]}>
              <IconComponent 
                width={24} 
                height={24} 
                color={active ? '#00d3f3' : '#ababab'} 
              />
            </View>
            <Text style={[styles.label, active && styles.activeLabel]}>
              {tab.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  navContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'rgba(26, 47, 107, 0.95)',
    borderTopWidth: 1,
    borderTopColor: 'rgba(255,255,255,0.1)',
  },
  tab: {
    alignItems: 'center',
    paddingVertical: 8,
    minWidth: 60,
  },
  centerTab: {
    alignItems: 'center',
    marginTop: -24, // Elevate the center button
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
  activeCircle: {
    backgroundColor: '#2B4A9F',
  },
  centerIconCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#254294',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.2)',
    marginBottom: 4,
    // Shadow for iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    // Elevation for Android
    elevation: 8,
  },
  centerIconCircleActive: {
    backgroundColor: '#00d3f3',
    borderColor: 'transparent',
    // Enhanced glow effect for active state
    shadowColor: '#00d3f3',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 12,
  },
  label: {
    fontSize: 10,
    color: '#ababab',
  },
  activeLabel: {
    color: '#00d3f3',
    fontWeight: '600',
  },
});