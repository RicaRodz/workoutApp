import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Button, Text, useTheme, useThemeMode } from '@rneui/themed';
import { ScrollView, StyleSheet, View } from 'react-native';
import { useAuth } from '../../providers/AuthProvider';

export default function Profile() {
  const { user, signOut } = useAuth();
  const { theme } = useTheme();
  const { mode, setMode } = useThemeMode();

  const toggleMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: theme.colors.background, paddingVertical: 30 }}>
      <View style={styles.header}>
        <MaterialIcons name="account-circle" size={80} color={theme.colors.primary} />
        <Text style={[styles.name, { color: theme.colors.textPrimary }]}>Welcome</Text>
        <Text style={[styles.email, { color: theme.colors.grey0 }]}>{user?.email}</Text>
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}>User Info</Text>
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: theme.colors.grey1 }]}>User ID</Text>
          <Text style={[styles.value, { color: theme.colors.textPrimary }]}>{user?.id}</Text>
        </View>
        <View style={styles.infoRow}>
          <Text style={[styles.label, { color: theme.colors.grey1 }]}>Email</Text>
          <Text style={[styles.value, { color: theme.colors.textPrimary }]}>{user?.email}</Text>
        </View>
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.surface }]}>
        <Text style={[styles.sectionTitle, { color: theme.colors.textPrimary }]}>Preferences</Text>
        <Button
          title={`Switch to ${mode === 'light' ? 'Dark' : 'Light'} Mode`}
          onPress={toggleMode}
          icon={{
            name: mode === 'light' ? 'dark-mode' : 'light-mode',
            type: 'material',
            color: theme.colors.white,
          }}
          buttonStyle={{
            backgroundColor: theme.colors.primary,
            borderRadius: 10,
            paddingVertical: 12,
            marginTop: 10,
          }}
        />
      </View>

      <View style={[styles.section, { backgroundColor: theme.colors.surface }]}>
        <Button
          title="Sign Out"
          onPress={signOut}
          buttonStyle={{
            backgroundColor: theme.colors.error,
            borderRadius: 10,
            paddingVertical: 12,
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
  },
  email: {
    fontSize: 16,
    marginTop: 4,
  },
  section: {
    padding: 20,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    elevation: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
  },
  value: {
    fontSize: 14,
    fontWeight: '600',
  },
});
