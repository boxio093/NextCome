// components/handleContactSubmit.ts

import { supabase } from "../lib/supabaseClient"; // adjust path as needed

export async function handleContactSubmit(email: string, message: string) {
  const { data, error } = await supabase
    .from("contacts")
    .insert([{ email, message }])
    .select();

  if (error) {
    console.error("Supabase error:", error);
    return { success: false, error };
  }

  // Optionally use `data` or just return success
  return { success: true, data };
}
