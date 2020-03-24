import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/About.scss';

const About = () => {
  return (
    <div className="About">
      <Container className="about">
        <Row>
          <Col xl="2" lg="2" md="2" sm="1" xs="1" />
          <Col xl="8" lg="8" md="8" sm="10" xs="10">
            <h1>Bienvenue sur DRONE TAIKEN</h1>
            <p>Un site qui vous propose une gamme de drones sélectionnés pour vous accompagner lors de vos différentes activiés.</p>
            <br />
            <p>Que ce soit en télépilotage à vue direct, en vol immersif par vidéotransmission ou même en autopilotage par reconnaissance visuelle ou GPS,
            <br />
            Vivez des expériences photos et videos uniques !</p>
            <br />
            <p>Grâce à sa capacité de prises de vue inédites et spectaculaires, le drone a voccation à être employer dans de nombreux domaines d'application.</p>
            <br />
            <p>Voyez le monde d'un nouvel œil avec <span>DRONE TAIKEN</span>.</p>
          </Col>
          <Col className="d-none d-sm-block" xl="2" lg="2" md="2" sm="12" xs="12">
            <img className="drone" src="/medias/drone1.png" alt="Drone" />
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default About;