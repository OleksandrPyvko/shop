import supabase, { supabaseUrl } from "./supabase";

//https://krkmpmqyryoaqsvtnfxo.supabase.co/storage/v1/object/public/items_images/4ac79448-7b2c-46ed-a5f4-d15bc1b87b91.jfif

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
  const imageName = `${Math.random()}-${newItem.image.name}`.replaceAll(
    "/",
    ""
  );
  // https://krkmpmqyryoaqsvtnfxo.supabase.co/storage/v1/object/public/items_images/2be6e498-a022-45b3-a400-e9a7b1d8fc82.jfif
  // const imagePath = `${supabaseUrl}/storage/v1/object/public/items_images/${imageName}`;
  const imagePath = `https://krkmpmqyryoaqsvtnfxo.supabase.co/storage/v1/object/public/items_images/${imageName}`;

  const { data, error } = await supabase
    .from("Items")
    .insert([{ ...newItem, image: imagePath }])
    .select();

  if (error) throw new Error(error.message);

  //* Image uploading
  const { error: uploadError } = await supabase.storage
    .from("items_images")
    .upload(imageName, newItem.image);
  if (uploadError) {
    throw new Error(error.message);
  }

  return data;
}

export async function deleteItem(id) {
  const { data, error } = await supabase.from("Items").delete().eq("id", id);
  console.log("delete");

  if (error) throw new Error(error.message);

  return data;
}
