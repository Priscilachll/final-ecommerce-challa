import React from 'react';
import { useFormik } from 'formik';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import * as Yup from 'yup';

const CheckoutForm = ({ handleSubmitCheck }) => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      zip: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('El nombre es obligatorio'),
      lastName: Yup.string().required('El apellido es obligatorio'),
      email: Yup.string().email('Formato de correo electrónico no válido').required('El correo electrónico es obligatorio'),
      address: Yup.string().required('La dirección es obligatoria'),
      city: Yup.string().required('La ciudad es obligatoria'),
      zip: Yup.string().required('El código postal es obligatorio'),
    }),
    onSubmit: (values) => {
      handleSubmitCheck(values);
    },
  });

  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group controlId="formFirstName">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu nombre"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.firstName && formik.errors.firstName}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.firstName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formLastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu apellido"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.lastName && formik.errors.lastName}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.lastName}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail">
              <Form.Label>Correo Electrónico</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingresa tu correo electrónico"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.email && formik.errors.email}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formAddress">
              <Form.Label>Dirección</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ingresa tu dirección"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                isInvalid={formik.touched.address && formik.errors.address}
              />
              <Form.Control.Feedback type="invalid">{formik.errors.address}</Form.Control.Feedback>
            </Form.Group>

            <Form.Row>
              <Form.Group as={Col} controlId="formCity">
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu ciudad"
                  name="city"
                  value={formik.values.city}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.city && formik.errors.city}
                />
                <Form.Control.Feedback type="invalid">{formik.errors.city}</Form.Control.Feedback>
              </Form.Group>

              <Form.Group as={Col} controlId="formZip">
                <Form.Label>Código Postal</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ingresa tu código postal"
                  name="zip"
                  value={formik.values.zip}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  isInvalid={formik.touched.zip && formik.errors.zip}
                />
                <Form.Control.Feedback type="invalid">{formik.errors.zip}</Form.Control.Feedback>
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Pagar
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutForm;