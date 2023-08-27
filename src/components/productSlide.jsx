import React from "react";

export const ProductSlide = (props) => {
  const { productName, price, productImage } = props.data;

  return (
    <div>
      <div className="slides">
        <div className="slide-item">
          <div className="slide-item-left">
            <p>{productName}</p>
            <p>${price}</p>
            <div className="slide-item-id"></div>
          </div>
          <div className="slide-item-right">
            <img src={productImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
