import { useTheme } from '@rneui/themed';
import { Redirect } from 'expo-router';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../providers/AuthProvider';

export default function Index() {
  const { user, loading } = useAuth();
  const {theme} = useTheme();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // return {user ? < }
  return <Redirect href={user ? "/(app)/home" : "/(auth)/login"} />;
}
