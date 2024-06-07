import supabase from "./supabase";

export async function getItems(category) {
  let { data, error } = await supabase
    .from("Items")
    .select("*")
    .eq("category", category);

  if (error) throw new Error(error.message);
  console.log(data);
  return data;
}
