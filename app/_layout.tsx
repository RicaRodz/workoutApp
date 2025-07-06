import theme from "@/theme/themes";
import { ThemeProvider } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AuthProvider } from "../providers/AuthProvider"; // adjust path if needed

export default function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <SafeAreaProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(auth)" />
            <Stack.Screen name="(app)" />
          </Stack>
        </SafeAreaProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
