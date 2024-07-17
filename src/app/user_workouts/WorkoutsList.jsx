import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
} from "react-native";
import React from "react";
import BackButton from "../../components/BackButton";

const { height, width } = Dimensions.get("window");

const WorkoutsList = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.headerTitle}>Workouts</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WorkoutsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1E1E1E",
  },
  scrollContent: {
    minHeight: height - 80,
    paddingBottom: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#333232",
  },
  headerTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginHorizontal: 20, // Add margin to separate the title from the button
  },
});
