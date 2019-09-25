import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import MyCard from "./MyCard";
import CardCollection from "./CardCollection";
import AddCard from "./AddCard";
import Navbar from "./Navbar";
import { axiosWithAuth } from "./axiosWithAuth";
import PrivateRoute from "./PrivateRoute";

// Need id off props from somewhere

//replaced 'card' in props to 'fakedata' for testing
const fakedata = {
  "username": "admin",
  "fname": "John",
  "lname": "Smith",
  "busname": "TestBusName",
  "title": "Title",
  "contactid": 8,
  "useremail": "test@test.com",
  "userphone": "5555555555",
  "useraddress": "TestAddress",
  "usercity": "Test City",
  "userState": "ST",
  "userzip": "55555",
  "usercontacttype": {
      "contacttypeid": 4,
      "contacttype": "Business"
  }
};

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
      <Route exact path="/home" render={() => <MyCard data={fakedata} />} />
      <Route
        path="/home/collection"
        render={() => <CardCollection contacts={contacts} />}
      />
      <Route path="/home/add" render={() => <AddCard />} />
    </div>
  );
};

export default Home;
