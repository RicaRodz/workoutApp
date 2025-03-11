// WorkoutDashboard.tsx
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StatusBar,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Types
interface WorkoutSummary {
  totalWorkouts: number;
  totalMinutes: number;
  totalCalories: number;
  currentStreak: number;
}

interface WeeklyProgress {
  day: string;
  minutes: number;
  target: number;
}

interface UpcomingWorkout {
  id: string;
  title: string;
  time: string;
  duration: string;
  type: string;
}

// Mock data
const summaryData: WorkoutSummary = {
  totalWorkouts: 12,
  totalMinutes: 345,
  totalCalories: 2840,
  currentStreak: 5,
};

const weeklyProgressData: WeeklyProgress[] = [
  { day: 'M', minutes: 45, target: 45 },
  { day: 'T', minutes: 30, target: 45 },
  { day: 'W', minutes: 60, target: 45 },
  { day: 'T', minutes: 0, target: 45 },
  { day: 'F', minutes: 0, target: 45 },
  { day: 'S', minutes: 25, target: 30 },
  { day: 'S', minutes: 0, target: 30 },
];

const upcomingWorkouts: UpcomingWorkout[] = [
  {
    id: '1',
    title: 'Morning HIIT',
    time: '07:30 AM',
    duration: '25 min',
    type: 'Cardio',
  },
  {
    id: '2',
    title: 'Upper Body Strength',
    time: '06:00 PM',
    duration: '40 min',
    type: 'Strength',
  },
];

