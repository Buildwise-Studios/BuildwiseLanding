import { createClient as createSupabaseClient } from '@supabase/supabase-js'

export function createClient() {
  // For development - you can replace these with your actual Supabase credentials
  // Or set them as environment variables VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://demo.supabase.co'
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'demo-key'
  
  return createSupabaseClient(supabaseUrl, supabaseKey)
}
