import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome6 } from "@expo/vector-icons";
import { useRouter } from 'expo-router';

const { height, width } = Dimensions.get('window');

const Dashboard = () => {

  const router = useRouter();

  function seeWorkouts() {
    return router.push('/user_workouts/WorkoutsList');
  }


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Fitness Dashboard</Text>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Ionicons name="fitness-outline" size={30} color="#FFD700" />
            <Text style={styles.statValue}>25</Text>
            <Text style={styles.statLabel}>workouts</Text>
          </View>
          <View style={styles.statCard}>
          <MaterialCommunityIcons name="weight-lifter" size={24} color="#FFD700" />
            <Text style={styles.statValue}>70 kg</Text>
            <Text style={styles.statLabel}>tonnage lifted</Text>
          </View>
        </View>

        <View style={styles.previousWorkoutCard}>
          <Text style={styles.cardTitle}>Previous Workout</Text>
          <View style={styles.previousWorkoutContent}>
            <View style={styles.dateBox}>
              <Text style={styles.dateNumber}>22</Text>
              <Text style={styles.dateMonth}>May</Text>
            </View>
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutInfoTitle}>Quads & Deltoids</Text>
              <Text style={styles.workoutInfoDetails}>7 exercises completed</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.detailsButton}>
            <Text style={styles.detailsButtonText}>View Details</Text>
            <Ionicons name="arrow-forward" size={20} color="#FFD700" />
          </TouchableOpacity>
        </View>

        <View style={styles.upcomingWorkoutCard}>
          <Text style={styles.cardTitle}>Next Workout</Text>
          <Text style={styles.upcomingWorkoutTitle}>Upper Body</Text>
          <Text style={styles.upcomingWorkoutDate}>Tomorrow, 9:00 AM</Text>
          <TouchableOpacity style={styles.startButton}>
            <Text style={styles.startButtonText}>Start Workout</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={seeWorkouts} style={styles.seeWorkoutsButton}>
        <FontAwesome6 name="dumbbell" size={24} color="black" />
          <Text style={styles.seeWorkoutsButtonText}>See Workouts</Text>
        </TouchableOpacity>
      </ScrollView>

  
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  scrollContent: {
    minHeight: height - 80,
    paddingBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 10,
    textAlign: "left"
  },
  headerTitle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    paddingHorizontal: 20,
  },
  statCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: 15,
    padding: 15,
    alignItems: 'center',
    width: '48%',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 10,
  },
  statLabel: {
    fontSize: 14,
    color: '#CCCCCC',
    marginTop: 5,
  },
  previousWorkoutCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 15,
  },
  previousWorkoutContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dateBox: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginRight: 15,
  },
  dateNumber: {
    color: '#1E1E1E',
    fontSize: 18,
    fontWeight: 'bold',
  },
  dateMonth: {
    color: '#1E1E1E',
    fontSize: 14,
  },
  workoutInfo: {
    flex: 1,
  },
  workoutInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  workoutInfoDetails: {
    fontSize: 14,
    color: '#CCCCCC',
    marginTop: 5,
  },
  detailsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginTop: 15,
  },
  detailsButtonText: {
    color: '#FFD700',
    marginRight: 5,
  },
  upcomingWorkoutCard: {
    backgroundColor: '#2A2A2A',
    borderRadius: 15,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  upcomingWorkoutTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  upcomingWorkoutDate: {
    fontSize: 14,
    color: '#CCCCCC',
    marginBottom: 15,
  },
  startButton: {
    backgroundColor: '#FFD700',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#1E1E1E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  seeWorkoutsButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFD700',
    borderRadius: 25,
    paddingVertical: 12,
    marginHorizontal: 20,
  },
  seeWorkoutsButtonText: {
    color: '#1E1E1E',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});

