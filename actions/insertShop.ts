import supabase from "@/lib/supabase";

export async function insertRecord(name: String) {
  try {
    const { data, error } = await supabase
      .from("profile")
      .insert([{ name: name }]);
    if (error) {
      throw error;
    }
    console.log("Record inserted successfully:", data);
  } catch (error: any) {
    console.error("Error inserting record:", error.message);
  }
}
