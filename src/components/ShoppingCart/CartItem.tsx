import React from "react";
import { CartItem as CartItemType, useCart } from "./ProductList.tsx";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (newQuantity: number) => {
    updateQuantity(item.id, newQuantity);
  };

  const handleRemove = () => {
    removeFromCart(item.id);
  };

  return (
    <div className="cart-item">
      <div className="cart-item__image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="cart-item__details">
        <h4 className="cart-item__name">{item.name}</h4>
        <p className="cart-item__price">${item.price.toFixed(2)} each</p>
      </div>
      <div className="cart-item__controls">
        <div className="cart-item__quantity">
          <button
            className={`cart-item__quantity-btn ${
              item.quantity <= 1 ? "cart-item__quantity-btn--disabled" : ""
            }`}
            onClick={() => handleQuantityChange(item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
            -
          </button>
          <span className="cart-item__quantity-display">{item.quantity}</span>
          <button
            className="cart-item__quantity-btn"
            onClick={() => handleQuantityChange(item.quantity + 1)}
          >
            +
          </button>
        </div>
        <div className="cart-item__total">
          ${(item.price * item.quantity).toFixed(2)}
        </div>
        <button className="cart-item__remove" onClick={handleRemove}>
          ×
        </button>
      </div>
    </div>
  );
};

export default CartItem;
