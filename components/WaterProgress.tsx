// components/WaterProgress.tsx
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Button, Text, useTheme } from "@rneui/themed";
import { View } from "react-native";

interface Props {
  currentIntake: number;
  dailyGoal: number;
  onAddWater: () => void;
}

export default function WaterProgress({ currentIntake, dailyGoal, onAddWater }: Props) {
  const { theme } = useTheme();
  const progress = (currentIntake / dailyGoal) * 100;

  return (
    <View style={{
      margin: 20,
      backgroundColor: theme.colors.surface,
      borderRadius: 16,
      padding: 20,
      elevation: 3,
    }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 }}>
        <View>
          <Text style={{ fontSize: 32, fontWeight: 'bold', color: theme.colors.primary }}>
            {currentIntake}ml
          </Text>
          <Text style={{ fontSize: 16, color: theme.colors.grey0 }}>
            of {dailyGoal}ml goal
          </Text>
        </View>
        <View>
          <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#3498db' }}>
            {Math.round(progress)}%
          </Text>
          <Text style={{ fontSize: 12, color: theme.colors.grey0 }}>Complete</Text>
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
          width: `${Math.min(progress, 100)}%`,
          backgroundColor: '#3498db'
        }} />
      </View>

      <Button
        title="Add Water"
        onPress={onAddWater}
        buttonStyle={{
          backgroundColor: '#3498db',
          borderRadius: 10,
          paddingVertical: 12,
        }}
        titleStyle={{ fontSize: 16, fontWeight: '600' }}
        icon={<MaterialIcons name="add" size={20} color={theme.colors.white} style={{ marginRight: 8 }} />}
      />
    </View>
  );
}
