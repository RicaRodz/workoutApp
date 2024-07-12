import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#FFD700",
        tabBarInactiveTintColor: "#FFFFFF",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#2A2A2A',
          borderTopWidth: 0, 
          elevation: 0, 
          shadowOpacity: 0,
        },
        
        
        backgroundColor: "#1E1E1E"

        
      }}
    >
      {/* <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={28} name="home" color={color} />
          ),
        }}
      /> */}
      <Tabs.Screen
        name="workouts"
        options={{
          title: "Workouts",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="dumbbell" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="mealPlans"
        options={{
          title: "Meal Plan",
          tabBarIcon: ({ color }) => (
            <FontAwesome5 name="utensils" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Progress",
          tabBarIcon: ({ color }) => (
            <Octicons name="graph" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user-circle-o" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="[name]"
        options={{
          href: null,
        }}
      />
    </Tabs>
  );
}
