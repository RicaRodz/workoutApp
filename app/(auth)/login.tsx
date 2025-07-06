import { Button, Input, Text, useTheme } from "@rneui/themed";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { supabase } from "../../lib/supabase";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { theme } = useTheme();

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        Alert.alert("Login Failed", error.message);
        setLoading(false);
        return;
      }

      console.log("Login successful:", data.user?.email);
      setLoading(false);
      // Don't call router.replace here - let the AuthProvider handle navigation
    } catch (err) {
      console.error("Login error:", err);
      Alert.alert("Error", "Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <View
      style={[styles.container, { backgroundColor: theme.colors.background }]}
    >
      <Text style={{ color: theme.colors.primary }} h1>
        Login
      </Text>

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

      <Button
        title={loading ? "Logging in..." : "Log In"}
        onPress={handleLogin}
        loading={loading}
        disabled={loading}
      />

      <Button
        title="Not a user? Sign Up!"
        onPress={() => router.replace("/(auth)/signup")}
        type="clear"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
});
