import React, { useState } from "react";

function Item({ name, category }) {
  const [InCart, setInCart] = useState(false);

  function handleAddToCartClick() {
    setInCart((InCart) => !InCart);
  }

  return (
    <li className={InCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={InCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {InCart ? "Remove From" : "Add to"} Cart
      </button>
    </li>
  );
}

export default Item;

