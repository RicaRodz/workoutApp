import { Text, useTheme } from "@rneui/themed";
import { SafeAreaView, ScrollView, View } from "react-native";
import CalorieSummary from "../../components/CalorieSummary";
import MacroSummary from "../../components/MacroSummary";

export default function meals() {
  const { theme } = useTheme();

  const calorieGoal = 2200;
  const consumedCalories = 1350;

  const macros = {
    carbs: { consumed: 150, goal: 250 },
    protein: { consumed: 90, goal: 150 },
    fats: { consumed: 40, goal: 70 },
  };

  const handleAddMeal = () => {
    console.log("Add meal pressed");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.background }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={{
          fontSize: 28,
          fontWeight: 'bold',
          padding: 20,
          paddingBottom: 10,
          color: theme.colors.textPrimary,
        }}>
          Nutrition Tracker
        </Text>

        <CalorieSummary
          consumed={consumedCalories}
          goal={calorieGoal}
          onAddMeal={handleAddMeal}
        />

        <View style={{ paddingHorizontal: 20 }}>
          <Text style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: theme.colors.textPrimary,
            marginBottom: 15,
          }}>
            Macronutrients
          </Text>

          <MacroSummary
            label="Carbs"
            consumed={macros.carbs.consumed}
            goal={macros.carbs.goal}
            color="#3b82f6"
          />
          <MacroSummary
            label="Protein"
            consumed={macros.protein.consumed}
            goal={macros.protein.goal}
            color="#10b981"
          />
          <MacroSummary
            label="Fats"
            consumed={macros.fats.consumed}
            goal={macros.fats.goal}
            color="#f59e0b"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
