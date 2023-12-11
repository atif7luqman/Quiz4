import { Container, Row, Col, Image } from "react-bootstrap";
import img1 from '../assetes/images/div1.png'
import img2 from '../assetes/images/div2.png'
import img3 from '../assetes/images/div3.png'
import img4 from '../assetes/images/div4.png'
import img5 from '../assetes/images/div5.png'
import img6 from '../assetes/images/div6.png'

export default function Publications () {
    return (
        <Container className="m-5 text-center ">
            <h2>People who has published their books using writealy</h2>
            <Row>
                <Col md={4}>
                    <Image src={img1} alt="use case image" />
                </Col>
                <Col md={4}>
                    <Image src={img2} alt="use case image" />
                </Col>
                <Col md={4}>
                    <Image src={img3} alt="use case image" />
                </Col>
            </Row>
            <Row>
                <Col md={4}>
                    <Image src={img4} alt="use case image" />
                </Col>
                <Col md={4}>
                    <Image src={img5} alt="use case image" />
                </Col>
                <Col md={4}>
                <Image src={img6} alt="use case image" />
                </Col>
            </Row>
        </Container>
    )
}