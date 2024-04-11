import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
console.log("url", url);
console.log("key", key);

const supabase = createClient(url, key);

export default supabase;
