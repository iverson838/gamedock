import { useContext, Fragment } from "react";
import { CategoriesContext } from "../contexts/Categories";
import CategoryPreview from "../Components/CategoryPreview";
import "./Shop.scss";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
};

export default Shop;
