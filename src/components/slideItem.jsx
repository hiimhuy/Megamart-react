import React, { useState } from "react";
import { PRODUCTS } from "../products";
import "./slideItem.scss";
import { ProductSlide } from "./productSlide";
import { CaretLeft, CaretRight } from "phosphor-react";

export const AdsSlide = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = PRODUCTS.length;

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="container">
      <div className="btn" onClick={prevSlide}>
        <div className="btn-child">
          <CaretLeft size={32} />
        </div>
      </div>

      <div className="all-slide">
        <ProductSlide data={PRODUCTS[currentSlide]} />
        <div className="spotlights">
          {PRODUCTS.map((spotlight, index) => (
            <div
              key={index}
              className={`spotlight ${currentSlide === index ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>
      <div className="btn" onClick={nextSlide}>
        <div className="btn-child">
          <CaretRight size={32} />
        </div>
      </div>
    </div>
  );
};
