function Footer() {
  return (
    <div className="bg-stone-800 text-stone-500 font-bold divide-y-2 divide-stone-500  p-5 ">
      <div className="">
        <div className="flex py-2  ">
          <div className="pr-6 py-5">01</div>
          <div className="flex flex-col justify-center">
            <p>Телефон</p>
            <a href="tel:+3800000000000">+380 00 000 0000</a>
          </div>
        </div>
      </div>

      <div>
        <div className="flex py-2">
          <div className="pr-6 py-5">01</div>
          <div className="flex flex-col justify-center">
            <p>Email</p>
            <a href="mailto:t-shop@gmail.com">t-shop@gmail.com</a>
          </div>
        </div>
      </div>

      <div>
        <div className="flex py-2">
          <div className="pr-6 py-5">01</div>
          <div className="flex flex-col justify-center">
            <p>Адреса</p>
            <a
              href="https://www.google.com/maps?q=Україна, Київ"
              target="_blank"
            >
              Україна, Київ
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
