import { useForm } from "react-hook-form";
import FormRow from "../components/FormRow";
import { createItem } from "../services/apiCatalog";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function AdminPage() {
  const { register, handleSubmit, reset } = useForm();

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createItem,
    onSuccess: () => {
      console.log("item added");
      queryClient.invalidateQueries({
        queryKey: ["items"],
      });
      reset();
    },
    onError: (err) => console.error(err),
  });

  function onSubmit(data) {
    mutate({...data, image: data.image[0]});
    
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="py-[75px] bg-stone-500 px-6 flex flex-col gap-2">
      <FormRow>
        <label htmlFor="name" className="w-24">Name</label>
        <input type="text" id="name" {...register("name", {required: 'Введіть назву'})} />
      </FormRow>

      <FormRow>
        <label htmlFor="price" className="w-24">Price</label>
        <input type="number" id="price" {...register("price")} />
      </FormRow>

      <FormRow>
        <label htmlFor="article" className="w-24">Article</label>
        <input type="number" id="article" {...register("article")} />
      </FormRow>

      <FormRow>
        <label htmlFor="category" className="w-24">Category</label>
        <select type="text" id="category" {...register("category")}>
          <option value="hoodies">Худі</option>
          <option value="skirts">Спідниці</option>
          <option value="sweatshirts">Світшоти</option>
        </select>
      </FormRow>

      <FormRow>
        <label htmlFor="image" className="w-24">Image</label>
        <input accept="image/*" type='file' id="image" {...register("image")} />
      </FormRow>

      <button disabled={isLoading} type="submit" className="bg-emerald-400">
        Add
      </button>
      <button type="reset">Cancel</button>
    </form>
  );
}

export default AdminPage;
