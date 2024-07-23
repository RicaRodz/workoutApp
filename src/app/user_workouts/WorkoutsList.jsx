import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { gql } from "graphql-tag";
import { useQuery } from "@tanstack/react-query";
import client from "../../graphqlClient";
import BackButton from "../../components/BackButton";
import WorkoutCard from "../../components/WorkoutCard";



const { height, width } = Dimensions.get("window");

const WorkoutsListQuery = gql`
  query MyQuery {
    workouts {
      documents {
        times_completed
        workout_name
        exercises
        _id
        tonnage
        days
      }
    }
  }
`;

const WorkoutsList = () => {

  const router = useRouter();

  const handlePress = (workout) => {
    router.push({
      pathname: '/user_workouts/[workout]',
      params: { workout: workout._id, workoutData: JSON.stringify(workout) }
    });
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["workouts"],
    queryFn: () => client.request(WorkoutsListQuery),
  });
  
  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;
  
  const workouts = data.workouts.documents;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.headerTitle}>Workouts</Text>
        </View>

        {workouts.map((workout) => (
          <WorkoutCard key={workout._id} workout={workout} onPress={() => handlePress(workout)} />
        ))}
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
    marginHorizontal: 20,
  },
  errorText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
});
