import React, { useContext } from "react";
import { StoreContext } from "../context-and-reducer/reducer";

const BasketProduct = ({ item }) => {
  const { removeFromBasket } = useContext(StoreContext);

  const handleRemove = () => {
    removeFromBasket(item);
  };

  return (
    <div>
      <img src={item.image} alt={item.name + "glasses"} className="w-40" />
      <div className="w-1/2 px-10">
        <p className="text-xl font-medium">{item.name}</p>
        <p className="text-lg">{item.price}</p>
      </div>
      <button
        className="bg-gray-500 text-white text-lg font-medium rounded-lg p-4 hover:bg-red-500"
        onClick={handleRemove}
      >
        Remove
      </button>
    </div>
  );
};

export default BasketProduct;
