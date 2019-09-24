import React from "react";
import { Card, Image } from "semantic-ui-react";

const CardStyle1 = props => {
  return (
    <div>
      <Card>
        <Card.Content>
          <Image
            floated="left"
            size="mini"
            src={props.image}
          />
          <Card.Header>{props.name}</Card.Header>
          <Card.Meta>Role</Card.Meta>
          <Card.Description>
            
          </Card.Description>
        </Card.Content>
        <Card.Content extra></Card.Content>
      </Card>
    </div>
  );
};

export default CardStyle1;
