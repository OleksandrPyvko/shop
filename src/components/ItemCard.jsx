export function ItemCard({ item, isLoading }) {
  return (
    <>
      {isLoading ? (
        "Loading"
      ) : (
        <div className=" py-6 px-4 shadow-xl text-stone-300 h-lvh w-full divide-y divide-stone-600">
          <img
            src={item.image}
            alt="item-image"
            className="h-96 w-full object-cover"
          />
          <p className="py-1 uppercase">{item.name}</p>
          <div className="flex justify-between py-1">
            <span className="text-sm text-stone-400">
              Артикул: {item.article}
            </span>
            <p className="">{item.price} UAH</p>
          </div>
        </div>
      )}
    </>
  );
}

export default ItemCard;

{
  /* <div className=" py-6 px-4 shadow-xl text-stone-300 h-lvh w-full divide-y divide-stone-600">
      <img
        src={item.image}
        alt="item-image"
        className="h-96 w-full object-cover"
      />
      <p className="py-1 uppercase">{item.name}</p>
      <div className="flex justify-between py-1">
        <span className="text-sm text-stone-400">Артикул: {item.article}</span>
        <p className="">{item.price} UAH</p>
      </div>
    </div> */
}
