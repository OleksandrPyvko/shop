function Delivery() {
  return (
    <div className="bg-stone-900 text-stone-400 ">
      <div className=" text-stone-400 relative pt-10 mb-10 w-full bg-stone-800 overflow-hidden py-4 pb-10">
        <div className="font-semibold text-xl pl-6 pt-6">
          <h2 className="block ">
            T-SHOP <br /> DELIVERY & <br /> WARRANTY
          </h2>
        </div>
        <div className="flex justify-center overflow-hidden min-h-[450px] ">
          <img
            srcSet="../shipping-image.png 480w, ../public/shipping-image-med.png 768w, ../public/shipping-image.png 1200w"
            src="../shipping-image.png"
            alt="delivery image"
            className="object-cover min-w-[840px] absolute top-0"
          />
        </div>

        <p className="uppercase font-normal absolute bottom-[5%]  right-[2%]  w-2/3 tracking-tighter ">
          Ми доставляємо товари по всьому світу, включаючи США, Європу і
          звичайно ж, Україну
        </p>
      </div>

      {/* //!DELIVERY */}
      <div className="flex flex-col p-8">
        <h2 className="text-xl font-bold">ДОСТАВКА</h2>
        <ul className="my-4">
          <li className="list-disc ml-4 text-lg font-semibold ">
            Доставка при повній передплаті
          </li>
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

      <div className="flex flex-col p-8">
        <ul className="my-4">
          <li className="list-disc ml-4 text-lg font-semibold">
            Доставка з післяплатою
          </li>
        </ul>

        <p className="montserrat">
          Ми також пропонуємо доставку з оплатою при отриманні через транспортну
          компанію Нова Пошта. Для використання цього методу необхідно здійснити
          мінімальну передоплату в сумі 200 гривень, яка буде зменшена від
          загальної суми замовлення. Вартість доставки та комісія за пересилання
          грошей сплачує покупець. Зверніть увагу, що важливо перевірити товар
          відразу при отриманні у відділенні Нової Пошти в присутності
          працівника компанії. Якщо виявлено пошкодження упакування або
          механічні пошкодження товару, ви можете відмовитися від замовлення або
          подати претензію до служби доставки Нова Пошта. Будь ласка, зверніть
          увагу, що сума замовлення вказана без врахування вартості доставки.
        </p>
      </div>
      {/* //! RETURNING */}
      <div className="flex flex-col p-8">
        <h2 className="text-xl font-bold">ПОВЕРНЕННЯ</h2>
        <ul className="my-4">
          <li className="list-disc ml-4  mb-10 ">
            Якщо вам не підійшов розмір, колір або виникли інші проблеми, будь
            ласка, зверніться до нашого call-центру інтернет-магазину за
            телефоном +38 (063) 727-21-63. Наші співробітники з радістю
            допоможуть вам вирішити всі ваші питання.
          </li>
          <li className="list-disc ml-4  mb-10 ">
            Звертаємо вашу увагу, що витрати на доставку під час повернення
            товару несе покупець. Повернення коштів здійснюється протягом 1-5
            робочих днів. Якщо доставка була неоплачена, вартість доставки
            віднімається з суми, що підлягає поверненню.
          </li>
          <li className="list-disc ml-4  mb-10 ">
            У випадку повернення товару через виробничий брак, витрати на
            доставку несе виробництво.
          </li>
          <li className="list-disc ml-4  mb-10 ">
            Будь ласка, врахуйте, що для повернення товару потрібно надати номер
            замовлення, товар повинен бути без ознак використання та з наявністю
            бірки і пломби. У разі виявлення ознак використання, ми залишаємо за
            собою право відмовити в поверненні товару.
          </li>
          <p>Дякуємо вам за розуміння та співпрацю!</p>
        </ul>
      </div>
      <div className="bg-stone-700 text-stone-300   text-3xl py-4 text-center">
        #T-SHOP_CULTURE
      </div>
    </div>
  );
}

export default Delivery;
