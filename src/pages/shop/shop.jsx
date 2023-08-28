import React, { useEffect, useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.scss";

export const Shop = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {}, [showAllProducts]);

  const handleViewAllClick = () => {
    setShowAllProducts(true);
  };

  return (
    <div className="shop">
      <div className="header-product">
        <div className="flex-header">
          <p>
            All
            <b> Products</b> From Megamart
          </p>
          <button onClick={handleViewAllClick}>View All</button>
        </div>
        <span></span>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};
