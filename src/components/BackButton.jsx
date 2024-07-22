import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { StyleSheet } from "react-native";

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={styles.backButton}
    >
      <Ionicons name="arrow-back-circle-sharp" size={24} color="#1E1E1E" />
      <Text style={styles.backButtonTitle}>Back</Text>
    </TouchableOpacity>
  );
};

export default BackButton;

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "#FFD700",
    borderRadius: 10,
  },
  backButtonTitle: {
    color: "#1E1E1E",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 10,
  },
});
