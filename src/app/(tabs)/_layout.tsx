import { Colors } from "@/shared/constants/colors";
import { useThemeColor } from '@/shared/hooks/useThemeColor';
import { MaterialIcons } from '@expo/vector-icons';
import { Tabs } from "expo-router";
import React, { type ComponentProps } from "react";

type MaterialIconName = ComponentProps<typeof MaterialIcons>['name'];

type Tab = {
  readonly title: string;
  readonly id: string;
  readonly icon: MaterialIconName;
}

const TABS: Tab[] = [
  {
    title: "Home",
    id: "index",
    icon: "home",
  },
  {
    title: "Query",
    id: "query",
    icon: "search",
  },
  {
    title: "Socket",
    id: "socket",
    icon: "group",
  },
];

export default function TabLayout() {
  const tabBarActiveTintColor = useThemeColor({ light: Colors.light.tint, dark: Colors.dark.tint }, "tint");

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor,
        headerShown: false,
      }}
    >
      {TABS.map(tab => (
        <Tabs.Screen
          key={tab.id}
          name={tab.id}
          options={{
            title: tab.title,
            tabBarIcon: ({ color }) => (
              <MaterialIcons size={28} name={tab.icon} color={color} />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
