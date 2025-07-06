// components/QuickActions.tsx - Simple quick actions component
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, useTheme } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";

export default function QuickActions(){
  const { theme } = useTheme();

  const handleStartWorkout = (): void => {
    // Add navigation to workout screen here
    console.log('Start Workout pressed');
  };

  const handleLogFood = (): void => {
    // Add navigation to food logging screen here
    console.log('Log Food pressed');
  };

  return (
    <View style={{ paddingHorizontal: 15, marginBottom: 30 }}>
      
      {/* Section Title */}
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: theme.colors.textPrimary,
      }}>
        Quick Actions
      </Text>

      {/* Action Buttons Row */}
      <View style={{
        flexDirection: 'row',
        gap: 15,
      }}>
        
        {/* Start Workout Button */}
        <TouchableOpacity 
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 12,
            backgroundColor: theme.colors.primary,
            gap: 8,
          }}
          onPress={handleStartWorkout}
        >
          <MaterialIcons name="play-arrow" size={30} color={theme.colors.white} />
          <Text style={{
            fontSize: 16,
            fontWeight: '600',
            color: theme.colors.white,
          }}>
            Start Workout
          </Text>
        </TouchableOpacity>

        {/* Log Food Button */}
        <TouchableOpacity 
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 12,
            backgroundColor: theme.colors.secondary,
            gap: 8,
          }}
          onPress={handleLogFood}
        >
          <MaterialIcons name="add" size={30} color={theme.colors.white} />
          <Text style={{
            fontSize: 16,
            fontWeight: '600',
            color: theme.colors.white,
          }}>
            Log Food
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}