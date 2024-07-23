import React from "react";
import { useLocalSearchParams } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";

export default function WorkoutScreen() {
  const { workout, workoutData } = useLocalSearchParams();
  const parsedWorkoutData = JSON.parse(workoutData);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <View style={styles.dropDownBar}>
            <Text></Text>
          </View>

          <Text style={styles.title}>{parsedWorkoutData.workout_name}</Text>
          <Text style={styles.subtitle}>Workout Details</Text>
        </View>

        <View style={styles.infoContainer}>
          <InfoItem
            icon="barbell-outline"
            label="Total Exercises"
            value={Object.keys(parsedWorkoutData.exercises).length}
          />
          <InfoItem
            icon="repeat-outline"
            label="Times Completed"
            value={parsedWorkoutData.times_completed}
          />
          <InfoItem
            icon="fitness-outline"
            label="Total Tonnage"
            value={`${parsedWorkoutData.tonnage} kg`}
          />
          <InfoItem
            icon="calendar-outline"
            label="Workout Days"
            value={parsedWorkoutData.days.join(", ")}
          />
        </View>

        <Text style={styles.sectionTitle}>Exercises</Text>
        {Object.entries(parsedWorkoutData.exercises).map(
          ([exerciseName, details], index) => (
            <View key={index} style={styles.exerciseCard}>
              <Text style={styles.exerciseName}>{exerciseName}</Text>
              <View style={styles.exerciseDetails}>
                <ExerciseDetail
                  icon="repeat"
                  label="Sets"
                  value={details.sets}
                />
                <ExerciseDetail icon="sync" label="Reps" value={details.reps} />
                <ExerciseDetail
                  icon="barbell"
                  label="Weight"
                  value={`${details.weight} kg`}
                />
              </View>
            </View>
          )
        )}

        <TouchableOpacity style={styles.addExerciseButton}>
          <FontAwesome6 name="add" size={24} color="black" />
          <Text style={styles.addExerciseButtonText}>add exercise</Text>
        </TouchableOpacity>
      </ScrollView>

      <TouchableOpacity style={styles.startButton}>
        <Text style={styles.startButtonText}>Start Workout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const InfoItem = ({ icon, label, value }) => (
  <View style={styles.infoItem}>
    <Ionicons name={icon} size={24} color="#FFD700" />
    <View>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text style={styles.infoValue}>{value}</Text>
    </View>
  </View>
);

const ExerciseDetail = ({ icon, label, value }) => (
  <View style={styles.exerciseDetailItem}>
    <Ionicons name={icon} size={16} color="#FFD700" />
    <Text style={styles.exerciseDetailText}>
      {label}: {value}
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  dropDownBar: {
    backgroundColor: "#A9A9A9",
    marginBottom: 20,
    marginHorizontal: 50,
    borderRadius: 10,
    height: 8,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 18,
    color: "#A9A9A9",
  },
  infoContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    width: "48%",
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 14,
    color: "#A9A9A9",
    marginLeft: 10,
  },
  infoValue: {
    fontSize: 16,
    color: "#FFFFFF",
    marginLeft: 10,
    fontWeight: "bold",
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#FFD700",
    marginBottom: 15,
  },
  exerciseCard: {
    backgroundColor: "#2A2A2A",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  exerciseDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exerciseDetailItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  exerciseDetailText: {
    color: "#FFD700",
    marginLeft: 5,
    fontSize: 14,
  },
  startBtn: {
    backgroundColor: "#FFD700",
    borderRadius: 5,
  },
  addExerciseButton: {
    backgroundColor: "#FFD700",
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: "center",
    flexDirection: "row",
    textAlign: "center"
  },
  addExerciseButtonText: {
    color: "#1E1E1E",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  startButton: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#FFD700",
    paddingTop: 10,
    paddingBottom: 30, // Adjust this value for different devices if needed
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  startButtonText: {
    color: "#1E1E1E",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
