import { useQuery } from "@tanstack/react-query";
import CatalogFilter from "../components/CatalogFilter";
import { useSearchParams } from "react-router-dom";
import { getItems } from "../services/apiCatalog";
import ItemCard from "../components/ItemCard";
import SkeletonLoader from "../components/SkeletonLoader";
import { useGetOrCreateCart } from "../features/auth/useGetOrCreateCart";

function Catalog() {
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");
  const { data: cartData } = useGetOrCreateCart();
  const cartId = cartData?.id;

  console.log("cart id", cartId );

  const { data, isLoading, error } = useQuery({
    queryKey: ["items", currentCategory],
    queryFn: () => getItems(currentCategory),
  });

  return (
    <div className="base-dark text-stone-200 min-h-min ">
      <CatalogFilter />
      {/* {isLoading && <p className="min-h-svh">Loading... </p>} */}
      {isLoading && <SkeletonLoader />}
      {error && <p>{error.message}</p>}
      {data && data.length > 0 ? (
        <ul>
          {data.map((item) => (
            <ItemCard
              key={item.id}
              id={item.id}
              item={item}
              isLoading={isLoading}
              cart_id={cartId}
            />
          ))}
        </ul>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default Catalog;
