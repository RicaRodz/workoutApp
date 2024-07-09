import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import ExerciseListItem from "../../components/ExerciseListItem";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import client from "../../graphqlClient";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import DashboardInfo from "../../components/DashboardInfo";
import { getDate } from "./getDate";

const exercisesQuery = gql`
  query MyQuery($muscle: String, $name: String) {
    exercises(name: $name, muscle: $muscle) {
      muscle
      name
      equipment
    }
  }
`;

export default function workouts() {
  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <ScrollView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Dashbord</Text>

      <DashboardInfo />

      {/* User Workouts */}
      <View style={styles.workouts}>
        {/* User Workouts Title + Show All */}
        <View
          style={{
            flexDirection: "row",
            padding: 15,
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 14, fontWeight: "500", color: "#676968" }}>
            MY WORKOUTS
          </Text>
          <Text style={{ fontSize: 14, fontWeight: "500", color: "royalblue" }}>
            Show All
          </Text>
        </View>

        {/* Workouts Container */}
        <View style={styles.cardContainer}>
          <LinearGradient
            colors={["#2d3799", "#2d2954"]}
            start={[0.02, 0.01]}
            style={styles.card}
          >
            <View
              style={{ alignItems: "flex-start", justifyContent: "flex-start" }}
            >
              <Text style={{ fontSize: 25, fontWeight: "500", color: "white" }}>
                Back & Shoulders
              </Text>
              <Text style={{ color: "lightgray" }}>{currentDate}</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                paddingTop: 40,
                justifyContent: "space-between",
              }}
            >
              <View>
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 25 }}
                >
                  7
                </Text>
                <Text style={{ color: "lightgray" }}>times completed</Text>
              </View>

              <Pressable>
                <LinearGradient
                  colors={["#4459bb", "#35306a"]}
                  start={[0, 0.1]}
                  style={styles.button}
                >
                  <Text style={styles.text2}>START</Text>
                </LinearGradient>
              </Pressable>
            </View>
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    padding: 20,
  },

  workouts: {
    padding: 10,
  },
  cardContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,
    elevation: 9,
  },
  card: {
    marginHorizontal: 10,
    flex: 1,
    borderRadius: 2,
    padding: 25,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  text2: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
