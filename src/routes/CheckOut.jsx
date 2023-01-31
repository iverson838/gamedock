import { useContext } from "react";
import { Cart } from "../contexts/Cart";
import "./CheckOut.scss";

const CheckOut = () => {
  const { cartItems, addItemToCart, removeItemToCart } = useContext(Cart);

  return (
    <div>
      ola
      {cartItems.map((cartItem) => {
        const { id, name, quantity } = cartItem;
        return (
          <div key={id}>
            <h2>{name} </h2>
            <span>{quantity} </span>
            <span onClick={() => removeItemToCart(cartItem)}>decrement </span>
            <span onClick={() => addItemToCart(cartItem)}>increment </span>
          </div>
        );
      })}
    </div>
  );
};

export default CheckOut;
