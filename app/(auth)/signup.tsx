import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { router } from "expo-router";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { supabase } from "../../lib/supabase";

type Props = NativeStackScreenProps<any>;

export default function SignupScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async () => {
    if (!email || !password) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      Alert.alert("Signup Failed", error.message);
      return;
    }

    const user = data?.user;
    if (!user) {
      Alert.alert(
        "Check Your Email",
        "Signup was successful, but you need to confirm your email before continuing."
      );
      return;
    }

    const { error: profileError } = await supabase.from("profiles").insert({
      id: user.id,
      full_name: "",
      age: null,
      weight_kg: null,
      goal: "",
    });

    if (profileError) {
      console.log("Insert error:", profileError);
      Alert.alert("Profile Save Error", profileError.message);
    } else {
      Alert.alert(
        "Signup Success",
        "Check your email to confirm your account!"
      );
      navigation.replace("/login");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
      />

      <Button title="Create Account" onPress={handleSignup} />
      <Button title="Alredy a user? Log in!" onPress={() => router.replace("/(auth)/login")} />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  link: { color: "blue", marginTop: 20, textAlign: "center" },
});
