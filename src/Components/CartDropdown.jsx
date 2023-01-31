import { useContext } from "react";
import { Cart } from "../contexts/Cart";
import "./CartDropdown.scss";

import React from "react";
import CartItem from "./CartItem";

const CartDropdown = () => {
  const { cartItems } = useContext(Cart);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <button>Checkout</button>
    </div>
  );
};

export default CartDropdown;
