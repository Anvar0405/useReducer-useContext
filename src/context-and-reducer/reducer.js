import { createContext, useReducer } from "react";
import storeReducer, { initialState } from "./StoreContext";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(storeReducer, initialState);

  const addToBasket = (product) => {
    const updatedBasket = state.products;
    updatedBasket.push(product);

    updatedPrice(updatedBasket);

    dispatch({
      type: "add",
      payload: updatedBasket,
    });
  };

  const removeFromBasket = (product) => {
    const updatedBasket = state.products.filter(
      (currenProduct) => currenProduct.name !== product.name
    );

    updatedPrice(updatedBasket);

    dispatch({
      type: "remove",
      payload: updatedBasket,
    });
  };

  const updatedPrice = (products) => {
    let total = 0;

    products.forEach((product) => {
      total += product.price;
    });

    dispatch({
      type: "update price",
      payload: total,
    });
  };

  const value = {
    total: state.total,
    products: state.products,
    addToBasket,
    removeFromBasket,
  };

  return (
    <StoreContext.Provider value={value}>{children}</StoreContext.Provider>
  );
};
