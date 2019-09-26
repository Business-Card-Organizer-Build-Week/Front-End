import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import MyCard from "./MyCard";
import CardCollection from "./CardCollection";
import AddCard from "./AddCard";
import Navbar from "./Navbar";
import { axiosWithAuth } from "./axiosWithAuth";
import PrivateRoute from "./PrivateRoute";

// Need id off props from somewhere

// //replaced 'card' in props to 'fakedata' for testing
// const fakedata = {
//   "username": "admin",
//   "fname": "John",
//   "lname": "Smith",
//   "busname": "TestBusName",
//   "title": "Title",
//   "contactid": 8,
//   "useremail": "test@test.com",
//   "userphone": "5555555555",
//   "useraddress": "TestAddress",
//   "usercity": "Test City",
//   "userState": "ST",
//   "userzip": "55555",
//   "usercontacttype": {
//       "contacttypeid": 4,
//       "contacttype": "Business"
//   }
// };

const Home = () => {
  const [card, setCard] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [fetch, setFetch] = useState(true);
  const id = localStorage.getItem("USERID");
  useEffect(() => {
    console.log('useEffect fired!')
    axiosWithAuth()
      .get(`https://cardorganizer.herokuapp.com/api/users/user/${id}`)
      .then(res => {
        // console.log("card res", res.data.savedContacts.userContact);
        setCard(res.data);
        console.log("what is saved contacts?",card);
        setContacts(res.data.savedContacts);
        // console.log("contacts in axios",contacts);
        setFetch(false);
        // console.log("inside axios home", card);
      })
      .catch(err => {
        console.error("Error", err);
      });
  },[]);
  // setTimeout(()=>{
  //     setFetch(!fetch)
  // }, 2000)
  console.log("this is the current card", card);
  console.log("this is the current card's contacts:", contacts);
  return (
    <div className="pagebox">
      <Navbar />
      <Route exact path="/home" render={() => <MyCard card={card} />} />
      <Route
        path="/home/collection"
        render={() => <CardCollection contacts={contacts} />}
      />
      <Route path="/home/add" render={() => <AddCard />} />
    </div>
  );
};

export default Home;
