import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Redirect, Tabs } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';


export default function AppLayout() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // If user is not authenticated, redirect to auth
  if (!user) {
    return <Redirect href="/(auth)/login" />;
  }

  return (
    <Tabs screenOptions={{ headerShown: false, tabBarActiveTintColor: "blue" }}>
      <Tabs.Screen name="workouts" options={{ title:"Workouts", tabBarIcon: ({color}) => <FontAwesome5 name="dumbbell" size={24} color={color} /> }}/>
      <Tabs.Screen name="meals" options={{ title:"Meals", tabBarIcon: ({color}) => <MaterialCommunityIcons name="food-apple" size={24} color={color} /> }}/>
      <Tabs.Screen name="home" options={{ title:"Home", tabBarIcon: ({color}) => <FontAwesome name="home" size={24} color={color} /> }}/>
      <Tabs.Screen name="water" options={{ title:"Water", tabBarIcon: ({color}) => <FontAwesome6 name="glass-water" size={24} color={color} /> }}/>
      <Tabs.Screen name="profile" options={{ title:"Account", tabBarIcon: ({color}) => <MaterialCommunityIcons name="account" size={24} color={color} /> }}/>
    </Tabs>
  );
}