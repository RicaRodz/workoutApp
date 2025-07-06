import { Session, User } from "@supabase/supabase-js";
import { router } from "expo-router";
import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "../lib/supabase";

type AuthContextType = {
  user: User | null;
  session: Session | null;
  initialized: boolean;
  loading: boolean;
  signOut: () => Promise<void>;
};

// Create context with default values (safe, non-null)
const AuthContext = createContext<AuthContextType>({
  user: null,
  session: null,
  initialized: false,
  loading: true,
  signOut: async () => {},
});

// Custom hook to use the context
export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [initialized, setInitialized] = useState(false);
  const [loading, setLoading] = useState(true);

  // In your AuthProvider
  useEffect(() => {
    const initialize = async () => {
      console.log("AuthProvider: Initializing...");

      // Get current session on mount
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();
      console.log(
        "AuthProvider: Initial session:",
        session?.user?.email || "No session"
      );
      console.log("AuthProvider: Session error:", error);

      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
      setInitialized(true);
    };

    initialize();

    // Listen to auth state changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        console.log(
          "AuthProvider: Auth state changed:",
          event,
          session?.user?.email || "No session"
        );
        setSession(session);
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    try {
      // Clear any cached auth data first
      // await AsyncStorage.removeItem("supabase.auth.token");
      // await AsyncStorage.clear(); // Nuclear option - clears everything

      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Sign out error:", error);
      }
      // router.replace("/login");
    } catch (err) {
      console.error("Sign out failed:", err);
      // Force local sign out
      setSession(null);
      setUser(null);
      router.replace("/login");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        initialized,
        loading,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
