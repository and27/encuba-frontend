import React from "react";
import { useCart } from "./ProductList.tsx";
import CartItem from "./CartItem.tsx";

const Cart: React.FC = () => {
  const { cartItems, getTotalPrice, getTotalItems } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart">
        <h2 className="cart__title">Shopping Cart</h2>
        <div className="cart__empty">
          <p>Empty cart</p>
        </div>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2 className="cart__title">Shopping Cart ({getTotalItems()} items)</h2>
      <div className="cart__items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart__summary">
        <div className="cart__total">
          <strong>Total: ${getTotalPrice().toFixed(2)}</strong>
        </div>
        <button className="cart__checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
