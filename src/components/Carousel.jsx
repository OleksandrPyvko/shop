import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Carousel({ images }) {
  const [slide, setSlide] = useState(0);
  const [scrollPosition, setScrollPosition] = useState();

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(
    function () {
      const interval = setInterval(() => {
        setSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, 6000);

      return () => clearInterval(interval);
    },
    [images]
  );

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex"
        style={{
          transform: `translateX(-${slide * 100}%)`,
          transition: "transform 0.5s ease",
        }}
      >
        {images.map((slide, index) => (
          <div
            key={index}
            className="w-full relative h-svh object-cover flex-shrink-0 "
            style={{
              transform: `translateY(${scrollPosition * 0.3}px)`,
            }}
          >
            <div className="absolute w-[100px] top-[65px] left-[30px] uppercase text-stone-300  dela ">
              <span
                className=""
                style={{
                  transform: `translateY(-${(scrollPosition * 0, 8)}px)`,
                }}
              >
                {slide.title}
              </span>
              <br />
              <span className="text-stone-700 font-bold">₴ {slide.price}</span>
              <button >
                <AiOutlineArrowRight className="text-stone-700 rounded-full bg-stone-500" />
              </button>
            </div>

            <img
              src={slide.img}
              alt={index}
              className="w-full h-svh object-cover flex-shrink-0"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
