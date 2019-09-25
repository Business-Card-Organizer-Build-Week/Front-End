import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import MyCard from "./MyCard";
import CardCollection from "./CardCollection";
import AddCard from "./AddCard";
import Navbar from "./Navbar";
import { axiosWithAuth } from "./axiosWithAuth";
import PrivateRoute from "./PrivateRoute";

// Need id off props from somewhere
const Home = () => {
  const [card, setCard] = useState([]);
useEffect(()=>{
     axiosWithAuth()
    .get(`https://cardorganizer.herokuapp.com/api/users/user/7`)
    .then(res => {
      console.log("card res", res.data);
      setCard(res.data);
      console.log("inside axios home", card);
    })
    .catch(err => {
      console.log("Error", err);
    });
}, [])
 

  console.log("this is the current card:", card);
  return (
    <div className="pagebox">
      <Navbar />
      <Route exact path="/home" render={() => <MyCard data={card} />} />
      <Route path="/home/collection" render={() => <CardCollection />} />
      <Route path="/home/add" render={() => <AddCard />} />
    </div>
  );
};

export default Home;
