import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://zjclrhsrheyycwxugxmq.supabase.co";
const supabaseKey = "sb_publishable_GeqTJfWeDH8F23wNNzcUEg_ZpQNMOCJ";

export const supabase = createClient(
  supabaseUrl,
  supabaseKey
);

