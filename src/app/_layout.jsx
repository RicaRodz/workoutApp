import { Stack, Slot, Tabs } from "expo-router";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const client = new QueryClient();

export default function RootLayout() {
  return (
    <QueryClientProvider client={client} >
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </QueryClientProvider>
  );
}
