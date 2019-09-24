import React from 'react';
import { Route } from 'react-router-dom';
import MyCard from './MyCard';
import CardCollection from './CardCollection';
import AddCard from './AddCard';
import Navbar from './Navbar';

const fakeuserdata = {
    "fname": "John",
    "lname": "Smith",
    "busname": "TestBusName",
    "title": "Title",
    "useremail": "testAddContact@test.com",
    "userphone": "5555555555",
    "useraddress": "TestAddress",
    "usercity": "Test City",
    "userState": "ST",
    "userzip": "55555",
    "usercontacttype": {
        "contacttypeid": 4 
                       }
}
const Home = () => {
    return(
        <div className='pagebox'>
          
            <Navbar />

            <MyCard data={fakeuserdata}/>
            <Route path='/collection' render={() => <CardCollection />}/>
            <Route path='/add' render={() => <AddCard />}/>


   
        </div>

    )
}

export default Home
