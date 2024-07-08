import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteItem, getItems } from "../services/apiCatalog";
import AdminPage from "./AdminPage";

function Test() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["items"],
    queryFn: () => getItems("hoodies"),
  });

  const queryClient = useQueryClient();

  const { mutate, isLoading: isMutating } = useMutation({
    mutationFn: deleteItem,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["items"],
      });
    },
    onError: (err) => console.error(err),
  });

  function handleDelete(id) {
    mutate(id);
    console.log("clicked");
  }

  return (
    <>
      <AdminPage />
      {isLoading && "loading"}
      <div>
        {data?.map((item) => (
          <div key={item.id} className="w-full bg-stone-500">
            <img
              className="h-[300px] w-[300px] object-cover"
              src={item.image}
              alt={item.name}
            />
            <button
              onClick={() => handleDelete(item.id)}
              className="px-4 py-2 bg-red-300 rounded"
            >
              Delete
            </button>

            <button className="px-4 py-2 bg-green-300 rounded">Edit</button>
            <span>{item.id}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default Test;
