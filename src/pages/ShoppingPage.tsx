import ProductList from "../components/ShoppingCart/ProductList.tsx";
import "../shopping.css";

const ShoppingPage: React.FC = () => {
  return (
    <div className="shopping-page">
      <div className="shopping-container">
        <h1 className="shopping-page__title">Shopping Cart</h1>
        <ProductList />
      </div>
    </div>
  );
};

export default ShoppingPage;
