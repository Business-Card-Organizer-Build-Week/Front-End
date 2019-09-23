import React from 'react';
import { Card} from 'semantic-ui-react';

const CardStyle2 = (props) => {
    return(
        
      <Card>
        <Card.Content>
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>Role</Card.Meta>
          <Card.Description>
            
          </Card.Description>
        </Card.Content>
        <Card.Content extra></Card.Content>
      </Card>
    
    )
    
}

export default CardStyle2