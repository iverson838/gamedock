import { useContext } from "react";
import { Cart } from "../contexts/Cart";
import "./ProductCard.scss";
import React from "react";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  const { addItemToCart } = useContext(Cart);

  const addProductToCart = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name"></span>
        <span className="price"></span>
        <button onClick={addProductToCart}>Add to cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
