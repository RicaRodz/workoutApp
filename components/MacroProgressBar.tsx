// components/MacroProgressBar.tsx
import { useTheme } from "@rneui/themed";
import { View } from "react-native";

interface Props {
  percent: number;
  color: string;
}

export default function MacroProgressBar({ percent, color }: Props) {
  const { theme } = useTheme();
  return (
    <View style={{
      height: 10,
      backgroundColor: theme.colors.grey4,
      borderRadius: 5,
      overflow: 'hidden',
      marginTop: 6,
    }}>
      <View style={{
        height: '100%',
        width: `${Math.min(percent, 100)}%`,
        backgroundColor: color,
      }} />
    </View>
  );
}
