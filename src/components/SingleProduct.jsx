import React from "react";
import "./SingleProduct.css";

const SingleProduct = ({ name, price, imageURL }) => {
  return (
    <div className="product">
      <img src={imageURL} alt="" className="product-img" />
      <h1 className="product-name">{name}</h1>
      <p className="product-price">Rs.{price}.00</p>
      <a href="https://m.me/flybuytextile" className="buynow-btn">
        <div>Buy Now</div>
      </a>
    </div>
  );
};

export default SingleProduct;
