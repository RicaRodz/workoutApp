import { View, Text, StyleSheet } from "react-native";
import colors from "../theme/styles";


export interface WorkoutCardProps {
  title: string;
  day: string;
  time?: string;
  exerciseCount: string;
  targetMuscles: string;
  rest?: boolean;
}

export const WorkoutCard: React.FC<WorkoutCardProps> = ({ title, day, time, exerciseCount, targetMuscles, rest }) => {
  return (
    <View style={styles.workoutCard}>
      <View style={styles.dateIndicator}>
        <Text style={styles.dateText}>{day}</Text>
      </View>

      <View style={styles.workoutDetails}>
        {rest ? (
          <Text style={styles.restText}>REST</Text>
        ) : (
          <>
            <Text style={styles.workoutTitle}>{title}</Text>
            <Text style={styles.workoutSubtitle}>
              {exerciseCount} exercises · {targetMuscles}
            </Text>
            {time && <Text style={styles.workoutTime}>{time}</Text>}

            <View style={styles.cardFooter}>
              <Text style={styles.viewDetails}>View Details</Text>
              <Text style={styles.arrowIcon}>→</Text>
            </View>
          </>
        )}
      </View>
    </View>
  );
};


export const styles = StyleSheet.create({

  // workout card styles
  workoutCard: {
    backgroundColor: colors.darkGrey,
    borderRadius: 12,
    marginHorizontal: 20,
    marginVertical: 10,
    overflow: 'hidden',
    flexDirection: 'row',
  },
  dateIndicator: {
    backgroundColor: colors.gold, 
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
  },
  dateText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.black,
    transform: [{ rotate: "-90deg" }]
  },
  workoutDetails: {
    flex: 1,
    padding: 15,
  },
  workoutTitle: {
    color: colors.White,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  workoutSubtitle: {
    color: colors.grey,
    fontSize: 14,
    marginBottom: 8,
  },
  workoutTime: {
    color: '#fff',
    fontSize: 14,
    marginBottom: 10,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  viewDetails: {
    color: '#FECC33', // Yellow accent color
    fontSize: 14,
    marginRight: 5,
  },
  arrowIcon: {
    color: '#FECC33',
    fontSize: 16,
  },
  restText: {
    fontStyle: "italic",
    fontSize: 35, // Slightly larger for emphasis
    fontWeight: "800", // Semi-bold for a softer look
    textAlign: "center",
    color: colors.grey, // Subtle dark gray for a softer appearance
    letterSpacing: 5, // Adds spacing for better readability
    paddingVertical: 8, // Adds breathing space
  },

});
