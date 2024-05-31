import { useSearchParams } from "react-router-dom";

function CatalogFilter() {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("categoory", value);
    setSearchParams(searchParams);
  }

  return (
    <div
      className="flex overflow-x-auto whitespace-nowrap scroll-snap-x base py-[75px]"
      style={{ scrollbarWidth: "none" }}
    >
      <button
        className="flex-shrink-0 font-semibold text-4xl uppercase py-2 px-6"
        onClick={() => handleClick("hoodies")}
      >
        худі
      </button>
      <button
        className="flex-shrink-0 font-semibold text-4xl uppercase py-2 px-6"
        onClick={() => handleClick("sweatshirts")}
      >
        світшоти
      </button>
      <button
        className="flex-shrink-0 font-semibold text-4xl uppercase py-2 px-6"
        onClick={() => handleClick("outerwear")}
      >
        верхній одяг
      </button>
      <button
        className="flex-shrink-0 font-semibold text-4xl uppercase py-2 px-6"
        onClick={() => handleClick("shorts")}
      >
        шорти
      </button>
      <button
        className="flex-shrink-0 font-semibold text-4xl uppercase py-2 px-6"
        onClick={() => handleClick("t-shirts")}
      >
        футболки
      </button>
      <button
        className="flex-shrink-0 font-semibold text-4xl uppercase py-2 px-6"
        onClick={() => handleClick("skirts")}
      >
        спідниці
      </button>
    </div>
  );
}

export default CatalogFilter;
