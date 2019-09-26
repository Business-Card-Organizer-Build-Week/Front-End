import React, { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom";
import MyCard from "./MyCard";
import CardCollection from "./CardCollection";
import AddCard from "./AddCard";
import Navbar from "./Navbar";
import { axiosWithAuth } from "./axiosWithAuth";
import PrivateRoute from "./PrivateRoute";

// import context
import { UserContext } from '../contexts/UserContext';

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
  const context = useContext(UserContext); // init context
  
  
  const [userContact, setUserContacts] = useState({});
  const [savedContacts, setSavedContacts] = useState({});

 
  useEffect(() => {
    const id = localStorage.getItem("USERID");
    axiosWithAuth()
      .get(`https://cardorganizer.herokuapp.com/api/users/user/${id}`)
      .then(res => {
        localStorage.setItem("CONTACTID",res.data.userContacts[0].contactid);
        let saved = res.data.savedContacts;
        let user = res.data.userContacts[0];
        
        setUserContacts(user);
        setSavedContacts(saved);
      })
      .catch(err => {
        console.error("Error", err);
      });
  },[]);

  return (
    <div className="pagebox">
      <UserContext.Provider value={{userContact, savedContacts}}>
      <Navbar />
      <Route exact path="/home" render={() => <MyCard />} />
      <Route
        path="/home/collection"
        render={() => <CardCollection />}
      />
      <Route path="/home/add" render={() => <AddCard />} />
      </UserContext.Provider>
    </div>
  );
};

export default Home;

