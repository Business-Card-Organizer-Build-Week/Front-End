import React,{ useContext } from "react";
import CardStyle2 from "./CardStyle2";
import MyQRCode from './MyQRCode'
import { UserContext } from "../contexts/UserContext";


const MyCard = ({ card }) => {
const context = useContext(UserContext);
  return (
    <div className="my-card">
      <CardStyle2 />
      <MyQRCode />
      
    </div>
  );
};


export default MyCard;