const WorkoutDashboard: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<'week' | 'month' | 'year'>('week');

  // Function to calculate progress bar width
  const getProgressWidth = (value: number, target: number): number => {
    const percentage = Math.min((value / target) * 100, 100);
    return percentage;
  };

  // Render progress bar for weekly progress
  const renderProgressBar = (minutes: number, target: number) => {
    const percentage = getProgressWidth(minutes, target);
    return (
      <View style={styles.progressBarContainer}>
        <View 
          style={[
            styles.progressBar, 
            { 
              width: `${percentage}%`,
              backgroundColor: percentage >= 100 ? '#4CC9F0' : '#4361EE'
            }
          ]} 
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#F8F9FA" />
      
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Dashboard</Text>
          <Text style={styles.headerSubtitle}>Your fitness progress</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-circle" size={40} color="#4361EE" />
        </TouchableOpacity>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Summary Cards */}
        <View style={styles.summaryContainer}>
          <View style={styles.summaryRow}>
            <View style={styles.summaryCard}>
              <View style={styles.summaryIconContainer}>
                <Ionicons name="fitness" size={20} color="#ffffff" />
              </View>
              <View>
                <Text style={styles.summaryValue}>{summaryData.totalWorkouts}</Text>
                <Text style={styles.summaryLabel}>Workouts</Text>
              </View>
            </View>

            <View style={styles.summaryCard}>
              <View style={[styles.summaryIconContainer, { backgroundColor: '#4CC9F0' }]}>
                <Ionicons name="time" size={20} color="#ffffff" />
              </View>
              <View>
                <Text style={styles.summaryValue}>{summaryData.totalMinutes}</Text>
                <Text style={styles.summaryLabel}>Minutes</Text>
              </View>
            </View>
          </View>

          <View style={styles.summaryRow}>
            <View style={styles.summaryCard}>
              <View style={[styles.summaryIconContainer, { backgroundColor: '#F72585' }]}>
                <Ionicons name="flame" size={20} color="#ffffff" />
              </View>
              <View>
                <Text style={styles.summaryValue}>{summaryData.totalCalories}</Text>
                <Text style={styles.summaryLabel}>Calories</Text>
              </View>
            </View>

            <View style={styles.summaryCard}>
              <View style={[styles.summaryIconContainer, { backgroundColor: '#7209B7' }]}>
                <Ionicons name="trophy" size={20} color="#ffffff" />
              </View>
              <View>
                <Text style={styles.summaryValue}>{summaryData.currentStreak}</Text>
                <Text style={styles.summaryLabel}>Day Streak</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Weekly Progress Section */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Activity Progress</Text>
            <View style={styles.periodSelector}>
              <TouchableOpacity 
                style={[styles.periodButton, selectedPeriod === 'week' ? styles.periodButtonActive : null]}
                onPress={() => setSelectedPeriod('week')}
              >
                <Text style={[
                  styles.periodButtonText, 
                  selectedPeriod === 'week' ? styles.periodButtonTextActive : null
                ]}>Week</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.periodButton, selectedPeriod === 'month' ? styles.periodButtonActive : null]}
                onPress={() => setSelectedPeriod('month')}
              >
                <Text style={[
                  styles.periodButtonText, 
                  selectedPeriod === 'month' ? styles.periodButtonTextActive : null
                ]}>Month</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.periodButton, selectedPeriod === 'year' ? styles.periodButtonActive : null]}
                onPress={() => setSelectedPeriod('year')}
              >
                <Text style={[
                  styles.periodButtonText, 
                  selectedPeriod === 'year' ? styles.periodButtonTextActive : null
                ]}>Year</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.weeklyProgressContainer}>
            {weeklyProgressData.map((item, index) => (
              <View key={index} style={styles.dayProgress}>
                <Text style={styles.dayLabel}>{item.day}</Text>
                <View style={styles.dayProgressBarContainer}>
                  {renderProgressBar(item.minutes, item.target)}
                </View>
                <Text style={styles.dayMinutes}>{item.minutes}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Upcoming Workouts */}
        <View style={styles.sectionContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Upcoming Workouts</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>

          {upcomingWorkouts.map((workout) => (
            <View key={workout.id} style={styles.workoutCard}>
              <View style={styles.workoutTimeContainer}>
                <Text style={styles.workoutTime}>{workout.time}</Text>
              </View>
              <View style={styles.workoutDetails}>
                <Text style={styles.workoutTitle}>{workout.title}</Text>
                <View style={styles.workoutMeta}>
                  <Text style={styles.workoutType}>{workout.type}</Text>
                  <Text style={styles.workoutDuration}>
                    <Ionicons name="time-outline" size={12} /> {workout.duration}
                  </Text>
                </View>
              </View>
              <TouchableOpacity style={styles.workoutActionButton}>
                <Ionicons name="chevron-forward" size={20} color="#4361EE" />
              </TouchableOpacity>
            </View>
          ))}

          <TouchableOpacity style={styles.addWorkoutButton}>
            <Ionicons name="add-circle" size={20} color="#ffffff" />
            <Text style={styles.addWorkoutButtonText}>Add Workout</Text>
          </TouchableOpacity>
        </View>

        {/* Goal Progress Section */}
        <View style={[styles.sectionContainer, { marginBottom: 30 }]}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Monthly Goals</Text>
            <TouchableOpacity>
              <Ionicons name="settings-outline" size={20} color="#4361EE" />
            </TouchableOpacity>
          </View>

          <View style={styles.goalCard}>
            <View style={styles.goalInfo}>
              <Text style={styles.goalTitle}>Workout Frequency</Text>
              <Text style={styles.goalStats}>12 / 20 workouts</Text>
            </View>
            <View style={styles.goalProgressContainer}>
              <View style={[styles.goalProgress, { width: '60%' }]} />
            </View>
          </View>

          <View style={styles.goalCard}>
            <View style={styles.goalInfo}>
              <Text style={styles.goalTitle}>Active Minutes</Text>
              <Text style={styles.goalStats}>345 / 600 minutes</Text>
            </View>
            <View style={styles.goalProgressContainer}>
              <View style={[styles.goalProgress, { width: '57.5%', backgroundColor: '#4CC9F0' }]} />
            </View>
          </View>

          <View style={styles.goalCard}>
            <View style={styles.goalInfo}>
              <Text style={styles.goalTitle}>Calories Burned</Text>
              <Text style={styles.goalStats}>2840 / 5000 calories</Text>
            </View>
            <View style={styles.goalProgressContainer}>
              <View style={[styles.goalProgress, { width: '56.8%', backgroundColor: '#F72585' }]} />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#F8F9FA',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#6C757D',
  },
  profileButton: {
    padding: 4,
  },
  summaryContainer: {
    paddingHorizontal: 16,
    marginTop: 10,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    width: '48%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  summaryIconContainer: {
    backgroundColor: '#4361EE',
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#6C757D',
  },
  sectionContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212529',
  },
  periodSelector: {
    flexDirection: 'row',
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
    padding: 2,
  },
  periodButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
  },
  periodButtonActive: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 1,
  },
  periodButtonText: {
    fontSize: 12,
    color: '#6C757D',
  },
  periodButtonTextActive: {
    fontWeight: '600',
    color: '#212529',
  },
  weeklyProgressContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  dayProgress: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  dayLabel: {
    width: 20,
    fontSize: 12,
    fontWeight: '600',
    color: '#6C757D',
  },
  dayProgressBarContainer: {
    flex: 1,
    marginHorizontal: 12,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: '#E9ECEF',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    borderRadius: 4,
  },
  dayMinutes: {
    width: 26,
    fontSize: 12,
    fontWeight: '600',
    color: '#212529',
    textAlign: 'right',
  },
  workoutCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  workoutTimeContainer: {
    backgroundColor: '#F1F3F9',
    borderRadius: 8,
    paddingVertical: 6,
    paddingHorizontal: 10,
    marginRight: 12,
  },
  workoutTime: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4361EE',
  },
  workoutDetails: {
    flex: 1,
  },
  workoutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 4,
  },
  workoutMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  workoutType: {
    fontSize: 12,
    color: '#6C757D',
    marginRight: 12,
  },
  workoutDuration: {
    fontSize: 12,
    color: '#6C757D',
  },
  workoutActionButton: {
    padding: 8,
  },
  addWorkoutButton: {
    backgroundColor: '#4361EE',
    borderRadius: 12,
    paddingVertical: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  addWorkoutButtonText: {
    color: '#FFFFFF',
    fontWeight: '600',
    marginLeft: 8,
  },
  seeAllText: {
    fontSize: 14,
    color: '#4361EE',
  },
  goalCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3.84,
    elevation: 2,
  },
  goalInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  goalTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#212529',
  },
  goalStats: {
    fontSize: 12,
    color: '#6C757D',
  },
  goalProgressContainer: {
    height: 8,
    backgroundColor: '#E9ECEF',
    borderRadius: 4,
    overflow: 'hidden',
  },
  goalProgress: {
    height: '100%',
    backgroundColor: '#4361EE',
    borderRadius: 4,
  },
});

export default WorkoutDashboard;