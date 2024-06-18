import { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import LinkButton from "../ui/LinkButton";

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
          transition: "transform 1s ease",
        }}
      >
        {images.map((slide, index) => (
          <div
            key={index}
            className="w-full relative h-svh object-cover flex-shrink-0 "
            style={{
              transform: `translateY(${scrollPosition * 0.4}px)`,
            }}
          >
            <div className="absolute font-semibold text-shadow-bright w-[110px] top-[10%] left-[10%] uppercase text-stone-700  text-2xl flex flex-col md:text-4xl md:left-[10%] md:top-[20%] lg:text-6xl lg:font-normal ">
              <span>{slide.title}</span>

              <span className="text-stone-200 font-normal text-3xl my-1 mb-3 text-shadow-stone">
                ₴ {slide.price}
              </span>
              <LinkButton></LinkButton>
            </div>

            <img
              srcSet={`${slide.imgSmall} 480w, ${slide.imgMedium} 768w, ${slide.imgLarge} 1200w`}
              src={slide.img}
              alt={index}
              loading="lazy"
              className="w-full h-svh object-cover flex-shrink-0"
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
