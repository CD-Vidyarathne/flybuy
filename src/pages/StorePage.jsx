import React, { useState } from "react";
import data from "../../data.json";
import logo from "../assets/logo.jpeg";
import ProductGrid from "../components/ProductGrid";
import "./StorePage.css";

const StorePage = () => {
  const [cat, setCat] = useState("default");

  const db = JSON.parse(JSON.stringify(data));
  console.log(cat);
  console.log(db.phones);
  return (
    <div className="store">
      <main className="main">
        <img src={logo} alt="" className="logo" />
        <div className="filter-container">
          <select
            name="category"
            id="category"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          >
            <option value="default">All Products</option>
            <option value="phones">Phones</option>
            <option value="watches">Watches</option>
            <option value="accessories">Accessories</option>
          </select>
        </div>
      </main>

      <section className="grid">
        {cat == "default" ? (
          <>
            <ProductGrid type="phones" />
            <ProductGrid type="watches" />
            <ProductGrid type="accessories" />
          </>
        ) : (
          <>
            <ProductGrid type={cat} />
          </>
        )}
      </section>
    </div>
  );
};

export default StorePage;
