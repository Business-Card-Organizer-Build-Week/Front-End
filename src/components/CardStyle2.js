import React from "react";
import { Icon } from "semantic-ui-react";
import { Link, Route } from "react-router-dom";
import { EditCardForm } from "./EditCardForm";
import Modali, {useModali} from "modali";

const CardStyle2 = ({ data }) => {
  console.log("cardstyle contact check",data.userContacts);
  const userContacts = [data.userContacts];
  console.log([userContacts])
const [editModal, toggleEditModal]= useModali();

  console.log("cardstyle datachecK",data);
  return (
    <div className="card">
      {/* <Link to="/editform"> */}
        <div className="edit-icon" onClick={toggleEditModal}></div>
      {/* </Link> */}
      {/* <>
        <Route path="/editform" render={() => <EditCardForm />} />
      </> */}
      
      <div className="card-content">
        <div className="header">
          {data.fname} {data.lname}
        </div>
        <div className="meta">
          {data.title} - {data.busname}
        </div>
        <hr className="divider" />
        <div className="description">
          <p>
            <Icon name="mobile" /> {userContacts[0].userphone}
          </p>
          <p>
            <Icon name="keyboard" /> {data.useremail}
          </p>
          <p>
            <Icon name="envelope" />
            {data.useraddress} {data.usercity},{data.userState} {data.userzip}
          </p>
        </div>
      </div>
    </div>
  );
};


export default CardStyle2;
