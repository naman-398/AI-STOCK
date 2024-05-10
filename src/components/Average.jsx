import React from 'react'
import samsung from "../assets/images/samsung.webp";
import ford from "../assets/images/ford.webp";
import company from "../assets/images/company.webp";
import reliance from "../assets/images/reliance.webp";
import adani from "../assets/images/adani.webp";
import stripe from "../assets/images/stripe.webp";
import google from "../assets/images/google.webp";
import spotify from "../assets/images/spotify.webp";
import tata from "../assets/images/tata.webp";
import tesla from "../assets/images/tesla.webp";
import { Col, Row } from 'react-bootstrap';
const Average = () => {
    return (
        <div className=' padding-Average'>
            <h3 className=' fw-bold text-center lh-lgg fs-lg color-black mb-hexagon' data-aos="zoom-in"> <span className=' average-text-gradient'>Average Weekly Earnings</span> of a Registered User <span className=' d-block'>From a $250 <span className='average-text-gradient'>investment = $521</span></span></h3>
            <Row className='  align-items-center justify-content-between mx-auto  max-w-890'>
                <Col className=' col-auto  mt-3 mx-auto mb-hexagon' data-aos="zoom-in">
                    <div className=' hexagon-box d-flex align-items-center justify-content-center'>
                        <img src={samsung} alt="" />
                    </div>
                </Col>
                <Col className=' col-auto  mt-3 mx-auto mb-hexagon mt-lg-0' data-aos="zoom-in" >
                    <div className=' hexagon-box d-flex align-items-center justify-content-center'>
                        <img src={ford} alt="" />
                    </div>
                </Col>
                <Col className=' col-auto  mt-3 mx-auto mb-hexagon mt-lg-0' data-aos="zoom-in">
                    <div className=' hexagon-box d-flex align-items-center justify-content-center'>
                        <img src={company} alt="" />
                    </div>
                </Col>
                <Col className=' col-auto  mt-3 mx-auto mb-hexagon mt-lg-0' data-aos="zoom-in">
                    <div className=' hexagon-box d-flex align-items-center justify-content-center'>
                        <img src={reliance} alt="" />
                    </div>
                </Col>
                <Col className=' col-auto  mt-3 mx-auto mb-hexagon mt-lg-0' data-aos="zoom-in">
                    <div className=' hexagon-box d-flex align-items-center justify-content-center'>
                        <img src={adani} alt="" />
                    </div>
                </Col>
                <Col className=' col-auto  mt-3 mx-auto mb-hexagon mt-lg-0' data-aos="zoom-in">
                    <div className=' hexagon-box d-flex align-items-center justify-content-center'>
                        <img src={stripe} alt="" />
                    </div>
                </Col>
                <Col className=' col-auto  mt-3 mx-auto mb-hexagon mt-lg-0' data-aos="zoom-in">
                    <div className=' hexagon-box d-flex align-items-center justify-content-center'>
                        <img src={google} alt="" />
                    </div>
                </Col>
                <Col className=' col-auto  mt-3 mx-auto mb-hexagon mt-lg-0' data-aos="zoom-in">
                    <div className=' hexagon-box d-flex align-items-center justify-content-center'>
                        <img src={spotify} alt="" />
                    </div>
                </Col>
                <Col className=' col-auto  mt-3 mx-auto mb-hexagon mt-lg-0' data-aos="zoom-in">
                    <div className=' hexagon-box d-flex align-items-center justify-content-center'>
                        <img src={tata} alt="" />
                    </div>
                </Col>
                <Col className=' col-auto  mt-3 mx-auto mb-hexagon mt-lg-0' data-aos="zoom-in">
                    <div className=' hexagon-box d-flex align-items-center justify-content-center'>
                        <img src={tesla} alt="" />
                    </div>
                </Col>
            </Row>
            <div className=' d-flex justify-content-center' data-aos="zoom-in"> <button className='  mx-auto gradient-btn-bg position-relative overflow-hidden  big-tardelong-btn border-0  text-white lh-1sm fs-sm fw-bold'> <span classname="  position-relative z-1">Register Now </span> </button></div>
        </div>
    )
}

export default Average