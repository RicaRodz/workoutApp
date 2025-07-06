// components/MacroSummary.tsx
import { Text, useTheme } from "@rneui/themed";
import { View } from "react-native";
import MacroProgressBar from "./MacroProgressBar";

interface Props {
  label: string;
  consumed: number;
  goal: number;
  color: string;
}

export default function MacroSummary({ label, consumed, goal, color }: Props) {
  const { theme } = useTheme();
  const percent = (consumed / goal) * 100;

  return (
    <View style={{ marginBottom: 15 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ fontWeight: '600', color: theme.colors.textPrimary }}>{label}</Text>
        <Text style={{ color: theme.colors.grey0 }}>{consumed}g / {goal}g</Text>
      </View>
      <MacroProgressBar percent={percent} color={color} />
    </View>
  );
}
