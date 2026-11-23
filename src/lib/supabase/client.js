import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Browser-safe client. Row-level security limits what it can read and write.
// null until the Supabase variables are set in .env.local.
export const supabase = url && anonKey ? createClient(url, anonKey) : null;
