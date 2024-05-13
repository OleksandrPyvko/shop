function Delivery() {
  return (
    <div className="bg-stone-600  text-stone-400 relative pt-16 ">
      <h2 className="absolute font-semibold top-[15%] w-1/3 left-[7%] ">
        T-SHOP DELIVERY & WARRANTY
      </h2>

      <img
        src="../public/shipping-image.png"
        alt="delivery image"
        className="object-cover h-2/3"
      />

      <p className="uppercase text-sm font-semibold w-2/3 absolute ">
        Ми доставляємо товари по всьому світу, включаючи США, Європу і звичайно
        ж, Україну
      </p>
    </div>
  );
}

export default Delivery;
