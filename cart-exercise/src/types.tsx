export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
};

export type ActionType =
  | { type: "addToCart"; payload: Product }
  | { type: "resetCart" };

export type State = {
  cartList: Product[];
};
