import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import { createItem } from "../services/apiCatalog";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function AdminPage() {
  const { register, handleSubmit } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      console.log("item added");
      queryClient.invalidateQueries({
        queryKey: ["items"],
      });
    },
    onError: (err) => console.error(err),
  });

  function onSubmit(data) {
    mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-[75px] bg-stone-500">
      <FormRow>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" {...register("name")} />
      </FormRow>

      <FormRow>
        <label htmlFor="price">Price</label>
        <input type="number" id="price" {...register("price")} />
      </FormRow>

      <FormRow>
        <label htmlFor="article">Article</label>
        <input type="number" id="article" {...register("article")} />
      </FormRow>

      <FormRow>
        <label htmlFor="category">Category</label>
        <select type="text" id="category" {...register("category")}>
          <option value="hoodies">Худі</option>
          <option value="skirts">Спідниці</option>
          <option value="sweatshirts">Світшоти</option>
        </select>
      </FormRow>

      <FormRow>
        <label htmlFor="image">Image</label>
        <input accept="image/*" id="image" {...register("image")} />
      </FormRow>

      <button type="submit">Add</button>
      <button type="reset">Cancel</button>
    </form>
  );
}

export default AdminPage;
