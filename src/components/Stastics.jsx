import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Stastics = () => {
    return (
        <div className=' padding-Y-stastics bg-gradient-stastics'>
            <Container>
                <Row className=' align-items-center'>
                <Col  lg={3} className=' col-12'>
                        <h2 className=' fs-1lg lh-1lg fw-bold text-white mb-sm-4 mb-3 text-center text-lg-start mb-lg-0' data-aos="zoom-in">Statistics For Today</h2>
                    </Col>
                    <Col  lg={3} md={4} sm={6} className=' col-12 ' data-aos="zoom-in">
                        <div className=' stastics-box h-100 bg-white d-flex justify-content-center flex-column mx-auto mx-sm-0'>
                            <p className=' color-black mx-auto mb-sm-2 mb-1 lh-2lg fs-1lg fw-bold'>03</p>
                            <p className=' fw-semibold fs-1sm text-center lh-md mb-0'>Places left to register</p>
                        </div>
                    </Col>
                    <Col  lg={3} md={4} sm={6} className=' col-12 mt-sm-0 mt-2' data-aos="zoom-in">
                        <div className=' stastics-box h-100 bg-white d-flex justify-content-center flex-column mx-auto mx-sm-0'>
                            <p className=' color-black mx-auto mb-sm-2 mb-1 lh-2lg fs-1lg fw-bold'>135</p>
                            <p className=' fw-semibold fs-1sm text-center lh-md mb-0'>Average Registrations per dayr</p>
                        </div>
                    </Col>
                    <Col  lg={3} md={4} sm={6} className=' col-12 mt-md-0 mt-sm-3 mt-2 mx-auto mx-md-0' data-aos="zoom-in">
                        <div className=' stastics-box h-100 bg-white d-flex justify-content-center flex-column mx-auto mx-sm-0'>
                            <p className=' color-black mx-auto mb-sm-2 mb-1 lh-2lg fs-1lg fw-bold'>5X</p>
                            <p className=' fw-semibold fs-1sm text-center lh-md mb-0'>The Average Earnings Increase</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Stastics