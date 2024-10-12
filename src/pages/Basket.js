import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import BasketProduct from "../components/BasketProduct";
import { StoreContext } from "../context-and-reducer/reducer";

const Basket = () => {
  const { products, total } = useContext(StoreContext);

  return (
    <div className="w-full max-w-3xl mx-auto">
      <Navbar />
      <div className="flex flex-row items-center justify-between mt-2 py-6 px-10 text-xl font-medium">
        <h3>Your Basket</h3>
        <p>Total: {total}</p>
      </div>
      {products.map((product, i) => (
        <BasketProduct key={i} item={product} />
      ))}
    </div>
  );
};

export default Basket;
