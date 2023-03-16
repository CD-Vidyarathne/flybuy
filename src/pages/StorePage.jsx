import React from "react";
import ProductGrid from "../components/ProductGrid";
import "./StorePage.css";

import data from "../../data.json";
import logo from "../assets/logo.jpeg";
const StorePage = () => {
  const db = JSON.parse(JSON.stringify(data));

  console.log(db.phones);
  return (
    <div className="store">
      <main className="main">
        <img src={logo} alt="" className="logo" />
        <div className="filter-container">
          <select name="category" id="category">
            <option value="null" selected="selected">
              --Select a Category--
            </option>
            <option value="phones">Phones</option>
            <option value="watches">Watches</option>
            <option value="accessories">Accessories</option>
          </select>
          <button className="filter-btn">Filter</button>
        </div>
      </main>

      <section className="grid">
        <ProductGrid type="phones" />
        <ProductGrid type="watches" />
        <ProductGrid type="accessories" />
      </section>
    </div>
  );
};

export default StorePage;
