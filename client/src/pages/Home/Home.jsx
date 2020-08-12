import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./Home.styles.scss";

export default function Home() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const handleAddProduct = () => {
    const newProduct = { name, price, description };
    axios
      .post("/api/products/add", newProduct)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return (
    <div className="home-wrapper">
      <div className="inputs-wrapper">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="name"
        ></input>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="price"
        ></input>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="description"
        ></input>
        <button type="submit" onClick={() => handleAddProduct()}>
          ADD
        </button>
        <Link to="/shop">Mergi catre magazin</Link>
      </div>
    </div>
  );
}
