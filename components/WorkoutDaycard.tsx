// components/WorkoutDayCard.tsx
import { DaySchedule } from "@/types/types";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, useTheme } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";
import RestDay from "./Restday";
import WorkoutInfo from "./WorkoutInfo";

interface Props {
  daySchedule: DaySchedule;
  onPress: () => void;
}

export default function WorkoutDayCard({ daySchedule, onPress }: Props) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: daySchedule.isRest ? theme.colors.grey4 : theme.colors.surface,
        borderRadius: 16,
        marginBottom: 12,
        padding: 20,
        flexDirection: "row",
        alignItems: "center",
        elevation: daySchedule.isRest ? 0 : 2,
      }}
      onPress={onPress}
      disabled={daySchedule.isRest}
    >
      <View style={{ width: 80, alignItems: "center", paddingRight: 20 }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            color: daySchedule.isRest ? theme.colors.grey1 : theme.colors.textPrimary,
          }}
        >
          {daySchedule.dayShort}
        </Text>
      </View>

      <View style={{ flex: 1 }}>
        {daySchedule.isRest ? (
          <RestDay />
        ) : (
          <WorkoutInfo workout={daySchedule.workout!} />
        )}
      </View>

      {!daySchedule.isRest && (
        <MaterialIcons name="chevron-right" size={24} color={theme.colors.grey0} />
      )}
    </TouchableOpacity>
  );
}
