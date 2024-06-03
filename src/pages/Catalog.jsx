import CatalogFilter from "../components/CatalogFilter";
import ItemCard from "../components/ItemCard";

function Catalog() {
  return (
    <div className="base-dark">
      <CatalogFilter />
      <ItemCard />
      <ItemCard />
      <ItemCard />
    </div>
  );
}

export default Catalog;
