import React from "react";
import "./SingleProduct.css";

const SingleProduct = ({ name, price, imageURL }) => {
  return (
    <div class="card">
      <div class="imgBox">
        <img src={imageURL} alt={name} class="product-img" />
      </div>

      <div class="contentBox">
        <h3>{name}</h3>
        <h2 class="price">
          Rs. {price}.<small>00</small>
        </h2>
        <a href="https://m.me/flybuytextile" class="buy" target="_blank">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default SingleProduct;
