import React, { useContext } from "react";
import { Icon, Modal, Button } from "semantic-ui-react";
import { Link, Route } from "react-router-dom";
import  EditCardForm  from "./EditCardForm";
import { UserContext } from '../contexts/UserContext';


const CardStyle2 = () => {
  // console.log("cardstyle contact check",data.userContacts);
  // const userContacts = [data.userContacts];
  // console.log([...userContacts])
// const [editModal, toggleEditModal]=useModali();
const context = useContext(UserContext);
console.log(context)
  // console.log("cardstyle datachecK",data);
  return (
    <div className="card">
      <Link to='/editform' className='edit-icon'>
      <Icon name="edit" size="small" />
      </Link>
     
      
      <div className="card-content">
        <div className="header">
          {context.userContact.fname} {context.userContact.lname}
        </div>
        <div className="meta">
          {context.userContact.title} - {context.userContact.busname}
        </div>
        <hr className="divider" />
        <div className="description">
          <p>
            <Icon name="mobile" /> {context.userContact.userphone}
          </p>
          <p>
            <Icon name="keyboard" /> {context.userContact.useremail}
          </p>
          <p>
            <Icon name="envelope" />
            {context.userContact.useraddress} {context.userContact.usercity},{context.userContact.userState} {context.userContact.userzip}
          </p>
        </div>
      </div>
    </div>
  );

  
};


export default CardStyle2;
