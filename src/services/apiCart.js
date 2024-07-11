import supabase from "./supabase";
import { v4 as uuidv4 } from "uuid";

export async function getUserIdentifier() {
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    console.log("User", user.id);
    return { user_id: user.id, is_guest: false };
  } else {
    let guest_id = localStorage.getItem("guest_id");
    if (!guest_id) {
      guest_id = uuidv4();
      localStorage.setItem("guest_id", guest_id);
    }
    console.log("Guest", guest_id);
    return { user_id: guest_id, is_guest: true };
  }
}

//* Function to fetch or create a cart
export async function getOrCreateCart() {
  const { user_id, is_guest } = getUserIdentifier();

  let { data, error } = await supabase
    .from("carts")
    .select("*")
    .eq("user_id", user_id)
    .eq("is_guest", is_guest);

  if (error && error.message === "PGRST116") {
    const { data: newCart, error: insertError } = await supabase
      .from("carts")
      .insert([{ user_id, is_guest }])
      .select();

    if (insertError) throw insertError;

    return newCart;
  }

  return data;
}
