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
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    axiosWithAuth()
      .get(`https://cardorganizer.herokuapp.com/api/users/user/7`)
      .then(res => {
        console.log("card res", res.data.savedContacts);
        setCard(res.data);
        console.log("inside axios home", card);
      })
      .then(res => {
        setContacts(res.data.savedContacts);
      })
      .catch(err => {
        console.log("Error", err);
      });
  }, []);

  console.log("this is the current card's contacts:", card.savedContacts);
  return (
    <div className="pagebox">
      <Navbar />
      <Route exact path="/home" render={() => <MyCard data={card} />} />
      <Route
        path="/home/collection"
        render={() => <CardCollection contacts={contacts} />}
      />
      <Route path="/home/add" render={() => <AddCard />} />
    </div>
  );
};

export default Home;
