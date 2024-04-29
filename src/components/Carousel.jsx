import { useEffect, useState } from "react";

function Carousel({ images }) {
  const [slide, setSlide] = useState(0);

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
            className="w-full relative h-svh object-cover flex-shrink-0"
          >
            <div className="absolute w-[100px] top-[65px] left-[30px] uppercase text-stone-300  dela ">
              <span className="">{slide.title}</span> <br />
              <span className="text-stone-700 font-bold">₴ {slide.price}</span>
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
