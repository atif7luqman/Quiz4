import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default function YourComponent() {
  return (
    <Container className='m-5 p5'>
      <Row >
        <Col md={6} className="text-center">
          <p style={{color: '#355C99'}} className='fs-7 fw-bold'>Brainstorm</p>
          <p>your book <b />easily.</p>
        </Col>
        <Col md={6} className="text-center">
          Section 2
        </Col>
      </Row>
    </Container>
  );
}
