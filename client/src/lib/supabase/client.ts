import { createClient as createSupabaseClient } from "@supabase/supabase-js";

export function createClient() {
  // For development - you can replace these with your actual Supabase credentials
  // Or set them as environment variables VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://yflzimpwqdchxljeymvq.supabase.co";
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlmbHppbXB3cWRjaHhsamV5bXZxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4OTE0MjYsImV4cCI6MjA2ODQ2NzQyNn0._KTVN9Kp4mFGVzc4Ys94tmQ4MFXFC9nG4PDh1BGjmsw";

  console.log("Supabase URL:", supabaseUrl);
  console.log("Supabase Key exists:", !!supabaseKey);
  
  return createSupabaseClient(supabaseUrl, supabaseKey);
}
