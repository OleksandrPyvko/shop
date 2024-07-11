function CartItem({ name, price }) {
  return (
    <div>
      <p>{name}</p>
      <p>{price} UAH</p>
    </div>
  );
}

export default CartItem;
