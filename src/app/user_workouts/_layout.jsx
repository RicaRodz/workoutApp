import { Stack } from "expo-router";

export default function homeLayout() {
  return (
    <Stack>
      <Stack.Screen name="WorkoutsList" options={{ headerShown: false }} />
    </Stack>
  );
}
