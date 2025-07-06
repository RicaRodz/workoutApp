// components/RestDay.tsx
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, useTheme } from "@rneui/themed";
import { View } from "react-native";

export default function RestDay() {
  const { theme } = useTheme();

  return (
    <View style={{ alignItems: "center", paddingVertical: 10 }}>
      <MaterialIcons name="hotel" size={24} color={theme.colors.grey1} style={{ marginBottom: 5 }} />
      <Text style={{ fontSize: 16, fontWeight: "600", color: theme.colors.grey1, textAlign: "center" }}>
        REST
      </Text>
    </View>
  );
}
