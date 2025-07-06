// components/WeeklyCalendar.tsx - Simple weekly calendar component
import { Text, useTheme } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";

// TypeScript interfaces
interface DayData {
  day: string;
  date: number;
  isToday: boolean;
}

export default function WeeklyCalendar(){
  const { theme } = useTheme();

  // Days of the week - change isToday to true for current day
  const weekDays: DayData[] = [
    { day: 'Mon', date: 1, isToday: false },
    { day: 'Tue', date: 2, isToday: false },
    { day: 'Wed', date: 3, isToday: false },
    { day: 'Thu', date: 4, isToday: false },
    { day: 'Fri', date: 5, isToday: true }, // Today
    { day: 'Sat', date: 6, isToday: false },
    { day: 'Sun', date: 7, isToday: false },
  ];

  const handleDayPress = (dayData: DayData): void => {
    // Add day selection logic here
    console.log(`Selected ${dayData.day} ${dayData.date}`);
  };

  return (
    <View style={{ paddingHorizontal: 15, marginBottom: 25 }}>
      
      {/* Section Title */}
      <Text style={{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
        color: theme.colors.textPrimary,
      }}>
        This Week
      </Text>

      {/* Calendar Row */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
        {weekDays.map((dayData: DayData) => (
          <TouchableOpacity
            key={dayData.date}
            style={{
              paddingVertical: 12,
              paddingHorizontal: 12,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: theme.colors.grey4,
              alignItems: 'center',
              minWidth: 45,
              backgroundColor: dayData.isToday ? theme.colors.primary : 'transparent',
            }}
            onPress={() => handleDayPress(dayData)}
          >
            {/* Day Name */}
            <Text style={{
              fontSize: 12,
              fontWeight: '500',
              marginBottom: 2,
              color: dayData.isToday ? theme.colors.white : theme.colors.grey0,
            }}>
              {dayData.day}
            </Text>
            
            {/* Date Number */}
            <Text style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: dayData.isToday ? theme.colors.white : theme.colors.textPrimary,
            }}>
              {dayData.date}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}