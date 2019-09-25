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
  const [fetch, setFetch] = useState(true);
  const id = localStorage.getItem("USERID")
  useEffect(() => {
    axiosWithAuth()
      .get(`https://cardorganizer.herokuapp.com/api/users/user/${id}`)
      .then(res => {
        // console.log("card res", res.data.savedContacts);
        setCard(res.data);
        setContacts(res.data.savedContacts);
        setFetch(false);
        // console.log("inside axios home", card);
      })

      .catch(err => {
        console.log("Error", err);
      });
  }, [fetch]);
// setTimeout(()=>{
//     setFetch(!fetch)
// }, 2000)
  console.log("this is the current card's contacts:", contacts);
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
