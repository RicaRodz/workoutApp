// app/(app)/profile.tsx
import { Button, Text, useTheme, useThemeMode } from '@rneui/themed';
import { router } from 'expo-router';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';

export default function Profile() {
  const { user, signOut } = useAuth();
  const {theme} = useTheme();
  const { mode, setMode } = useThemeMode();

  return (
    <View style={[styles.container, {backgroundColor: theme.colors.background }]}>
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.subtitle}>Email: {user?.email}</Text>
      <Text style={styles.subtitle}>User ID: {user?.id}</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => router.back()}>
        <Text style={styles.buttonText}>Go Back</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, styles.signOutButton]} onPress={signOut}>
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>

       <Button 
              title={`Switch to ${mode === "light" ? "dark" : "light"} mode`}
              onPress={() => setMode(mode === "light" ? "dark" : "light")}
              buttonStyle={{backgroundColor: theme.colors.primary, borderRadius: 5 }}
        />

    </View>
  );
}

// Shared styles for all components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 10,
    color: '#666',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  signOutButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  link: {
    marginTop: 10,
  },
});
