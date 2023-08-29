import React, { useState } from "react";
import { DAILY, PRODUCTS, CATEGORIES } from "../../products";
import { Product } from "./product";
import "./shop.scss";
import { XCircle } from "phosphor-react";
import { Categories } from "../../components/Categories";
import "../../components/categories.scss";
import { DailyEssential } from "../../components/DailyEssential";
import "../../components/dailyEssential.scss";

export const Shop = () => {
  const [showAllProducts, setShowAllProducts] = useState(false);

  const handleViewAllClick = () => {
    setShowAllProducts(!showAllProducts);
  };

  return (
    <div className="container-shop">
      <section className="shop">
        <div className="header-product">
          <div className="flex-header">
            <p>
              All
              <b> Products</b> From Megamart
            </p>
            <button onClick={handleViewAllClick}>
              {!showAllProducts ? "View All" : <XCircle size={32} />}
            </button>
          </div>
          <span></span>
        </div>
        <div className="products">
          {!showAllProducts
            ? PRODUCTS.slice(0, 4).map((product) => (
                <Product key={product.id} data={product} />
              ))
            : PRODUCTS.map((product) => (
                <Product key={product.id} data={product} />
              ))}
        </div>
      </section>
      <section className="categories">
        <div className="header-product">
          <div className="flex-header">
            <p>
              Shop From
              <b> Top Categories</b>
            </p>
            <button>View All</button>
          </div>
          <span></span>
        </div>
        <div className="bottom">
          {CATEGORIES.map((item) => (
            <Categories key={item.id} data={item} />
          ))}
        </div>
      </section>
      <section className="essential">
        <div className="flex-header">
          <p>
            Shop From
            <b> Top Categories</b>
          </p>
          <button>View All</button>
        </div>
        <span></span>
        <div className="items">
          {DAILY.map((daily) => (
            <DailyEssential key={daily.id} data={daily} />
          ))}
        </div>
      </section>
    </div>
  );
};
