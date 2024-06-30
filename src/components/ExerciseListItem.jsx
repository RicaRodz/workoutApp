import { StyleSheet, Text, View, Pressable } from "react-native";
import { Link } from "expo-router";

export default function ExerciseListItem({ item }) {
  return (
    <Link href={`/${item.name}`} asChild >
      <Pressable style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subVal}>{item.muscle}</Text> |{" "}
          <Text style={styles.subVal}>{item.equipment}</Text>
        </Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    gap: 5,
    marginHorizontal: 2,

    //shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1,
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
});
