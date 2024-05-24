import DropDownList from "../components/DropDownList";

function FAQ() {
  return (
    <div className=" bg-stone-900 ">
      <div className=" pt-[70px] bg-[url(/faq.jpg)] h-[25vh] bg-cover bg-center">
        <p className=" ml-6  mt-8 font-bold text-stone-600   text-xl">Питання <br /> та відповіді</p>
      </div>
      <DropDownList />
    </div>
  );
}

export default FAQ;
