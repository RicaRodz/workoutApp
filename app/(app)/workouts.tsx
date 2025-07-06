import WorkoutDayCard from '@/components/WorkoutDaycard';
import { DaySchedule } from '@/types/types';
import { Text, useTheme } from '@rneui/themed';
import React from 'react';
import { SafeAreaView, ScrollView, View } from 'react-native';

// Weekly workout schedule - customize this data
  const weeklySchedule: DaySchedule[] = [
    {
      day: "Monday",
      dayShort: "MON",
      isRest: false,
      workout: {
        name: "Push Day",
        duration: 45,
        exercises: 6,
        type: "Strength"
      }
    },
    {
      day: "Tuesday",
      dayShort: "TUE",
      isRest: false,
      workout: {
        name: "Cardio Blast",
        duration: 30,
        exercises: 4,
        type: "Cardio"
      }
    },
    {
      day: "Wednesday",
      dayShort: "WED",
      isRest: true
    },
    {
      day: "Thursday",
      dayShort: "THU",
      isRest: false,
      workout: {
        name: "Pull Day",
        duration: 50,
        exercises: 7,
        type: "Strength"
      }
    },
    {
      day: "Friday",
      dayShort: "FRI",
      isRest: false,
      workout: {
        name: "HIIT Circuit",
        duration: 25,
        exercises: 5,
        type: "HIIT"
      }
    },
    {
      day: "Saturday",
      dayShort: "SAT",
      isRest: false,
      workout: {
        name: "Leg Day",
        duration: 60,
        exercises: 8,
        type: "Strength"
      }
    },
    {
      day: "Sunday",
      dayShort: "SUN",
      isRest: true
    }
  ];


const workouts = () => {
  const { theme } = useTheme();

  const handleCreateWorkout = () => {
    console.log("Create new workout pressed");
  };

  const handleDayPress = (day: string) => {
    console.log(`Pressed day: ${day}`);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background, paddingBottom: 65 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 20, paddingBottom: 10 }}>
          <Text style={{ fontSize: 28, fontWeight: "bold", color: theme.colors.textPrimary }}>
            This Week's Workouts
          </Text>
          <Text style={{ fontSize: 16, color: theme.colors.grey0 }}>
            Stay consistent with your fitness goals
          </Text>
        </View>

        <View style={{ paddingHorizontal: 20, paddingBottom: 60 }}>
          {weeklySchedule.map((day) => (
            <WorkoutDayCard
              key={day.day}
              daySchedule={day}
              onPress={() => handleDayPress(day.day)}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
export default workouts