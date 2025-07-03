import theme from "@/theme/themes";
import { ThemeProvider } from "@rneui/themed";
import { Stack } from "expo-router";
import React from "react";
import "react-native-reanimated";
import { AuthProvider } from "../providers/AuthProvider"; // adjust path if needed

export default function RootLayout() {

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
         <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(auth)" />
          <Stack.Screen name="(app)" />
        </Stack>
      </AuthProvider>
    </ThemeProvider>
  );
}
