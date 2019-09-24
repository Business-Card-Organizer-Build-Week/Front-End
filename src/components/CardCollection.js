import React from 'react';
import CardStyle2 from './CardStyle2';

const fakecontacts = [
    {
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
    },
    {
        "username": "admin",
        "fname": "Jane",
        "lname": "Doe",
        "busname": "TestBusName",
        "title": "Title",
        "contactid": 9,
        "useremail": "test@test.com",
        "userphone": "5555555555",
        "useraddress": "TestAddress",
        "usercity": "Test City",
        "userState": "ST",
        "userzip": "55555",
        "usercontacttype": {
            "contacttypeid": 5,
            "contacttype": "Home"
        }
    }

];

const CardCollection = () => {
    return(
        <div>
           {fakecontacts.map(contact => (
               <CardStyle2 data={contact}/>))}
        </div>
    )
}

export default CardCollection