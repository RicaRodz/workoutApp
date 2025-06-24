import { Session, User } from '@supabase/supabase-js';
import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

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

  useEffect(() => {
    const initialize = async () => {
      // Get current session on mount
      const {
        data: { session },
      } = await supabase.auth.getSession();

      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
      setInitialized(true);
    };

    initialize();

    // Listen to auth state changes (login, logout, etc.)
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const signOut = async () => {
    await supabase.auth.signOut();
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
