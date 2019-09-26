import React from "react";
import CardStyle2 from "./CardStyle2";

const MyCard = ({ card }) => {
  console.log("card data", card);

  return (
    <div className="my-card">
      <CardStyle2 data={card} />
    </div>
  );
};

export default MyCard;
