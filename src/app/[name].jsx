import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import client from "../graphqlClient";
import NewSetInput from "../components/newSetInput";
import SetsList from "../components/SetsList";


const exerciseQuery = gql`
  query exercises($name: String) {
  exercises(name: $name) {
    equipment
    instructions
    name
    muscle
  }
}
`;


export default function ExerciseDetailsScreen() {
  
  const { name } = useLocalSearchParams();
  
  const {data, isLoading, error} = useQuery({
    queryKey: ['exercises',name],
    queryFn: () => client.request(exerciseQuery, { name }),
  });


  const [isExpandInstructions, setIsExpandInstructions] = useState(false);

  if (isLoading){
    return <ActivityIndicator/>;
  }

  if (error) {
    return <Text>Failed to fetch data.</Text>
  }

  const exercise = data.exercises[0];


  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: exercise.name }} />

      <View style={styles.panel}>
        <Text style={styles.exerciseName}>{exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subVal}>{exercise.muscle}</Text> |{" "}
          <Text style={styles.subVal}>{exercise.equipment}</Text>
        </Text>
      </View>

      <View style={styles.panel}>
        <Text
          style={styles.instructions}
          numberOfLines={isExpandInstructions ? 0 : 3}
        >
          {exercise.instructions}
        </Text>
        <Text
          onPress={() => setIsExpandInstructions(!isExpandInstructions)}
          style={styles.seeMore}
        >
          {isExpandInstructions ? 'See Less' : 'See More'}
        </Text>
      </View>

      <NewSetInput />
      <SetsList/>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },

  exerciseName: {
    fontSize: 20,
    fontWeight: 500,
    textTransform: "capitalize",
  },

  exerciseSubtitle: {
    color: "dimgray",
  },

  subVal: {
    textTransform: "capitalize",
  },

  instructions: {
    fontSize: 16,
    lineHeight: 22,
  },

  panel: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },

  seeMore: {
    alignSelf: "center",
    padding: 10,
    fontWeight: "600",
    color: "gray",
  },
});
