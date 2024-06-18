import over from "../../public/over.png";
import LinkButton from "../ui/LinkButton";

function About() {
  return (
    <div className=" bg-[#adaca3]">
      <div className="p-6">
        <span className="font-bold text-stone-700">EST. 2019</span>
        <h2 className="font-bold text-stone-600">ПРО — БРЕНД</h2>
      </div>
      <div className="relative h-[70%]">
        <img src={over} alt="" className="z-10 relative h-[400px] m-auto" loading="lazy" />
        <div className="bg-stone-500 rounded-md w-[90%] min-w-[40%] h-[300px] z-0 m-auto absolute bottom-0 right-[50%] translate-x-[50%]"></div>
      </div>
      <article className="p-6 font-semibold monteserrat  text-stone-600 ">
        T-SHOP - український бренд одягу, що поєднав в собі утилітарний,
        лаконічний та зручний дизайн. Наша місія - втілити динамічний ритм життя
        та свободу творчих людей в самобутньому оверсайз одязі. В кожній моделі
        ми приділяємо особливу увагу деталям, створюючи оригінальний дизайн,
        який збагачує ваш стиль. Наше власне виробництво дає нам можливість бути
        гнучкими та втілювати будь-які ідеї до найменших дрібниць. Разом з T-SHOP
        ви зможете відчути комфорт, якість і самовиразність у кожному образі.
        Досягніть свободи вибору та неперевершеності з нами.
      </article>

      <div className="flex flex-col p-6">
        <span className="monoton text-2xl">MADE WITH LOVE</span>
        <span className="monoton text-3xl m-auto">MAN and WOMAN</span>
        <span className="monoton text-2xl ml-auto">CLOTHING</span>
      </div>

      <div className="relative flex py-6">
        <span className="ml-[20%] mr-[10px] text-sm">
          Переглянути <br /> товари
        </span>
        <LinkButton className="mr-auto" />
      </div>
    </div>
  );
}

export default About;
