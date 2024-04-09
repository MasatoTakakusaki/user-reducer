import { Products } from "./components/Products/Products";
import { Carts } from "./components/Carts/Carts";
import { CartProvider } from "./CartProvider";

function App() {
  return (
    <div className="Container">
      <CartProvider>
        <Carts />
        <Products />
      </CartProvider>
    </div>
  );
}

export default App;
