import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Shop.styles.scss";

export default function Shop() {
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const updateCart = () => {
    axios
      .get("/api/cart")
      .then((res) => setCart(res.data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    axios
      .get("/api/products")
      .then((res) => setAllProducts(res.data))
      .catch((err) => console.log(err));
    updateCart();
  }, []);
  const handleSendToCart = (product) => {
    const newProduct = { name: product.name, price: product.price };
    axios
      .post("/api/cart/send", newProduct)
      .then((res) => updateCart())
      .catch((err) => console.log(err));
  };
  return (
    <div className="all-products-wrapper">
      <div className="cart-container">{cart.length > 1 ? cart.length : 0}</div>
      {allProducts.map((product, index) => (
        <div
          className="product-container"
          onClick={() => handleSendToCart(product)}
        >
          <div className="name-price-container">
            <span className="name">{product.name}</span>
            <span className="price">{product.price}</span>
          </div>
          <div className="description-container">
            <span className="description">{product.description}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
