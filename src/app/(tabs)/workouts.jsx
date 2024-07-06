import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
} from "react-native";

import ExerciseListItem from "../../components/ExerciseListItem";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import client from "../../graphqlClient";

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
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Workouts</Text>
      </View>

      <View style={styles.workoutsInfoContainer}>

        <View style={styles.Info}>
            <View style={styles.cell} >
                <Text style={styles.number} > 25 </Text>
                <Text style={styles.text}> Workouts Completed </Text>
            </View>
            <View style={styles.cell} >
                <Text style={styles.number} > 25 </Text>
                <Text style={styles.text}> Workouts Completed </Text>
            </View>
            <View style={styles.cell} >
                <Text style={styles.number} > 25 </Text>
                <Text style={styles.text}> Workouts Completed </Text>
            </View>
          
        </View>

        <Pressable>
            <Text> Previous Workout</Text>
        </Pressable>
      </View>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    paddingTop: 80,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    padding: 20,
  },
  workoutsInfoContainer: {
    borderColor: "gainsboro",
    borderWidth: 1,
  },
  Info: {
    flexDirection: "row",
   
  },
  cell:{
    flex: 1,
    flexDirection: "column",
    borderColor: "gainsboro",
    borderWidth: 1,
  },
  number: {
    fontSize: 35,
    fontWeight: "500",
  },
  text:{
    fontSize: 15,
    color: "grey",
  },

});
