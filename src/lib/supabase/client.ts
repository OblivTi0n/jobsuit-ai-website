import { createClient as createSupabaseClient } from '@supabase/supabase-js';

// Create a single instance to be reused across the application
const supabase = createSupabaseClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export function createClient() {
  return supabase;
}

// Also export the instance directly for cleaner imports
export { supabase }; 