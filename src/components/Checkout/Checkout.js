import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CheckoutForm from './CheckoutForm';

const Checkout = () => {
  const handleSubmitCheck = (formData) => {
    console.log('Datos del formulario:', formData);
  };

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h2>Checkout</h2>
          <CheckoutForm handleSubmitCheck={handleSubmitCheck} />
        </Col>
      </Row>
    </Container>
  );
};

export default Checkout;
