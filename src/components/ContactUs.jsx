import { Form, Row, Col, Button } from "react-bootstrap";

export default function ContactUs() {
  return (
    <div className="m-5">
      <h2 className="mb-5">Contact Us</h2>
      <Form>
        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="name" placeholder="Full Name" />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
              <Form.Control type="address" placeholder="Address" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
              <Form.Control type="phone" placeholder="Phone" />
            </Form.Group>
          </Col>
          <Col sm={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
        </Row>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control as="textarea" rows={3} placeholder="Description" />
        </Form.Group>
        <Row>
            <Col sm={12} className="d-flex justify-content-end align-items-center">
                <Button type="submit" variant="success">
                Submit
                </Button>
            </Col>
        </Row>
      </Form>
    </div>
  );
}
