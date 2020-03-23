import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../styles/Footer.scss';

const Footer = () => {
  return (
    <div className="Footer">
      <Container className="footer">
        <Row>
          <Col xl="12" lg="12" md="12" sm="12" xs="12">
            <p>©2020 | <span>dronetaiken</span></p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;