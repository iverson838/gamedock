import { useContext } from "react";
import "./CartIcon.scss";
import { ReactComponent as ShoppingIcon } from "../assets/shopping-bag.svg";
import { Cart } from "../contexts/Cart";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(Cart);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;