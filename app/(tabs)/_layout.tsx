import { Tabs } from 'expo-router';

import Ionicons from '@expo/vector-icons/Ionicons';
import colors from "../theme/styles"

export default function TabLayout() {
  return (
    <Tabs
    screenOptions={{
      tabBarActiveTintColor: colors.gold,
      tabBarStyle: {
      backgroundColor: colors.black,
      },
    }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
    
      <Tabs.Screen
        name="workouts"
        options={{
          title: 'Workouts',
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'barbell' : 'barbell-outline'} color={color} size={24}/>
          ),
        }}
      />

    </Tabs>
  );
}
