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
            <h1>A Propos</h1>
            <p>Bienvenue sur DRONE TAIKEN, un site qui vous propose une gamme de drones sélectionnés pour vous accompagner lors de vos loisirs.</p>
            <p>Vivez des expériences uniques aux commandes de l'un d'eux grâce à des prises de vue inédites et spectaculaires.</p>
            <p>Que ce soit en télépilotage à vue direct, en vol en immersion par vidéotransmission ou encore en autopilotage par reconnaissance visuelle ou GPS, le drone à vocation à être utilisé dans de nombreux domaines d'application.</p>
            <p>Voyez votre monde d'un nouvel œil avec DRONE TAIKEN.</p>
          </Col>
          <Col className="d-none d-sm-block" xl="2" lg="2" md="2" sm="12" xs="12">
            <img className="drone" src="/medias/drone1.png" alt="Drone"/>
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default About;