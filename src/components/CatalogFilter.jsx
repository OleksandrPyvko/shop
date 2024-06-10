import { useSearchParams } from "react-router-dom";

function CatalogFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");

  function handleClick(value) {
    searchParams.set("category", value);
    setSearchParams(searchParams);
  }

  function buttonClass(value) {
    return `flex-shrink-0 font-semibold text-2xl uppercase py-2 px-4 text-stone-600  ${
      currentCategory === value ? "active underline" : ""
    }`;
  }

  return (
    <div
      className="flex overflow-x-auto whitespace-nowrap scroll-snap-x  pt-[75px]  "
      style={{ scrollbarWidth: "none" }}
    >
      <button
        className={buttonClass("hoodies")}
        onClick={() => handleClick("hoodies")}
      >
        худі
      </button>
      <button
        className={buttonClass("sweatshirts")}
        onClick={() => handleClick("sweatshirts")}
      >
        світшоти
      </button>
      <button
        className={buttonClass("outerwear")}
        onClick={() => handleClick("outerwear")}
      >
        верхній одяг
      </button>
      <button
        className={buttonClass("shorts")}
        onClick={() => handleClick("shorts")}
      >
        шорти
      </button>
      <button
        className={buttonClass("t-shirts")}
        onClick={() => handleClick("t-shirts")}
      >
        футболки
      </button>
      <button
        className={buttonClass("skirts")}
        onClick={() => handleClick("skirts")}
      >
        спідниці
      </button>
    </div>
  );
}

export default CatalogFilter;
