import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
} from "react-native";
import exercises from "../../assets/data/exercises.json";
import ExerciseListItem from "../components/ExerciseListItem";
import { useQuery } from "@tanstack/react-query";
import { gql } from "graphql-request";
import client from "../graphqlClient";


const exercisesQuery = gql`
  query MyQuery($muscle: String, $name: String) {
    exercises(name: $name, muscle: $muscle) {
      muscle
      name
      equipment
    }
  }
`;

export default function ExercisesScreen() {

  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises"],
    queryFn: () => client.request( exercisesQuery ),
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    console.log(error);
    return <Text>Failed to fetch data.</Text>;
  }

  console.log(data);
  return (
    <View style={styles.container}>
      <FlatList
        data={data.exercises}
        contentContainerStyle={{ gap: 5 }}
        keyExtractor={(item, index) => item.name + index}
        renderItem={({ item }) => <ExerciseListItem item={item} />}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
});
