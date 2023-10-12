import React from "react";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import "./Products.css";
import { NavLink } from "react-router-dom";

function Products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        // const itemId = data.id;
        setProduct(data);
      })
      .catch((error) => {
        console.log("Something went wrong while fetching Api: ", error);
      });
  }, []);

  let Product = product.map((p) => {
    return (
      <NavLink to={`/products/${p.id}`}>
        <div className="cardItem">
          <img src={p.image} />
          <h2>{p.title}</h2>
        </div>
      </NavLink>
    );
  });

  return (
    <div>
      <Card product={Product} />
    </div>
  );
}

export default Products;
