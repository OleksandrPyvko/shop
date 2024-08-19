import { getUser } from "./apiAuth";
import supabase from "./supabase";
import { v4 as uuidv4 } from "uuid";

export async function getUserIdentifier() {
  const user = await getUser();

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
  if (error) {
    if (
      error.code === "PGRST116" ||
      error.message === "JSON object requested, multiple (or no) rows returned"
    ) {
      const { data: newCart, error: insertError } = await supabase
        .from("carts")
        .insert([{ user_id, is_guest }])
        .select()
        .single();

      if (insertError) {
        console.error("Insert Error:asasa", insertError.message);
        throw insertError;
      }
      return newCart;
    } else {
      console.error("Select Error:", error.message);
      throw error;
    }
  }
  return data;
}

// export async function getCartItems(cart_id) {
//   let { data: cartItems } = await supabase
//     .from("cartItems")
//     .select("*")
//     .eq("cart_id", cart_id);

//   return cartItems;
// }

export async function getCartItems(cart_id) {
  let { data: cartItems } = await supabase
    .from("cartItems")
    .select("*, Items(price)")
    .eq("cart_id", cart_id);

  return cartItems;
}

export async function addToCart({cart_id, quantity, item_id}) {
  const { data, error } = await supabase
    .from("cartItems")
    .insert([{ cart_id: cart_id, quantity: quantity, item_id: item_id }])
    .select();

    if (error) {
      console.error("Insert Error:", error.message);
      throw error;
    }
  
    return data;
}
