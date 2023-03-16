import React from "react";
import data from "../../data.json";
import SingleProduct from "./SingleProduct";

const ProductGrid = ({ type }) => {
  const category = JSON.parse(JSON.stringify(data));
  return (
    <div className="category">
      <div className="category-title">
        {type.charAt(0).toUpperCase() + type.slice(1).toLowerCase()}
      </div>
      <div className="products">
        {category.phones.map((item, i) => {
          return (
            <SingleProduct
              key={i}
              name={item.name}
              price={item.price}
              imageURL={item.imageURL}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
