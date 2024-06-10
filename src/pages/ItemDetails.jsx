import { useParams } from "react-router-dom";
import { getItemDetails } from "../services/apiCatalog";
import { useQuery } from "@tanstack/react-query";

function ItemDetails() {
  const { id } = useParams();
  const { data, isLoading, error } = useQuery({
    queryKey: ["item", id],
    queryFn: () => getItemDetails(id),
  });

  return (
    <>
      {isLoading ? (
        <div className="pt-[75px]">Loading...</div>
      ) : (
        <div>
          <img src={data?.image} alt="" />
        </div>
      )}
    </>
  );
}

export default ItemDetails;
