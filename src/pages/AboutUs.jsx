import About from "../components/About";
import RunningLine from "../components/RunningLine";

function AboutUs() {
  return (
    <>
      <div className="bg-[#adaca3] pt-[64px] relative">
        <div>
          <p className="ml-6 mt-6 text-xl text-stone-600 font-semibold uppercase">
            -Про <br /> нас
          </p>
        </div>
        <div className="relative z-20">
          <img src="../public/about-us.png" alt="" className="h-2/3" />
        </div>
        <span
          className="absolute top-[60%] left-[50%] text-stone-600 font-semibold z-10 w-full translate-x-[-50%] translate-y-[-50%] text-6xl tracking-widest text-center"
          style={{}}
        >
          T - S H O P
        </span>
      </div>
      <RunningLine />
      <About />
    </>
  );
}

export default AboutUs;
