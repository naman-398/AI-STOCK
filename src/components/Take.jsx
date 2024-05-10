import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import s4img1 from "../assets/images/s4img1.webp";
import s4img2 from "../assets/images/s4img2.webp";
import s4img3 from "../assets/images/s4img3.webp";
import s4img4 from "../assets/images/s4img4.webp";
import s4img5 from "../assets/images/s4img5.webp";
import s4img6 from "../assets/images/s4img6.webp";
import s4img7 from "../assets/images/s4img7.webp";
import s4img8 from "../assets/images/s4img8.webp";
const Take = () => {
    return (
        <div className=' take-pb'>
            <Container>
                <div className=' d-flex flex-column flex-xl-row align-items-center justify-content-between'>
                    <div className=' max-w-553 w-100 px-12'>
                        <h2 className=' fs-1lg lh-1lg fw-bold color-black mb-3 text-center text-lg-start' data-aos="zoom-in"><span className=' text-gradient'>Take the </span> first step into AI  <span className=' text-gradient2'>Stock Trading</span> </h2>
                        <p className=' fw-normal fs-sm lh-2sm color-black mb-5' data-aos="zoom-in">In a matter of minutes, one of our AI mentors will contact you, No Experience Required!</p>
                        <div className=' max-w-516'>
                            <Row>
                                <Col sm={3} className=' col-4 px-0' data-aos="zoom-in">
                                    <div className=' s4-box d-flex align-items-center justify-content-center w-100 h-100 s4-border1 s4-img'>
                                        <img src={s4img1} alt="" /></div>
                                </Col>
                                <Col sm={3} className=' col-4 px-0' data-aos="zoom-in">
                                    <div className=' s4-box d-flex align-items-center justify-content-center w-100 h-100 s4-border2 s4-img'>
                                        <img src={s4img2} alt="" /></div>
                                </Col>
                                <Col sm={3} className=' col-4 px-0' data-aos="zoom-in">
                                    <div className=' s4-box d-flex align-items-center justify-content-center w-100 h-100 s4-border3 s4-img'>
                                        <img src={s4img3} alt="" /></div>
                                </Col>
                                <Col sm={3} className=' col-4 px-0 ' data-aos="zoom-in">
                                    <div className=' s4-box d-flex align-items-center justify-content-center w-100 h-100 s4-border4 s4-img'>
                                        <img src={s4img4} alt="" /></div>
                                </Col>
                                <Col sm={3} className=' col-4 px-0 ' data-aos="zoom-in">
                                    <div className=' s4-box d-flex align-items-center justify-content-center w-100 h-100 s4-border5 s4-img'>
                                        <img src={s4img5} alt="" /></div>
                                </Col>
                                <Col sm={3} className=' col-4 px-0 ' data-aos="zoom-in">
                                    <div className=' s4-box d-flex align-items-center justify-content-center w-100 h-100 s4-border6 s4-img'>
                                        <img src={s4img6} alt="" /></div>
                                </Col>
                                <Col sm={3} className=' col-4 px-0 ' data-aos="zoom-in">
                                    <div className=' s4-box d-flex align-items-center justify-content-center w-100 h-100 s4-border7 s4-img'>
                                        <img src={s4img7} alt="" /></div>
                                </Col>
                                <Col sm={3} className=' col-4 px-0 ' data-aos="zoom-in">
                                    <div className=' s4-box d-flex align-items-center justify-content-center w-100 h-100 s4-border8 s4-img'>
                                        <img src={s4img8} alt="" /></div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <div className=' px-12'>
                    <div className=' email-box mt-4 mt-xl-0' data-aos="zoom-in">
                        <p className=' fw-bold fs-md lh-2md color-black'>Start Trading with AI Stocks !</p>
                        <form >
                            <div className=' d-flex  flex-column flex-sm-row align-items-sm-center gap-2 mb-2'>
                            <div className=' d-flex flex-column gap-2'>
                                <p className=' fw-normal fs-sm lh-sm text-black mb-0'>First Name</p>
                                <input type="name" className='fw-normal fs-sm lh-sm text-black  input1 w-100 py-2 px-3'  />
                            </div>
                            <div className=' d-flex flex-column gap-2'>
                                <p className=' fw-normal fs-sm lh-sm text-black mb-0'>Last Name</p>
                                <input type="name" className='fw-normal fs-sm lh-sm text-black  input1 w-100 py-2 px-3'  />
                            </div>
                            </div>
                            <div className=' d-flex flex-column gap-2 mb-2'>
                                <p className=' fw-normal fs-sm lh-sm text-black mb-0'>Email </p>
                                <input type="mail" className='fw-normal fs-sm lh-sm text-black  input w-100 py-2 px-3'  />
                            </div>
                            <div className=' d-flex flex-column gap-2'>
                                <p className=' fw-normal fs-sm lh-sm text-black mb-0'>Phone Number </p>
                                <input type="number" className='fw-normal fs-sm lh-sm text-black  input w-100 py-2 px-3'  />
                            </div>
                        </form>
        <div className=' d-flex justify-content-center' data-aos="zoom-in"> <button className='  mx-auto gradient-btn-bg position-relative overflow-hidden  big-email-btn border-0  text-white lh-1sm fs-sm fw-bold'> <span classname="  position-relative z-1">Start Trading Today! </span> </button></div>
                    </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Take