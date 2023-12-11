import { Container, Row, Col, Image } from 'react-bootstrap';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import img from '../assetes/images/usecase.png'

export default function UseCases () {
    return (
        <div style={{backgroundColor: "#FFF0EC"}}>
            <Container className="m-5 p-5 text-center">
                <PlayArrowIcon />
                <p style={{fontSize: '0.7rem'}}>USE CASES</p>
                <h4 className='fw-bold'>Automate what’s automatable in <br />content</h4>
                <p>Writer accelerates your writing workflow, from </p>
                <p>Writing 
                <ArrowCircleRightIcon className='px-1 mx-2'/>Ideation 
                <ArrowCircleRightIcon className='px-1 mx-2'/>Illustrating</p>
            </Container>
            <Container>
                <Row>
                    <Col md={8}>
                        <Image src={img} alt="Logo" fluid />
                    </Col>
                    <Col md={4} className='px-5'>
                        <p className='fw-bold mb-1'>Ideate faster</p>
                        <p>Use AI as you <br /> brainstorming partner</p>

                        <p className='fw-bold mb-1'>Write Faster</p>
                        <p>Generate First draft in <br />seconds </p>

                        <p className='fw-bold mb-1'>Edit faster</p>
                        <p>Automate brand, editorial, <br />and style edits</p>

                        <p className='fw-bold mb-1'>Illustrate faster</p>
                        <p>Instantly produce <br />distribution content</p>

                        <p className='fw-bold mb-1'>Publish faster</p>
                        <p>Turn a blog post into a <br />case study vice versa</p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}