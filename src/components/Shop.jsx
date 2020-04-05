import React, { useContext } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Button, Col, Row, Container
} from 'reactstrap';
import { MdCamera, MdBatteryChargingFull, MdWifi } from "react-icons/md";
import { IoIosSpeedometer } from "react-icons/io";
import products from '../data/products';

import { CartContext } from '../context';

import '../styles/Shop.scss';

const formatPrice = (price) => {
  return `${(price * 0.01).toFixed(2)} €`
};

const Shop = () => {
  const cartCtx = useContext(CartContext)
  return (
    <div className="Shop" id="shop-section">
      <h1>Notre Sélection</h1>
      <Container>
        <Row>
          {products.map(product => (
            <Col xl="4" lg="4" md="4" sm="12" xs="12" key={product.sku}>
              <Card className="drone">
                <CardImg src={`/medias/${product.sku}.jpg`} alt={product.name} />
                <CardBody>
                  <CardTitle>{product.name}</CardTitle>
                  <CardText>
                    <MdCamera /> {product.camera}
                    <br />
                    <MdBatteryChargingFull color={"green"} /> {product.autonomy}
                    <br />
                    <MdWifi /> {product.reach}
                    <br />
                    <IoIosSpeedometer color={"orange"} /> {product.speed}
                  </CardText>
                  <Button onClick={() => cartCtx.addToCart(product)}>
                    {formatPrice(product.price)}
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Shop;