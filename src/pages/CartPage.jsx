import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/CartPage.scss';
import Cart from '../components/Cart';

const CartPage = () => {
  return (
    <div className="CartPage" onClick={window.scrollTo(0, 0)}>
      <h1>Mon Panier</h1>
      <Container className="cartPage">
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
          <Col className="d-none d-sm-block" xl="1" lg="1" md="1" sm="1" xs="1" />
        </Row>
      </Container>
      <Cart stripeToken="pk_test_26Vvf0pzpHPKILQtnddTAN3R" />
    </div>
  )
};

export default CartPage;
