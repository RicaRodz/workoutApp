import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ExerciseListItem from "../../components/ExerciseListItem";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import client from "../../graphqlClient";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

const exercisesQuery = gql`
  query MyQuery($muscle: String, $name: String) {
    exercises(name: $name, muscle: $muscle) {
      muscle
      name
      equipment
    }
  }
`;

function getDate() {
  const date = new Date();
  const day = date.getDate();
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
    'August', 'September', 'October', 'November', 'December']
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayOfWeek = daysOfWeek[date.getDay()];
  const currentMonth = months[date.getMonth()];
  return `${currentDayOfWeek},${currentMonth},${day}`
}

export default function workouts() {

  

  const [currentDate, setCurrentDate] = useState(getDate());

  return (
    <ScrollView style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Dashbord</Text>

      {/* Info */}
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <View style={styles.cell}>
            <View style={styles.info}>
              <Text style={styles.bigNumber}> 25 </Text>
              <Text style={styles.text}> workouts </Text>
              <Text style={styles.text}> completed </Text>
            </View>
          </View>
          <View style={styles.cell}>
            <View style={styles.info}>
              <Text style={styles.bigNumber}>
                {" "}
                103k <Text style={styles.text}> kg </Text>
              </Text>
              <Text style={styles.text}> tonnage </Text>
              <Text style={styles.text}> lifted </Text>
            </View>
          </View>
          <View style={styles.cell}>
            <View style={styles.info}>
              <Text style={styles.bigNumber}>
                {" "}
                70 <Text style={styles.text}> kg </Text>
              </Text>
              <Text style={styles.text}>current</Text>
              <Text style={styles.text}>weight</Text>
            </View>
          </View>
        </View>

        {/* Previous Workout */}
        <Pressable style={styles.row}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              padding: 20,
              borderColor: "gainsboro",
              borderBottomWidth: 1,
            }}
          >
            <View style={styles.prevWorkoutDate}>
              <Text
                style={{ fontSize: 20, color: "white", fontWeight: "bold" }}
              >
                22
              </Text>
              <Text style={{ color: "white", fontWeight: "300" }}>May</Text>
            </View>
            <View style={{ flex: 1, flexDirection: "column" }}>
              <Text style={{ color: "#676968" }}>Previous Workout</Text>
              <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                Quads & Deltoids
              </Text>
              <Text>7 exercises completed</Text>
            </View>
            <View style={{ marginTop: 24 }}>
              <AntDesign name="right" size={16} color="grey" />
            </View>
          </View>
        </Pressable>
      </View>

      {/* User Workouts */}
      <View style={styles.workouts}>

        {/* User Workouts Title + Show All */}
        <View
          style={{
            flexDirection: "row",
            padding: 10,
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
        <LinearGradient
          colors={["#5757bd", "#3a3a7a"]}
          start={[0.02, 0.01]}
          style={styles.cardContainer}
        >
          <View  >
            <Text style={{fontSize: 25, fontWeight: '500', color: 'white'}} > Back & Shoulders </Text>
            <Text style={{color: 'lightgray'}} >{currentDate}</Text>
          </View>

          <View style={{flexDirection: 'row', padding: 20}} >
            <View>
              <Text style={{textAlign: "center"}}>7</Text>
              <Text>times completed</Text>
            </View>
            <Text>Start</Text>
          </View>

        </LinearGradient>
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
  row: {
    flexDirection: "row",
    borderColor: "gainsboro",
  },
  cell: {
    flex: 1,
    flexDirection: "column",
    borderColor: "gainsboro",
    borderWidth: 1,
    textAlign: "center",
  },
  info: {
    margin: 10,
  },
  bigNumber: {
    fontSize: 30,
  },
  text: {
    fontSize: 15,
    color: "#676968",
    fontWeight: "500",
  },
  prevWorkoutDate: {
    backgroundColor: "royalblue",
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 2,
  },
  workouts: {
    padding: 10,
  },
  cardContainer: {
    marginHorizontal: 10,
    flex: 1,
    borderRadius: 2,
    padding: 20,
    shadowColor: "#ff0000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.4,
    shadowRadius: 8,
    elevation: 10,
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 6,
    borderBottomColor: "#ccc",
  },
});
