import { View, StyleSheet, SafeAreaView, Text } from "react-native";
import colors from "../theme/styles";
import { WorkoutCard } from "../components/WorkoutCard";

export default function WorkoutsDashbord() {
  return (
    <SafeAreaView style={styles.container}>
      
      {/* Page Header */}
      <View style={styles.headerContainer}>
        <Text style={styles.pageTitle} > Workouts</Text>
      </View>

      {/* Workout Card */}
      <WorkoutCard
        title="Leg Day"
        day="MONDAY"
        time="9:00 AM"
        exerciseCount="8"
        targetMuscles="Quads, Hamstrings, Glutes"
      />
      <WorkoutCard
        title=""
        day="TUSDAY"
        time=""
        exerciseCount=""
        targetMuscles=""
        rest={true}
      />


    </SafeAreaView>
  );
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
  headerContainer: {
    width: '100%',
    paddingHorizontal: 20,
    paddingTop: 15,
    marginBottom: 15,
    borderBottomWidth: 2,
    borderBottomColor: colors.gold,
  },
  pageTitle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.White,
  },


});
