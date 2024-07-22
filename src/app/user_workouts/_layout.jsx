import { Stack } from "expo-router";

export default function homeLayout() {
  return (
    <Stack>
      <Stack.Screen name="WorkoutsList" options={{ headerShown: false }} />
      <Stack.Screen name="[workout]" options={{ headerShown: false, presentation: 'modal' }} />
      <Stack.Screen name="test" options={{ headerShown: false, presentation: 'card' }} />
    </Stack>
  );
}
