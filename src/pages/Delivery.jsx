function Delivery() {
  return (
    <div className="bg-stone-700 text-stone-400 ">
      <div className=" text-stone-400 relative pt-10 mb-10 w-full bg-stone-800 overflow-hidden py-4 pb-10">
        <div className="font-semibold text-xl pl-6 pt-6">
          <h2 className="block ">
            T-SHOP <br /> DELIVERY & <br /> WARRANTY
          </h2>
        </div>
        <div className="flex justify-center overflow-hidden min-h-[450px] ">
          <img
            src="../public/shipping-image.png"
            alt="delivery image"
            className="object-cover min-w-[840px] absolute top-0"
          />
        </div>

        <p className="uppercase font-normal absolute bottom-[5%]  right-[2%]  w-2/3 tracking-tighter ">
          Ми доставляємо товари по всьому світу, включаючи США, Європу і
          звичайно ж, Україну
        </p>
      </div>
      <div className="flex flex-col p-6">
        <h2 className="text-xl">ДОСТАВКА</h2>
        <ul className="my-4">
          <li className="list-disc ml-4">Доставка при повній передплаті</li>
        </ul>

        <p className="montserrat">
          Ми пропонуємо доставку товару по всій Україні з використанням надійних
          транспортних компаній - Нова Пошта. Вартість доставки становить від 85
          гривень і залежить від місця призначення. Після успішної передоплати,
          ми оперативно комплектуємо та відправляємо ваше замовлення протягом
          2-6 робочих днів. Ми приймаємо оплату за допомогою різних методів,
          включаючи Приват24, оплату на карту ПриватБанку, розрахунковий рахунок
          та LiqPay.
        </p>
      </div>
    </div>
  );
}

export default Delivery;
