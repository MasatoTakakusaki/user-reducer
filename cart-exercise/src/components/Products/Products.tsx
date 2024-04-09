import { useEffect, useState } from "react";
import { useCartContext } from "../../useCartContext";
import { Product } from "../../types";

export const Products = () => {
  const { dispatch } = useCartContext();

  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCart = (product: Product) => {
    dispatch({ type: "addToCart", payload: product });
    // console.log("Product Item:", product);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Products</h1>
      <ul className="cart-list">
        {products.map((product) => (
          <li className="cart-item" key={product.id}>
            <div className="item">
              <div className="img-container">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-image"
                />
              </div>
              <div className="product-info">
                <p className="product-title">{product.title}</p>
                <button onClick={() => addToCart(product)}>Add to cart</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
