
import { useLocalSearchParams } from 'expo-router';
import { View, Text } from 'react-native';

export default function WorkoutScreen() {
  const { id, workoutData } = useLocalSearchParams();
  console.log(id, workoutData);
  return (
    <View>
      <Text>Workout ID: {id}</Text>
      <Text>Workout Name: {workoutData.workout_name}</Text>
      {/* Display other workout details */}
    </View>
  );
}



// // WorkoutDetailsModal.js
// import React from "react";
// import {
//   Modal,
//   View,
//   Text,
//   StyleSheet,
//   TouchableOpacity,
//   ScrollView,
//   TouchableWithoutFeedback,
// } from "react-native";
// import { Ionicons } from "@expo/vector-icons";
// import { SafeAreaView } from "react-native-safe-area-context";

// const WorkoutScreen = ({ visible, workout, onClose }) => {
//   return (
//     <SafeAreaView
//       animationType="slide"
//       transparent={true}
//       visible={visible}
//       onRequestClose={onClose}
//     >
//       <ScrollView>
//         <View style={styles.modalOverlay}>
//           <View style={styles.modalContent}>
//             <ScrollView>
//               <Text style={styles.modalTitle}>{workout.workout_name}</Text>
//               <View style={styles.infoContainer}>
//                 <View style={styles.infoItem}>
//                   <Ionicons name="repeat-outline" size={20} color="#FFD700" />
//                   <Text style={styles.infoText}>
//                     Completed {workout.times_completed} times
//                   </Text>
//                 </View>
//                 <View style={styles.infoItem}>
//                   <Ionicons name="barbell-outline" size={20} color="#FFD700" />
//                   <Text style={styles.infoText}>
//                     Total Tonnage: {workout.tonnage}
//                   </Text>
//                 </View>
//                 <View style={styles.infoItem}>
//                   <Ionicons name="calendar-outline" size={20} color="#FFD700" />
//                   <Text style={styles.infoText}>{workout.days.join(", ")}</Text>
//                 </View>
//               </View>
//               <Text style={styles.modalSubtitle}>Exercises:</Text>
//               {Object.entries(workout.exercises).map(
//                 ([exerciseName, details]) => (
//                   <View key={exerciseName} style={styles.exerciseItem}>
//                     <Ionicons
//                       name="fitness-outline"
//                       size={20}
//                       color="#FFD700"
//                     />
//                     <Text style={styles.modalExercise}>{exerciseName}</Text>
//                   </View>
//                 )
//               )}
//             </ScrollView>
//             <TouchableOpacity onPress={onClose} style={styles.closeButton}>
//               <Text style={styles.closeButtonText}>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   modalOverlay: {
//     flex: 1,
//     backgroundColor: "#1E1E1E",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   modalContent: {
//     backgroundColor: "#1E1E1E",
//     borderRadius: 20,
//     padding: 20,
//     width: "90%",
//     maxHeight: "80%",
//     borderWidth: 2,
//     borderColor: "#FFD700",
//   },
//   modalTitle: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#FFD700",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   infoContainer: {
//     marginBottom: 20,
//   },
//   infoItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   infoText: {
//     fontSize: 16,
//     color: "#FFD700",
//     marginLeft: 10,
//   },
//   modalSubtitle: {
//     fontSize: 22,
//     fontWeight: "bold",
//     color: "#FFD700",
//     marginTop: 10,
//     marginBottom: 15,
//   },
//   exerciseItem: {
//     flexDirection: "row",
//     alignItems: "center",
//     marginBottom: 10,
//   },
//   modalExercise: {
//     fontSize: 18,
//     color: "#FFD700",
//     marginLeft: 10,
//   },
//   closeButton: {
//     backgroundColor: "#FFD700",
//     padding: 12,
//     borderRadius: 10,
//     alignSelf: "center",
//     marginTop: 20,
//     width: "100%",
//   },
//   closeButtonText: {
//     color: "#1E1E1E",
//     fontWeight: "bold",
//     fontSize: 16,
//     textAlign: "center",
//   },
// });

// export default WorkoutScreen;
