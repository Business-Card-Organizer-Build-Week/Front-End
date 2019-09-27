import React, { useContext } from "react";
import CardStyle2 from "./CardStyle2";
import MyQRCode from "./MyQRCode";
import { UserContext } from "../contexts/UserContext";
import { Link, Route } from "react-router-dom";

const MyCard = ({ card }) => {
  const context = useContext(UserContext);
  return (
    <div className="my-card">
      
      
      <Link to="/home/myqrcode"><CardStyle2 /></Link>
      <Route exact path="/home/myqrcode" render={() => <MyQRCode />} />
      
    </div>
  );
};

export default MyCard;
