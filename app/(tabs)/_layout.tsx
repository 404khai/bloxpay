import { Tabs } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import type { GestureResponderEvent } from 'react-native';

type HexagonButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
};

function HexagonButton({ onPress }: HexagonButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.centerButtonContainer}>
      <View style={styles.glow} />
      <View style={styles.hexagon}>
        <Ionicons name="flash" size={24} color="#fff" />
      </View>
    </TouchableOpacity>
  );
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#16161d',
          borderTopWidth: 0,
          elevation: 0,
          height: 70,
        },
        tabBarActiveTintColor: '#8B5CF6',
        tabBarInactiveTintColor: '#A0A0A0',
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <Ionicons name="home-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="watchlist"
        options={{
          title: 'Watchlist',
          tabBarIcon: ({ color }) => (
            <Ionicons name="bookmark-outline" size={24} color={color} />
          ),
        }}
      />
      {/* The central hexagon button */}
      <Tabs.Screen
        name="action"
        options={{
          tabBarLabel: '',
          tabBarButton: (props) => <HexagonButton {...props} />,
        }}
      />
      <Tabs.Screen
        name="news"
        options={{
          title: 'News',
          tabBarIcon: ({ color }) => (
            <Ionicons name="newspaper-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color }) => (
            <Ionicons name="settings-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  centerButtonContainer: {
    top: -30, // pull the button up like in the screenshot
    alignItems: 'center',
    justifyContent: 'center',
  },
  glow: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#8B5CF6',
    opacity: 0.3,
    shadowColor: '#8B5CF6',
    shadowOpacity: 0.8,
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 20,
    ...Platform.select({
      android: {
        elevation: 15,
      },
    }),
  },
  hexagon: {
    width: 70,
    height: 70,
    backgroundColor: '#8B5CF6',
    justifyContent: 'center',
    alignItems: 'center',
    clipPath: 'polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)', // works on web
    borderRadius: 12, // fallback rounding for native
  },
});
