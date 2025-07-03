import { Button, useTheme, useThemeMode } from "@rneui/themed";
import { StyleSheet, View } from "react-native";

export default function Home() {
  const { mode, setMode } = useThemeMode();
  const { theme } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Button
        title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
        onPress={() => setMode(mode === "light" ? "dark" : "light")}
      />
    </View>
  );
}

// Shared styles for all components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
});
