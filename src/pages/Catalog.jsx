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
    <div className="base-dark">
      <CatalogFilter />
      {isLoading && <p>Loading... </p>}
      {error && <p>{error.message}</p>}
      {data && data.length > 0 ? (
        data.map((item) => {
          <ItemCard item={item} />;
        })
      ) : (
        <p>No items found</p>
      )}

      <p>fdssdfsdf</p>
    </div>
  );
}

export default Catalog;
