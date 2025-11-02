//supabase client to start database queries.

import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jizkjcakxvhiuxjzvnho.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImppemtqY2FreHZoaXV4anp2bmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE2ODIwODAsImV4cCI6MjA3NzI1ODA4MH0.Q29kXIjBDSk8aDDEmq-df4wLatAhkAalTJQl_VKioJ8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
