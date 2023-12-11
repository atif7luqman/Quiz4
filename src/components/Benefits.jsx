import { Container, Row, Col, Image } from "react-bootstrap";
import b1 from '../assetes/images/b1.png'
import b2 from '../assetes/images/b2.png'
import b3 from '../assetes/images/b3.png'
import b4 from '../assetes/images/b4.png'
import b5 from '../assetes/images/b5.png'

export default function () {
    return (
        <>
            <h1 className="text-center m-5">BENEFITS</h1>
            <Container className="mx-5 fs-">
                <Row className="d-flex align-items-center mb-5">
                    <Col md={6}>
                        <p className="fw-bold mb-4">Create content in <br />minutes, not months</p>
                        <p className="mb-4">Create original content that actually sounds like <br />your company wrote it.</p>
                        <p>Writer is the only AI writing platform that can be <br />trained on your own best-performing content <br />and brand guidelines.</p>
                        <p className="mb-4">It's <span className="bg-light fw-bold">your own AI,</span> specifically tuned for your team’s <br />unique use cases.</p>
                    </Col>
                    <Col md={6}>
                        <Image src={b1} alt="Logo" fluid />
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mb-5">
                    <Col md={6}>
                        <p className="fw-bold mb-4">Build a brand that is <br />consistent — everywhere</p>
                        <p className="mb-4">Generic ad copy. Outdated messaging on your <br />website. Poorly-written docs.</p>
                        <p className="mb-4">All of this can kill a buyer’s journey — and your <br />brand. Writer gives you all the tools you need to <br />
                            <span className="fw-bold bg-light">build a consistent brand </span>across every customer <br />touchpoint, and do it efficiently.
                        </p>
                    </Col>
                    <Col md={6}>
                        <Image src={b2} alt="Logo" fluid />
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mb-5">
                    <Col md={6}>
                        <p className="fw-bold mb-4">Drive revenue, not <br />review cycles</p>
                        <p className="mb-4">‘Let’s be a media company,’ they say — but <br />without the required headcount or budget.</p>
                        <p className="mb-4">Do it anyway.</p>
                        <p className="mb-4"><span className="fw-bold bg-light">10x the productivity</span> of your best writers, and <br />make it so everyone else in the company can <br />contribute on-brand content, too — without the <br />rewrites.</p>
                    </Col>
                    <Col md={6}>
                        <Image src={b3} alt="Logo" fluid />
                    </Col>
                </Row>
                <Row className="d-flex align-items-center mb-5">
                    <Col md={6}>
                        <p className="fw-bold mb-4">Be secure <br />with enterprise features</p>
                        <p className="mb-4">What you write will never make it into our models.</p>
                        <p className="mb-4">Your data is analyzed transiently, so what you <br />edit or generate isn’t collected or used by Writer.</p>
                        <p className="mb-4">Writer is the only AI writing platform that both <br />users and infosec teams love.</p>
                        <Image src={b5} alt="Logo" fluid />
                    </Col>
                    <Col md={6}>
                        <Image src={b4} alt="Logo" fluid />
                    </Col>
                </Row>
            </Container>
        </>
    )
}