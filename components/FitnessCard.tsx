// components/FitnessCard.tsx - Simple fitness card component
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Card, Text, useTheme } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";

// TypeScript interfaces
interface FitnessData {
  current: number;
  target: number;
  unit: string;
}

interface FitnessCardProps {
  title: string;
  icon: keyof typeof MaterialIcons.glyphMap;
  data: FitnessData;
  color: string;
}

export default function FitnessCard({ title, icon, data, color }: FitnessCardProps) {
  const { theme } = useTheme();
  
  // Calculate percentage for progress bar
  const percentage: number = (data.current / data.target) * 100;

  const handlePress = (): void => {
    // Add navigation here later
    console.log(`Pressed ${title}`);
  };

  return (
    <Card containerStyle={{
      borderRadius: 12,
      marginBottom: 15,
      backgroundColor: theme.colors.surface,
      elevation: 2,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
    }}>
      <TouchableOpacity onPress={handlePress}>
        
        {/* Card Header with Icon and Title */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 15,
        }}>
          {/* Icon Circle */}
          <View style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: color + '20', // Makes color transparent
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 12,
          }}>
            <MaterialIcons name={icon} size={24} color={color} />
          </View>
          
          {/* Title */}
          <Text style={{
            fontSize: 16,
            fontWeight: '600',
            color: theme.colors.textPrimary,
          }}>
            {title}
          </Text>
        </View>

        {/* Current vs Target Numbers */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'baseline',
          marginBottom: 15,
        }}>
          <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: theme.colors.primary,
            marginRight: 5,
          }}>
            {data.current}
          </Text>
          <Text style={{
            fontSize: 14,
            color: theme.colors.grey0,
          }}>
            / {data.target} {data.unit}
          </Text>
        </View>

        {/* Progress Bar */}
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
          {/* Progress Bar Background */}
          <View style={{
            flex: 1,
            height: 8,
            backgroundColor: theme.colors.grey4,
            borderRadius: 4,
            marginRight: 10,
          }}>
            {/* Progress Bar Fill */}
            <View style={{
              height: '100%',
              width: `${Math.min(percentage, 100)}%`,
              backgroundColor: color,
              borderRadius: 4,
            }} />
          </View>
          
          {/* Percentage Text */}
          <Text style={{
            fontSize: 12,
            fontWeight: '600',
            color: theme.colors.grey0,
            minWidth: 35,
          }}>
            {Math.round(percentage)}%
          </Text>
        </View>

      </TouchableOpacity>
    </Card>
  );
}