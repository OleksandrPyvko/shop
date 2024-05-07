import { useEffect, useState } from "react";

function RunningLine() {
  const [scrollPosition, setScrollPosition] = useState();

  useEffect(function () {
    function handleScroll() {
      setScrollPosition(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="bg-stone-800 py-8 dela relative flex justify-center items-center ">
      <span
        className="text-stone-400  absolute top-50  flex overflow-hidden"
        style={{
          left: `${scrollPosition / 6}px `,
        }}
      >
        #T-SHOP_CULTURE
      </span>
    </div>
  );
}

export default RunningLine;
