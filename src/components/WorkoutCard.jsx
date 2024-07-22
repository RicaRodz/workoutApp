// WorkoutCard.js
import React, { useState } from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install expo vector icons
import { useRouter } from "expo-router";

const WorkoutCard = ({ workout }) => {
  
  const router = useRouter();

  const handlePress = () => {
    // setModalVisible(true);
    return router.push('/user_workouts/[workout]]');
  };

  const exerciseCount = Object.keys(workout.exercises).length;

  return (
    <>
      <TouchableOpacity onPress={handlePress} style={styles.card}>
        <View style={styles.content}>
          <Text style={styles.title}>{workout.workout_name}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoItem}>
              <Ionicons name="barbell-outline" size={18} color="#FFD700" />
              <Text style={styles.infoText}>
                {exerciseCount} {exerciseCount === 1 ? "Exercise" : "Exercises"}
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Ionicons name="repeat-outline" size={18} color="#FFD700" />
              <Text style={styles.infoText}>
                {workout.times_completed}{" "}
                {workout.times_completed === 1 ? "time" : "times"}
              </Text>
            </View>
          </View>
        </View>
        <Ionicons name="chevron-forward-outline" size={24} color="#FFD700" />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#2A2A2A",
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 10,
  },
  infoContainer: {},
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  infoText: {
    fontSize: 15,
    color: "#FFD700",
    marginLeft: 5,
  },
});

export default WorkoutCard;
