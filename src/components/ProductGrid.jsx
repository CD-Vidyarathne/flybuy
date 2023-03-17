import React from "react";
import JSONdata from "../../data.json";
import "./ProductGrid.css";
import SingleProduct from "./SingleProduct";

const ProductGrid = ({ type }) => {
  const data = JSON.parse(JSON.stringify(JSONdata));

  let products;
  switch (type) {
    case "phones":
      products = data.phones.map((item, i) => {
        return (
          <SingleProduct
            key={i}
            name={item.name}
            price={item.price}
            imageURL={item.imageURL}
          />
        );
      });
      break;
    case "watches":
      products = data.watches.map((item, i) => {
        return (
          <SingleProduct
            key={i}
            name={item.name}
            price={item.price}
            imageURL={item.imageURL}
          />
        );
      });
      break;
    case "accessories":
      products = data.accessories.map((item, i) => {
        return (
          <SingleProduct
            key={i}
            name={item.name}
            price={item.price}
            imageURL={item.imageURL}
          />
        );
      });
      break;
    default:
      break;
  }

  return (
    <div className="category">
      <div className="category-title">
        {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
      </div>
      <div className="products">{products}</div>
    </div>
  );
};

export default ProductGrid;
