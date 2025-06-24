
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const url='https://yqjiwaqtzdffkemglwil.supabase.co'
const key='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlxaml3YXF0emRmZmtlbWdsd2lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NjAzNjIsImV4cCI6MjA2NTQzNjM2Mn0.lj0AstmoetUWmwWJub5KmD5lbznOGUxoZ5Q-dmJyAoc'

// Initialize the Supabase client
export const supabase = createClient(url, key, {
  auth: {
    storage: AsyncStorage,
    detectSessionInUrl: false,
  },
})
