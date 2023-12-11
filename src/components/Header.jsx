import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Button} from 'react-bootstrap'
import Logo from '../assetes/images/logo.png';
import { Image } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className="col-md-6">
          <Image src={Logo} alt="Logo" fluid />
          <span className="ms-2 fs-26 fw-bold" style={{ color: '#303179' }}>Writealy</span>
          
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="col-md-6">
          <Nav className="me-auto">
            <NavDropdown title="Product" id="collapsible-nav-dropdown" drop="down">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Use cases" id="collapsible-nav-dropdown" drop="down">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#customers">Customers</Nav.Link>
            <NavDropdown title="Resources" id="collapsible-nav-dropdown" drop="down">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          <Button
            variant="outline-dark"
            // className="rounded-circle"
            style={{
              backgroundColor: 'transparent',
              border: '4px solid #000000',
              color: '#000000',
              borderRadius: `2rem` // Set the border radius dynamically
            }}
            >
              Sign in
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
