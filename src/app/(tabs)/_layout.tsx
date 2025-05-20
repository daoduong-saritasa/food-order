import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Tabs, useSegments } from "expo-router";
import Head from "expo-router/head";
import React, { useEffect, useState } from "react";
import { Platform } from "react-native";

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
          name={TABS.query.id}
          options={{
            title: TABS.query.title,
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="magnifyingglass" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name={TABS.socket.id}
          options={{
            title: TABS.socket.title,
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="person.2.fill" color={color} />
            ),
          }}
        />
      </Tabs>
    </>
  );
}
