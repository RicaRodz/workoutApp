// components/WaterScheduleItem.tsx
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Switch, Text, useTheme } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";
import { WaterSchedule } from "../types/types"; // Define shared types

interface Props {
  schedule: WaterSchedule;
  status: "completed" | "current" | "upcoming";
  onPress: () => void;
  onToggleReminder: () => void;
}

export default function WaterScheduleItem({
  schedule, status, onPress, onToggleReminder
}: Props) {
  const { theme } = useTheme();

  return (
    <TouchableOpacity
      style={{
        backgroundColor: status === 'completed' ? theme.colors.grey4
          : status === 'current' ? theme.colors.primary + '10'
          : theme.colors.surface,
        borderRadius: 12,
        padding: 16,
        marginBottom: 12,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: status === 'current' ? theme.colors.primary
          : status === 'completed' ? theme.colors.grey3
          : theme.colors.grey4,
        borderWidth: status === 'current' ? 2 : 1,
        elevation: status === 'completed' ? 0 : 2,
      }}
      onPress={onPress}
      disabled={status === 'completed'}
    >
      <View style={{
        width: 40, height: 40, borderRadius: 20,
        backgroundColor: status === 'completed' ? theme.colors.grey2
          : status === 'current' ? theme.colors.primary + '20'
          : '#3498db20',
        justifyContent: 'center', alignItems: 'center', marginRight: 15
      }}>
        <MaterialIcons
          name={status === 'completed' ? "check" : "water-drop"}
          size={20}
          color={status === 'completed' ? theme.colors.grey1
            : status === 'current' ? theme.colors.primary
            : '#3498db'}
        />
      </View>

      <View style={{ flex: 1 }}>
        <Text style={{
          fontSize: 16,
          fontWeight: '600',
          color: status === 'completed' ? theme.colors.grey1 : theme.colors.textPrimary
        }}>
          {schedule.time}
        </Text>
        <Text style={{
          fontSize: 14,
          color: status === 'completed' ? theme.colors.grey1 : theme.colors.grey0
        }}>
          {schedule.amount}ml
        </Text>
      </View>

      {status === 'current' && (
        <View style={{
          backgroundColor: theme.colors.primary,
          paddingHorizontal: 8,
          paddingVertical: 4,
          borderRadius: 8,
          marginRight: 10,
        }}>
          <Text style={{ fontSize: 12, fontWeight: '600', color: theme.colors.white }}>NOW</Text>
        </View>
      )}

      <View style={{ alignItems: 'center', marginLeft: 10 }}>
        <Switch
          value={schedule.reminderEnabled}
          onValueChange={onToggleReminder}
          disabled={status === 'completed'}
          color={theme.colors.primary}
          style={{ transform: [{ scaleX: 0.8 }, { scaleY: 0.8 }] }}
        />
        <Text style={{
          fontSize: 10,
          color: status === 'completed' ? theme.colors.grey1 : theme.colors.grey0,
          marginTop: 2,
        }}>Remind</Text>
      </View>
    </TouchableOpacity>
  );
}
