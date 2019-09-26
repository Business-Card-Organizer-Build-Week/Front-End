import React, { useContext } from "react";
import CardStyle2 from "./CardStyle2";

// import react
import { UserContext } from "../contexts/UserContext";

const CardCollection = () => {
  const context = useContext(UserContext);
  console.log("checking context: ", context.savedContacts);

  return (
    <div className="collection">
      {context.savedContacts.map((card) => (
        <CardStyle2 />
      ))}
    </div>
  );
};

export default CardCollection;
