import { Button, Input, Text, useTheme, } from "@rneui/themed";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { supabase } from "../../lib/supabase";


export default function SignupScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useTheme();

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });

      if (error) {
        Alert.alert("Signup Failed", error.message);
        return;
      }

      const user = data?.user;
      if (!user) { // user object didn't come back
        Alert.alert(
          "Check Your Email",
          "Signup was successful, but you need to confirm your email before continuing."
        );
        router.replace("/(app)/home");
      } else { // user object came back
        Alert.alert(
          "Signup Success",
          "Account created. Please verify your email before logging in."
        );
        router.replace("/(app)/home");
      }
    } catch (err: any) {
      console.error("Unexpected error during signup", err);
      Alert.alert("Unexpected error during signup", "Something went wrong.");
    }
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background}]}>
      <Text h1 style={{color: theme.colors.primary}} >Sign Up</Text>
      

      <Input
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <Input
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Create Account" onPress={handleSignup} />
      <Button
        title="Alredy a user? Log in!"
        onPress={() => router.replace("/(auth)/login")}
        type="clear"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 }
});
