import { useCartContext } from "../../useCartContext";

export const Carts = () => {
  const { state, dispatch } = useCartContext();
  const resetCart = () => {
    dispatch({ type: "resetCart" });
  };

  // console.log("Cart List:", state.cartList);

  return (
    <div className="cart-container">
      {" "}
      <div className="cart-header">
        {" "}
        <h1 className="cart-title">Carts</h1>
        <button className="cart-reset-button" onClick={() => resetCart()}>
          Reset
        </button>
      </div>
      {state.cartList.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul className="cart-list">
          {" "}
          {state.cartList.map((item) => (
            <li className="cart-item" key={item.id}>
              {" "}
              <div>
                <img src={item.image} alt={item.title} />
                <span>{item.title}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
