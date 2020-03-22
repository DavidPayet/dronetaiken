import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import '../styles/Drone.scss';

const Drone = (props) => {

  return (
    <div className="Drone" key={props.oneDrone.id}>

      <Card>
        <CardImg  width="100%" src={props.oneDrone.image} alt="Drone image" />
        <CardBody>
          <CardTitle>{props.oneDrone.marque}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick Drone text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button>{props.oneDrone.price}</Button>
        </CardBody>
      </Card>

    </div>
  );
};

export default Drone;