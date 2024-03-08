import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.NEXT_PUBLIC_SUPABASE_KEY;
console.log(process.env);

// Check if url and key are defined
if (!url || !key) {
  throw new Error(
    "Supabase URL or key is not defined in environment variables."
  );
}

const supabase = createClient(url, key);

export default supabase;
