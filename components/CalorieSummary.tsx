// components/CalorieSummary.tsx
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button, Text, useTheme } from "@rneui/themed";
import { View } from "react-native";

interface Props {
  consumed: number;
  goal: number;
  onAddMeal: () => void;
}

export default function CalorieSummary({ consumed, goal, onAddMeal }: Props) {
  const { theme } = useTheme();
  const percent = (consumed / goal) * 100;

  return (
    <View style={{
      margin: 20,
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      padding: 20,
      elevation: 2,
    }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
        <View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: theme.colors.primary }}>
            {goal - consumed} kcal
          </Text>
          <Text style={{ color: theme.colors.grey0 }}>Remaining</Text>
        </View>
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#f97316' }}>
            {Math.round(percent)}%
          </Text>
          <Text style={{ fontSize: 12, color: theme.colors.grey0 }}>of goal</Text>
        </View>
      </View>

      <View style={{
        height: 12,
        backgroundColor: theme.colors.grey4,
        borderRadius: 6,
        marginBottom: 15,
        overflow: 'hidden'
      }}>
        <View style={{
          height: '100%',
          width: `${Math.min(percent, 100)}%`,
          backgroundColor: '#f97316'
        }} />
      </View>

      <Button
        title="Add Meal"
        onPress={onAddMeal}
        icon={<MaterialIcons name="add" size={20} color={theme.colors.white} style={{ marginRight: 8 }} />}
        buttonStyle={{
          borderRadius: 10,
          paddingVertical: 12,
          backgroundColor: '#f97316'
        }}
        titleStyle={{
          fontSize: 16,
          fontWeight: '600'
        }}
      />
    </View>
  );
}
