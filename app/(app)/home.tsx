// Home.tsx - Your main home screen file
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Text, useTheme } from "@rneui/themed";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Import our simple components
import FitnessCard from '../../components/FitnessCard';
import WeeklyCalendar from '../../components/WeeklyCalendar';

// TypeScript interface for fitness data
interface FitnessData {
  current: number;
  target: number;
  unit: string;
}

interface MyFitnessData {
  water: FitnessData;
  weight: FitnessData;
  calories: FitnessData;
  steps: FitnessData;
}

export default function Home(){
  const { theme } = useTheme();

  // Your fitness data - change these numbers to match your app
  const myFitnessData: MyFitnessData = {
    water: { current: 6, target: 8, unit: 'glasses' },
    weight: { current: 2450, target: 3000, unit: 'lbs' },
    calories: { current: 450, target: 2200, unit: 'cal' },
    steps: { current: 8420, target: 10000, unit: 'steps' },
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background, paddingBottom: 60 }}>
      <ScrollView>
        
        {/* HEADER - Same as your original */}
        <View style={{
          padding: 15, 
          marginBottom: 35, 
          flexDirection: 'row', 
          justifyContent: "space-between"
        }}>
          <View>
            <Text h4 style={{ color: theme.colors.primary, fontWeight: "bold" }}>
              Welcome Back Ricardo!
            </Text>
            <Text style={{ color: theme.colors.grey0 }}>
              Tuesday, July 5
            </Text>
          </View>
          <View>
            <MaterialIcons name="account-circle" size={45} color={theme.colors.primary} />
          </View>
        </View>

        {/* WEEKLY CALENDAR */}
        <WeeklyCalendar />

        {/* FITNESS CARDS */}
        <View style={{ padding: 15 }}>
          <Text style={{ 
            fontSize: 18, 
            fontWeight: 'bold', 
            marginBottom: 15,
            color: theme.colors.textPrimary 
          }}>
            Your Stats
          </Text>

          <FitnessCard 
            title="Water Intake"
            icon="water-drop"
            data={myFitnessData.water}
            color="#3498db"
          />

          <FitnessCard 
            title="Weight Lifted"
            icon="fitness-center"
            data={myFitnessData.weight}
            color="#e74c3c"
          />

          <FitnessCard 
            title="Calories Left"
            icon="local-fire-department"
            data={myFitnessData.calories}
            color="#f39c12"
          />

          <FitnessCard 
            title="Steps"
            icon="directions-walk"
            data={myFitnessData.steps}
            color="#2ecc71"
          />
        </View>

        {/* QUICK ACTIONS */}
        {/* <QuickActions /> */}

      </ScrollView>
    </SafeAreaView>
  );
}