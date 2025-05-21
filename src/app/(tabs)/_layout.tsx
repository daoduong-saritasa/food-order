import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs, useSegments } from "expo-router";
import Head from "expo-router/head";
import { type SymbolViewProps } from "expo-symbols";
import React, { useEffect, useState } from "react";
import { Platform } from "react-native";

const TABS = {
  index: {
    title: "Home",
    id: "index",
    icon: "house.fill" as SymbolViewProps["name"],
  },
  query: {
    title: "Query",
    id: "query",
    icon: "magnifyingglass" as SymbolViewProps["name"],
  },
  socket: {
    title: "Socket",
    id: "socket",
    icon: "person.2.fill" as SymbolViewProps["name"],
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
    <>
      {Platform.OS === "web" && (
        <Head>
          <title>
            Lunch Hub
            {title ? `| ${title}` : ""}
          </title>
        </Head>
      )}
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
        {Object.entries(TABS).map(([key, tab]) => (
          <Tabs.Screen
            key={key}
            name={tab.id}
            options={{
              title: tab.title,
              tabBarIcon: ({ color }) => (
                <IconSymbol size={28} name={tab.icon} color={color} />
              ),
            }}
          />
        ))}
      </Tabs>
    </>
  );
}
