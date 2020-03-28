import React, { useState, useEffect, useContext } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { MdDeleteForever } from "react-icons/md";

import { CartContext } from '../context';

import '../styles/Cart.scss';


const formatPrice = (price) => {
  return `${(price * 0.01).toFixed(2)} €`
};

const totalPrice = (items) => {
  return items.reduce((acc, item) => acc + item.quantity * item.price, 0.0)
};

const Cart = ({ stripeToken }) => {
  const [stripe, setStripe] = useState(null);
  const ctx = useContext(CartContext)

  useEffect(() => {
    if (window.Stripe) setStripe(window.Stripe(stripeToken))
  }, [stripeToken])

  const checkout = () => {
    stripe.redirectToCheckout({
      items: ctx.items.map(item => ({
        quantity: item.quantity,
        sku: item.sku
      })),
      successUrl: "https://dronetaiken.netlify.com/success",
      cancelUrl: "https://dronetaiken.netlify.com/panier"
    })
  }

  return (
    <div className="Cart">
      <Container className="cart">

        {ctx.items.map(item => (
          <Row key={item.sku}>
            <Col className="colone" xl="3" lg="3" md="3" sm="12" xs="12">
            <p>{item.name}</p>
            </Col>
            <Col className="colone" xl="2" lg="2" md="2" sm="12" xs="12">
              <img
                src={`/medias/${item.sku}.jpg`}
                alt={item.name}
                width={100}
                height={100}
              />
            </Col>
            <Col className="colone" xl="2" lg="2" md="2" sm="12" xs="12">
              <p>{formatPrice(item.price)}</p>
            </Col>
            <Col className="colone" xl="2" lg="2" md="2" sm="12" xs="12">
              <p>{item.quantity}</p>
            </Col>
            <Col className="colone" xl="2" lg="2" md="2" sm="12" xs="12">
              <p>{formatPrice(item.price * item.quantity)}</p>
            </Col>
            <Col className="colone" xl="1" lg="1" md="1" sm="12" xs="12">
              <MdDeleteForever className="deleteBtn"/>
            </Col>
          </Row>
        ))}
      </Container>
      <Container className="checkout">
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12">
            <span className="total">Total : {formatPrice(totalPrice(ctx.items))}</span>
          </Col>
          <Col xl="12" lg="12" md="12" sm="12" xs="12">
            <Button className="checkoutBtn" onClick={checkout}>Payer avec stripe</Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Cart;