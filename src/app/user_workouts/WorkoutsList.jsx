import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
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
      pathname: "/user_workouts/[workout]",
      params: { workout: workout._id, workoutData: JSON.stringify(workout) },
    });
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["workouts"],
    queryFn: () => client.request(WorkoutsListQuery),
  });

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  const workouts = data.workouts.documents;

  const NoWorkoutsView = () => (
    <View style={styles.noWorkoutsContainer}>
      <Text style={styles.noWorkoutsText}>You haven't created any workouts yet</Text>
      <Text style={styles.noWorkoutsSubText}>Get started by creating your first workout!</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.headerTitle}>Workouts</Text>
        </View>

        {workouts.length === 0 ? (
          <NoWorkoutsView />
        ) : (
          workouts.map((workout) => (
            <WorkoutCard
              key={workout._id}
              workout={workout}
              onPress={() => handlePress(workout)}
            />
          ))
        )}

        <TouchableOpacity style={styles.createWorkoutButton}>
          <Text style={styles.createWorkoutButtonText}>
            {workouts.length === 0 ? "Create Your First Workout" : "Create New Workout"}
          </Text>
        </TouchableOpacity>
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
  createWorkoutButton: {
    backgroundColor: "#FFD700",
    borderRadius: 20,
    paddingVertical: 10,
    margin: 20,
    alignItems: "center",
  },
  createWorkoutButtonText: {
    color: "#1E1E1E",
    fontSize: 16,
    fontWeight: "bold",
  },
  noWorkoutsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    marginHorizontal: 5,
  },
  noWorkoutsText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFD700',
    textAlign: 'center',
    marginBottom: 10,
  },
  noWorkoutsSubText: {
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 30,
  },
  createWorkoutButton: {
    backgroundColor: "#FFD700",
    borderRadius: 20,
    paddingVertical: 15,
    margin: 20,
    alignItems: "center",
  },
  createWorkoutButtonText: {
    color: "#1E1E1E",
    fontSize: 18,
    fontWeight: "bold",
  },
});

