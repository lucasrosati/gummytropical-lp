import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function insertLead(nome: string, email: string, telefone: string) {
  const { error } = await supabase.from("leads").insert({ nome, email, telefone });
  if (error) throw error;
}

export async function getAllLeads() {
  const { data, error } = await supabase
    .from("leads")
    .select("id, nome, email, telefone, created_at")
    .order("id", { ascending: false });
  if (error) throw error;
  return data;
}

export async function deleteAllLeads() {
  const { error } = await supabase.from("leads").delete().neq("id", 0);
  if (error) throw error;
}
