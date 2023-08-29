import React from "react";

export const Categories = (props) => {
  const { id, cateName, cateImg } = props.data;

  return (
    <div className="cate">
      <div className="image">
        <img src={cateImg} />
      </div>
      <p>
        <b>{cateName}</b>
      </p>
    </div>
  );
};
