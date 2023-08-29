import React from "react";

export const DailyEssential = (props) => {
  const { id, dailyName, dailyImg, description } = props.data;

  return (
    <div className="item-daily">
      <div className="image">
        <img src={dailyImg} alt="" />
      </div>
      <p>
        <b>{dailyName}</b>
      </p>
      <h1>{description}</h1>
    </div>
  );
};
