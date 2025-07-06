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

// Theme colors (extends React Native Elements theme)
export interface CustomTheme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    white: string;
    grey0: string;
    grey1: string;
    grey2: string;
    grey3: string;
    grey4: string;
  };
}