import { useQuery } from "@tanstack/react-query";
import CatalogFilter from "../components/CatalogFilter";
import { useSearchParams } from "react-router-dom";
import { getItems } from "../services/apiCatalog";
import ItemCard from "../components/ItemCard";

function Catalog() {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");

  const { data, isLoading, error } = useQuery({
    queryKey: ["items", currentCategory],
    queryFn: () => getItems(currentCategory),
  });

  return (
    <div className="base-dark text-stone-200 min-h-min ">
      <CatalogFilter />
      {isLoading && <p className="min-h-svh">Loading... </p>}
      {error && <p>{error.message}</p>}
      {data && data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <ItemCard key={item.id} id={item.id} item={item} isLoading={isLoading} />
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Catalog;
