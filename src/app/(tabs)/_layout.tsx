import { Colors } from "@/shared/constants/colors";
import { useThemeColor } from '@/shared/hooks/useThemeColor';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import React from "react";
const TABS = {
  index: {
    title: "Home",
    id: "index",
  },
  query: {
    title: "Query",
    id: "query",
  },
  socket: {
    title: "Socket",
    id: "socket",
  },
};

export default function TabLayout() {
  const tabBarActiveTintColor = useThemeColor({ light: Colors.light.tint, dark: Colors.dark.tint }, "tint");

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name={TABS.index.id}
        options={{
          title: TABS.index.title,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="home" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={TABS.query.id}
        options={{
          title: TABS.query.title,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="search" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name={TABS.socket.id}
        options={{
          title: TABS.socket.title,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="group" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
