// components/WorkoutInfo.tsx
import { WorkoutData } from "@/types/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, useTheme } from "@rneui/themed";
import { View } from "react-native";

export default function WorkoutInfo({ workout }: { workout: WorkoutData }) {
  const { theme } = useTheme();

  const getWorkoutTypeColor = (type: string): string => {
    switch (type) {
      case "Strength":
        return "#e74c3c";
      case "Cardio":
        return "#3498db";
      case "HIIT":
        return "#f39c12";
      default:
        return theme.colors.primary;
    }
  };

  return (
    <View>
      <Text style={{ fontSize: 18, fontWeight: "bold", color: theme.colors.textPrimary, marginBottom: 5 }}>
        {workout.name}
      </Text>

      <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 8 }}>
        <MaterialIcons name="access-time" size={16} color={theme.colors.grey0} style={{ marginRight: 5 }} />
        <Text style={{ fontSize: 14, color: theme.colors.grey0, marginRight: 15 }}>
          {workout.duration} min
        </Text>

        <MaterialIcons name="fitness-center" size={16} color={theme.colors.grey0} style={{ marginRight: 5 }} />
        <Text style={{ fontSize: 14, color: theme.colors.grey0 }}>{workout.exercises} exercises</Text>
      </View>

      <View
        style={{
          alignSelf: "flex-start",
          backgroundColor: getWorkoutTypeColor(workout.type) + "20",
          paddingHorizontal: 12,
          paddingVertical: 4,
          borderRadius: 12,
        }}
      >
        <Text style={{ fontSize: 12, fontWeight: "600", color: getWorkoutTypeColor(workout.type) }}>
          {workout.type.toUpperCase()}
        </Text>
      </View>
    </View>
  );
}
