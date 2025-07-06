// types.ts - TypeScript type definitions for your fitness app

import MaterialIcons from "@expo/vector-icons/MaterialIcons";

// Fitness data structure
export interface FitnessData {
  current: number;
  target: number;
  unit: string;
}

// Complete fitness stats for the home screen
export interface MyFitnessData {
  water: FitnessData;
  weight: FitnessData;
  calories: FitnessData;
  steps: FitnessData;
}

// Calendar day data
export interface DayData {
  day: string;
  date: number;
  isToday: boolean;
}

// Props for FitnessCard component
export interface FitnessCardProps {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  data: FitnessData;
  color: string;
}

// Navigation types (for when you add navigation)
export type RootStackParamList = {
  Home: undefined;
  WaterIntake: undefined;
  WeightLifted: undefined;
  CaloriesLeft: undefined;
  Steps: undefined;
  Workout: undefined;
  FoodLog: undefined;
};

export interface WorkoutData {
  name: string;
  duration: number;
  exercises: number;
  type: string;
}

export interface DaySchedule {
  day: string;
  dayShort: string;
  isRest: boolean;
  workout?: WorkoutData;
}

export interface WaterSchedule {
  id: string;
  time: string;
  amount: number; // in ml
  reminderEnabled: boolean;
  isCompleted: boolean;
}