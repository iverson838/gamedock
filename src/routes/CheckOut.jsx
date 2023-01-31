import { useContext } from "react";
import { Cart } from "../contexts/Cart";
import "./CheckOut.scss";
import CheckoutItem from "../Components/CheckoutItem";

const CheckOut = () => {
  const { cartItems, cartTotal } = useContext(Cart);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      <span className="Total">Total : ${cartTotal}</span>
    </div>
  );
};

export default CheckOut;
