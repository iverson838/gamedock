import { useContext } from "react";
import { Cart } from "../contexts/Cart";
import "./CartDropdown.scss";
import { useNavigate } from "react-router-dom";

import React from "react";
import CartItem from "./CartItem";

const CartDropdown = () => {
  const { cartItems } = useContext(Cart);
  const navigate = useNavigate();

  const goToChekOutHandler = () => {
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} cartItem={item} />
        ))}
      </div>
      <button onClick={goToChekOutHandler}>Checkout</button>
    </div>
  );
};

export default CartDropdown;
