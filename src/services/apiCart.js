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

export async function getOrCreateCart() {
  const { user_id, is_guest } = await getUserIdentifier();

  const { data, error } = await supabase
    .from("carts")
    .select("*")
    .eq("user_id", user_id)
    .eq("is_guest", is_guest)
    .single();

  if (error && error.code === "PGRST116") {
    //* If no cart found, insert a new cart
    const { data: newCart, error: insertError } = await supabase
      .from("carts")
      .insert([{ user_id, is_guest }])
      .single();

    if (insertError) {
      console.error("Insert Error:", insertError.message);
      throw insertError;
    }
    return newCart;
  } else if (error) {
    console.error("Select Error:", error.message);
    throw error;
  }

  return data;
}
