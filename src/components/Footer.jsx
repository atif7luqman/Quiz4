import { Container, Row, Col, Image, ListGroup } from "react-bootstrap";
import img from "../assetes/images/footer.png";
import { FacebookRounded } from "@mui/icons-material";
import { Twitter } from "@mui/icons-material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function Footer() {
  return (
    <div className="bg-dark text-white">
      <Container className="p-3 pt-5 pb-5">
        <Row>
          <Col sm={12} md={2}>
            {/* Section 1 with Image */}
            <Image
              src={img}
              alt="Logo"
              fluid
              className="mx-auto d-block"
              style={{ height: "auto", width: "auto" }}
            />
          </Col>
          <Col sm={12} md={2} className="justify-content-center">
            {/* Section 2 */}
            <p className="fw-bold">Product</p>
            <ul className="list-unstyled">
              <li>
                <p>Security</p>
              </li>
              <li>
                <p>Writer for Chrome</p>
              </li>
              <li>
                <p>Wrier for Contentful</p>
              </li>
              <li>
                <p>Writer for Figma</p>
              </li>
              <li>
                <p>Grammarly alternative</p>
              </li>
              <li>
                <p>Request a demo</p>
              </li>
              <li>
                <p>Try for free</p>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={2} className="justify-content-center">
            {/* Section 3 */}
            <p className="fw-bold">Resources</p>
            <ul className="list-unstyled">
              <li>
                <p>Blog</p>
              </li>
              <li>
                <p>Guides</p>
              </li>
              <li>
                <p>Inclusiveness language</p>
              </li>
              <li>
                <p>Style guide template</p>
              </li>
              <li>
                <p>Terminology management</p>
              </li>
              <li>
                <p>AI content detector</p>
              </li>
              <li>
                <p>Free grammar check</p>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={2} className="justify-content-center">
            {/* Section 4 */}
            <p className="fw-bold">Company</p>
            <ul className="list-unstyled">
              <li>
                <p>Careers</p>
              </li>
              <li>
                <p>Partners</p>
              </li>
              <li>
                <p>Cibtact us</p>
              </li>
            </ul>
          </Col>
          <Col sm={12} md={4} className="justify-content-center">
            {/* Section 5 */}
            <p className="fw-bold">Support</p>
            <ul className="list-unstyled">
              <li>
                <p>Help center</p>
              </li>
              <li>
                <p>API</p>
              </li>
              <li>
                <p>Status</p>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="m-5 pt-5 pb-5">
          <Col md={4}>
            <p>© 2023 WRITEALY</p>
          </Col>
          <Col md={4}>
            <FacebookRounded className="ms-3" />
            <Twitter className="mx-3" />
            <LinkedInIcon />
          </Col>
          <Col md={4}>
            <p>TERMS | PRIVACY</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
