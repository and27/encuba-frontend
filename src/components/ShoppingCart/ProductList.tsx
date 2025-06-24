import React, { useState, createContext, useContext } from "react";
import ProductCard from "./ProductCard.tsx";
import Cart from "./Cart.tsx";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  getTotalPrice: () => number;
  getTotalItems: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
};

const ProductList: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Laptop Gaming",
      price: 1299.99,
      image: "https://picsum.photos/400/300?random=1",
      description: "High-performance gaming laptop with RTX graphics",
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 199.99,
      image: "https://picsum.photos/400/300?random=2",
      description: "Premium noise-cancelling wireless headphones",
    },
    {
      id: 3,
      name: "Smartphone",
      price: 799.99,
      image: "https://picsum.photos/400/300?random=3",
      description: "Latest flagship smartphone with advanced camera",
    },
    {
      id: 4,
      name: "Mechanical Keyboard",
      price: 149.99,
      image: "https://picsum.photos/400/300?random=4",
      description: "RGB mechanical keyboard with blue switches",
    },
    {
      id: 5,
      name: "4K Monitor",
      price: 449.99,
      image: "https://picsum.photos/400/300?random=5",
      description: "27-inch 4K monitor with HDR support",
    },
    {
      id: 6,
      name: "Wireless Mouse",
      price: 79.99,
      image: "https://picsum.photos/400/300?random=6",
      description: "Ergonomic wireless gaming mouse",
    },
  ];

  const addToCart = (product: Product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        return prevItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId)
    );
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const cartContextValue: CartContextType = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice,
    getTotalItems,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      <div className="shopping-page__content">
        <div className="products">
          <div className="products__grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        <Cart />
      </div>
    </CartContext.Provider>
  );
};

export default ProductList;
