import supabase from "./supabase";

export async function getItems(category) {
  let { data, error } = await supabase
    .from("Items")
    .select("*")
    .eq("category", category);

  if (error) throw new Error(error.message);

  return data;
}

export async function getItemDetails(id) {
  let { data, error } = await supabase
    .from("Items")
    .select("*")
    .eq("id", id)
    .single();
  // console.log(data);
  return data;
}

export async function createItem(newItem) {
  const { data, error } = await supabase
    .from("Items")
    .insert([newItem])
    .select();

  if (error) throw new Error(error.message);
}

export async function deleteItem(id) {
  const { error } = await supabase
    .from("Items")
    .delete()
    .eq("id", id);

    if (error) throw new Error(error.message);
}
