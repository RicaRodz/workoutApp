// components/WaterScheduleList.tsx
import { Text, useTheme } from "@rneui/themed";
import { View } from "react-native";
import { WaterSchedule } from "../types/types";
import WaterScheduleItem from "./WaterScheduleItem";

interface Props {
  schedules: WaterSchedule[];
  currentTime: string;
  onPressSchedule: (s: WaterSchedule) => void;
  onToggleReminder: (id: string) => void;
}

export default function WaterScheduleList({ schedules, currentTime, onPressSchedule, onToggleReminder }: Props) {
  const { theme } = useTheme();

  const getStatus = (schedule: WaterSchedule): "completed" | "current" | "upcoming" => {
    if (schedule.isCompleted) return "completed";
    const currentIndex = schedules.findIndex(s => s.id === "4");
    const thisIndex = schedules.findIndex(s => s.id === schedule.id);
    return thisIndex === currentIndex ? "current" : "upcoming";
  };

  return (
    <View style={{ paddingHorizontal: 20, paddingBottom: 100 }}>
      <Text style={{
        fontSize: 20,
        fontWeight: 'bold',
        color: theme.colors.textPrimary,
        marginBottom: 15,
      }}>Today's Schedule</Text>

      <Text style={{
        fontSize: 14,
        color: theme.colors.grey0,
        marginBottom: 15,
      }}>Current time: {currentTime}</Text>

      {schedules.map((s) => (
        <WaterScheduleItem
          key={s.id}
          schedule={s}
          status={getStatus(s)}
          onPress={() => onPressSchedule(s)}
          onToggleReminder={() => onToggleReminder(s.id)}
        />
      ))}
    </View>
  );
}
