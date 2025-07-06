import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient, processLock } from "@supabase/supabase-js";

const url = "https://yhfhuaeknwbfuqkkmflj.supabase.co";
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InloZmh1YWVrbndiZnVxa2ttZmxqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTE3NTMxOTUsImV4cCI6MjA2NzMyOTE5NX0.XD2BVb9o22PCXv-bJLOIJ0Yp2n3n_0WS7C2jO7eETkc";

// Initialize the Supabase client
export const supabase = createClient(url, key, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
    lock: processLock,
  },
});
