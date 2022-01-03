import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-info'>
                <h2>Welcome</h2>
                <Container>
                    <Row>
                        <Col className='p-0'><span className='banner-btn'>Delivery</span></Col>
                        <Col className='p-0'><span className='banner-btn'>Dine</span></Col>
                        <Col className='p-0'><span className='banner-btn'>Takeout</span></Col>
                    </Row>
                </Container>
                <div className='banner-btn-container'>


                </div>
                <p>Order Fast Food Without Destroying Your Diet. We strive to elevate your experience. Eat Best Fat &amp; Furious Burger for Lunch</p>
            </div>
        </div>
    )
}

export default Banner
