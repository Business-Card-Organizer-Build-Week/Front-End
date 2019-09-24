import React from 'react';
import { Card } from 'semantic-ui-react';

const CardStyle2 = ({ data }) => {
  console.log(data)  
  return(
        
      <Card>
        <Card.Content>
          <Card.Header>{data.fname} {data.lname}</Card.Header>
          <Card.Meta>{data.title}</Card.Meta>
          <Card.Description>
            <p>{data.userphone}</p>
            <p>{data.useremail}</p>
            <p>{data.useraddress}</p>


          </Card.Description>
        </Card.Content>
        <Card.Content extra></Card.Content>
      </Card>
    
    )
    
}

export default CardStyle2