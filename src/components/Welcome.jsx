import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import img from '../assetes/images/Welcome.png'
import crousel from '../assetes/images/crousel.png'

export default function YourComponent() {
  return (
    <>
      <Container className='m-5 p-5'>
        <Row className='align-items-center justify-content-center'>
          <Col lg={6} className="text-left p-5">
          <p className='fs-1 fw-bold mb-0' style={{
              backgroundImage: 'linear-gradient(to right, #3C3599, #EB7A65, #A9F9E1)',
              color: 'transparent',
              display: 'inline-block', // Ensure the gradient applies to the entire text
              WebkitBackgroundClip: 'text', // Use the Webkit version for older browsers
              textFillColor: 'transparent', // Set the text color to transparent
            }}>
              Brainstorm
            </p>          
            <p className='fs-1'>your book <br />easily.</p>

            <p className='mt-2'>World-class companies use Writealy <br />
              AI writing platform to unlock <br />
              brainstorming for publishing a book.
            </p>

            <Button
              variant="outline-dark"
              className="mt-4 fw-bold"
              style={{
                backgroundColor: 'transparent',
                border: '4px solid #000000',
                color: '#000000',
                width: '10rem',
                borderRadius: `2rem` // Set the border radius dynamically
              }}
              >
                Request a demo
              </Button>
              <Button
              variant="outline-dark"
              className=" ms-4 mt-4 fw-bold"
              style={{
                backgroundColor: '#EB7A65',
                border: '4px solid #000000',
                color: '#ffffff',
                width: '9rem',
                borderRadius: `2rem` // Set the border radius dynamically
              }}
              >
                Try for free
              </Button>
          </Col>
          <Col lg={6} className="text-center ps-5">
            <Image src={img} alt="use case image" />
            <p className='fs-9 fw-bold m-2'>Watch the product overview <span style={{fontSize:'0.5rem'}}>3 min</span></p>
          </Col>
        </Row>
      </Container>
      <div className='d-flex justify-content-center p-5' style={{ backgroundColor: '#EB7A65', width: '100%' }}>
        <Image src={crousel} alt="use case image" />
      </div>
    </>
  );
}

