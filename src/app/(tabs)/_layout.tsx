import { Tabs, useSegments } from "expo-router";
import React, { useEffect, useState } from "react";
import { Platform } from "react-native";

import { ComponentWithHead } from "@/components/ComponentWithHead";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

const TABS = {
  index: {
    title: "Home",
    id: "index",
  },
  explore: {
    title: "Explore",
    id: "explore",
  },
  cart: {
    title: "Cart",
    id: "cart",
  },
  group: {
    title: "Group",
    id: "group",
  },
};

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const segments = useSegments();
  const [title, setTitle] = useState(TABS.index.title);
  // Compute current title based on tab
  useEffect(() => {
    const tab = segments[1] as keyof typeof TABS;
    setTitle(TABS[tab]?.title);
  }, [segments]);

  return (
    <ComponentWithHead title={title}>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name={TABS.index.id}
          options={{
            title: TABS.index.title,
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name={TABS.explore.id}
          options={{
            title: TABS.explore.title,
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name={TABS.cart.id}
          options={{
            title: TABS.cart.title,
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="cart.fill" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name={TABS.group.id}
          options={{
            title: TABS.group.title,
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="person.2.fill" color={color} />
            ),
          }}
        />
      </Tabs>
    </ComponentWithHead>
  );
}
