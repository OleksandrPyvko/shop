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
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={index}
            className="w-full h-svh object-cover flex-shrink-0"
          ></img>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
