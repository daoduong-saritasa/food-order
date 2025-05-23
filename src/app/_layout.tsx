import {
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "../../global.css";
import QueryProviders from "./provider";
import { SafeAreaView } from 'react-native';
import { StyleSheet } from 'react-native';

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <QueryProviders>
        <SafeAreaView style={styles.container}>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="suppliers/[id]"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="+not-found" options={{ title: "Not Found" }} />
          </Stack>
          <StatusBar style="auto" />
        </SafeAreaView>
      </QueryProviders>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});