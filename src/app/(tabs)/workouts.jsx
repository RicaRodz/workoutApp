import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  Pressable,
  ScrollView,
} from "react-native";
import { AntDesign } from '@expo/vector-icons';
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
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Dashbords</Text>

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
            <View style={{flex: 1, flexDirection: 'column'}} >
              <Text style={{color: "grey"}}>Previous Workout</Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>Quads & Deltoids</Text>
              <Text >7 exercises completed</Text>
            </View>
            <View style={{marginTop: 24}}>
              <AntDesign name="right" size={16} color="grey" />
            </View>
          </View>
        </Pressable>
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
  infoContainer: {},
  row: {
    flex: 1,
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
    color: "dimgray",
  },

  prevWorkoutDate: {
    backgroundColor: "royalblue",
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 2,
  },
});
