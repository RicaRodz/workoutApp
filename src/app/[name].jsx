import { View, Text, ScrollView } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import exercises from "../../assets/data/exercises.json";
import { StyleSheet } from "react-native";
import { useState } from "react";

export default function ExerciseDetailsScreen() {
  const params = useLocalSearchParams();

  const [isExpandInstructions, setIsExpandInstructions] = useState(false);

  const exercise = exercises.find((item) => item.name === params.name);
  if (!exercise) {
    return <Text> Exercise not found</Text>;
  }

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
