import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Link, useRouter } from "expo-router";
import { gql } from 'graphql-tag';
import { useQuery } from "@tanstack/react-query";
import client from "../../graphqlClient";
import BackButton from "../../components/BackButton";
import WorkoutCard from "../../components/WorkoutCard";
import { useNavigation } from "@react-navigation/native";


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

  const navigation = useNavigation();

  const { data, isLoading, error } = useQuery({
    queryKey: ['workouts'],
    queryFn: () => client.request(WorkoutsListQuery),
  });

  if (isLoading) {
    return <ActivityIndicator size="large" color="#FFFFFF" />;
  }

  if (error) {
    return <Text style={styles.errorText}>Failed to fetch data.</Text>;
  }

  const workouts = data.workouts.documents;

  const router = useRouter();

  const handleWorkoutPress = (workout) => {
    navigation.navigate('/user_workouts/[workout]', { id: workout._id, workoutData: workout });
    // return router.push('/user_workouts/[workout]', { id: workout._id, workoutData: workout });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.headerTitle}>Workouts</Text>
        </View>
        
        {workouts.map((workout) => (
          <TouchableOpacity 
            key={workout._id} 
            onPress={() => handleWorkoutPress(workout)}
          >
            <WorkoutCard workout={workout} />
          </TouchableOpacity>
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
    textAlign: 'center',
    marginTop: 20,
  },
});