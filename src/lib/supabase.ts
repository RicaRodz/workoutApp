import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://yqjiwaqtzdffkemglwil.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlxaml3YXF0emRmZmtlbWdsd2lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDk4NjAzNjIsImV4cCI6MjA2NTQzNjM2Mn0.lj0AstmoetUWmwWJub5KmD5lbznOGUxoZ5Q-dmJyAoc';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
