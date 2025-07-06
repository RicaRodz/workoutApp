
import { Text, useTheme } from "@rneui/themed";
import { SafeAreaView, ScrollView } from "react-native";
import WaterProgress from "../../components/WaterProgress";
import WaterScheduleList from "../../components/WaterScheduleList";
import { WaterSchedule } from "../../types/types";

export default function water() {
  const { theme } = useTheme();

  const dailyGoal = 2000;
  const currentIntake = 1000;
  const currentTime = "2:30 PM";

    // Water schedule throughout the day
  const waterSchedule: WaterSchedule[] = [
    {
      id: "1",
      time: "8:00 AM",
      amount: 250,
      reminderEnabled: true,
      isCompleted: true
    },
    {
      id: "2",
      time: "10:00 AM",
      amount: 200,
      reminderEnabled: true,
      isCompleted: true
    },
    {
      id: "3",
      time: "12:00 PM",
      amount: 300,
      reminderEnabled: true,
      isCompleted: true
    },
    {
      id: "4",
      time: "2:00 PM",
      amount: 250,
      reminderEnabled: false,
      isCompleted: false // Current/upcoming
    },
    {
      id: "5",
      time: "4:00 PM",
      amount: 200,
      reminderEnabled: true,
      isCompleted: false
    },
    {
      id: "6",
      time: "6:00 PM",
      amount: 300,
      reminderEnabled: true,
      isCompleted: false
    },
    {
      id: "7",
      time: "8:00 PM",
      amount: 250,
      reminderEnabled: false,
      isCompleted: false
    },
    {
      id: "8",
      time: "10:00 PM",
      amount: 250,
      reminderEnabled: true,
      isCompleted: false
    }
  ];

  const handleAddWater = () => console.log("Add water");
  const handleSchedulePress = (s: WaterSchedule) => console.log("Pressed", s.time);
  const handleReminderToggle = (id: string) => console.log("Toggle reminder", id);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{
          padding: 20,
          paddingBottom: 10,
          fontSize: 28,
          fontWeight: "bold",
          color: theme.colors.textPrimary
        }}>
          Water Intake
        </Text>

        <WaterProgress
          currentIntake={currentIntake}
          dailyGoal={dailyGoal}
          onAddWater={handleAddWater}
        />

        <WaterScheduleList
          schedules={waterSchedule}
          currentTime={currentTime}
          onPressSchedule={handleSchedulePress}
          onToggleReminder={handleReminderToggle}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
