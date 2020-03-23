import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/BasketPage.scss';

const BasketPage = () => {
  return (
    <div className="BasketPage">
      <h1>Mon Panier</h1>
      <Container className="basketPage">
        <Row>
          <Col className="d-none d-sm-block" xl="5" lg="5" md="5" sm="5" xs="5">
            <p>Article</p>
          </Col>
          <Col className="d-none d-sm-block" xl="2" lg="2" md="2" sm="2" xs="2">
            <p>Prix unitaire</p>
          </Col>
          <Col className="d-none d-sm-block" xl="2" lg="2" md="2" sm="2" xs="2">
            <p>Quantité</p>
          </Col>
          <Col className="d-none d-sm-block" xl="2" lg="2" md="2" sm="2" xs="2">
            <p>Prix</p>
          </Col>
          <Col className="d-none d-sm-block" xl="1" lg="1" md="1" sm="1" xs="1">
            <p>U</p>
          </Col>
        </Row>
      </Container>
      
    </div>
  )
};

export default BasketPage;
