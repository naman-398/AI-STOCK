import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import mobileimg from "../assets/images/mobileimg.webp";
import Commonbtn1 from '../commonbtn/Commonbtn1';
const Tradelong = () => {
    return (
        <div className=' padding-Y-tradelong'>
            <Container>
                <div className=' justify-content-between align-items-center d-flex gap-4 gap-xl-0 flex-column  flex-lg-row '>
                        <img src={mobileimg} alt="mobileimg" className=' tradelong-mobileimg mx-auto mx-lg-0 px-12 px-md-0' data-aos="zoom-in"/>
                        <div className=' max-w-617 px-12 px-md-0 mx-auto mx-lg-0'>
                        <h2 className=' fs-1lg lh-1lg fw-bold color-black mb-3 text-center text-lg-start' data-aos="zoom-in"><span className=' text-gradient'>Trade long</span> and short <span className=' d-sm-block '>with <span className=' text-gradient2'>leverage</span> </span></h2>
                        <div className=' d-flex pt-sm-2 gap-tradelong-btn flex-wrap justify-content-center justify-content-lg-start' data-aos="zoom-in">
                        <Commonbtn1 text='Stocks'/>
                        <Commonbtn1 text='Crypto'/>
                        <Commonbtn1 text='Commodities'/>
                        <Commonbtn1 text='Forex'/>
                        <Commonbtn1 text='Indices'/>
                        </div>
                    <div className=' d-flex justify-content-center justify-content-lg-start' data-aos="zoom-in"> <button className='  gradient-btn-bg position-relative overflow-hidden  big-tardelong-btn border-0  text-white lh-1sm fs-sm fw-bold'> <span classname="  position-relative z-1">Get your share in seconds </span> </button></div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Tradelong