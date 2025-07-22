import { createClient as createSupabaseClient } from "@supabase/supabase-js";

export function createClient() {
  // For development - fallback credentials for demo purposes
  // Replace with your actual Supabase credentials in production
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://rgeqmzljufzmpkgjqamf.supabase.co';
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJnZXFtemxqdWZ6bXBrZ2pxYW1mIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY4Nzk2MjQsImV4cCI6MjA1MjQ1NTYyNH0.FdT5Xrjo6FxKgdqcOhFTNDXRZ-4Xf6K6DJy1A9D8-Z4';

  return createSupabaseClient(supabaseUrl, supabaseKey);
}
