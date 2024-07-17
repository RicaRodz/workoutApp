import { View, Text } from "react-native";
import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { gql } from "graphql-request";

// const dashboardQuery = gql

const DashboardInfo = () => {
  return (
    <View style={styles.infoContainer}>
      <View style={styles.row}>
        <View style={styles.cell}>
          <View style={styles.info}>
            <Text style={styles.bigNumber}> 25 </Text>
            <Text style={styles.text}> workouts </Text>
            <Text style={styles.text}> completed </Text>
          </View>
        </View>
        <View style={styles.cell}>
          <View style={styles.info}>
            <Text style={styles.bigNumber}>
              {" "}
              103k <Text style={styles.text}> kg </Text>
            </Text>
            <Text style={styles.text}> tonnage </Text>
            <Text style={styles.text}> lifted </Text>
          </View>
        </View>
        <View style={styles.cell}>
          <View style={styles.info}>
            <Text style={styles.bigNumber}>
              {" "}
              70 <Text style={styles.text}> kg </Text>
            </Text>
            <Text style={styles.text}>current</Text>
            <Text style={styles.text}>weight</Text>
          </View>
        </View>
      </View>

      {/* Previous Workout */}
      <Pressable style={styles.row}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            padding: 20,
            borderColor: "gainsboro",
            borderBottomWidth: 1,
          }}
        >
          <View style={styles.prevWorkoutDate}>
            <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
              22
            </Text>
            <Text style={{ color: "white", fontWeight: "300" }}>May</Text>
          </View>
          <View style={{ flex: 1, flexDirection: "column" }}>
            <Text style={{ color: "#676968" }}>Previous Workout</Text>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Quads & Deltoids
            </Text>
            <Text>7 exercises completed</Text>
          </View>
          <View style={{ marginTop: 24 }}>
            <AntDesign name="right" size={16} color="grey" />
          </View>
        </View>
      </Pressable>
    </View>
  );
};

export default DashboardInfo;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderColor: "gainsboro",
  },
  cell: {
    flex: 1,
    flexDirection: "column",
    borderColor: "gainsboro",
    borderWidth: 1,
    textAlign: "center",
  },
  info: {
    margin: 10,
  },
  bigNumber: {
    fontSize: 30,
  },
  text: {
    fontSize: 15,
    color: "#676968",
    fontWeight: "500",
  },
  prevWorkoutDate: {
    backgroundColor: "royalblue",
    marginHorizontal: 15,
    padding: 10,
    borderRadius: 2,
  },
});

