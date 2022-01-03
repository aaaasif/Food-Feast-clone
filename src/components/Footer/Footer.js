import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import Zoom from "react-reveal/Zoom";

const Footer = () => {
  return (
        <>
      <div className="footer-top pb-4">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">Wanna a member?</h4>
                <h5 className="text-muted">Sign up for our Newsletter</h5>
                <form className="d-flex">
                  <input
                    placeholder="Enter your email"
                    className="form-control rounded-0"
                    type="text"
                  />
                  <button className="btn rounded-0 btn-primary">Subs</button>
                </form>
                <h5 className="text-muted mt-4">Follow us on</h5>
                <div>
                  <ul className="social-icons">
                    <li>
                      <a href="/d">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/d">
                        <i class="fab fa-facebook-square"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/d">
                        <i class="fab fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="/d">
                        <i class="fab fa-twitter-square"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </Zoom>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">INFORMATION</h4>
                <ul className="information">
                  <li>
                    <a href="/home">bKash Payments</a>
                  </li>
                  <li>
                    <a href="/home">TERMS & CONDITIONS</a>
                  </li>
                  <li>
                    <a href="/home">bKash Payments</a>
                  </li>
                  <li>
                    <a href="/home">Payment Options</a>
                  </li>
                  <li>
                    <a href="/home">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="/home">Refund Policy</a>
                  </li>
                </ul>
              </Zoom>
            </Col>

            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">CUSTOMER SERVICE</h4>
                <ul className="information">
                  <li>
                    <a href="/home">FAQs</a>
                  </li>
                  <li>
                    <a href="/home">Food Feast</a>
                  </li>
                  <li>
                    <a href="/home">Store Locator</a>
                  </li>
                  <li>
                    <a href="/home">All About Food Feast</a>
                  </li>
                  <li>
                    <a href="/home">Contact Info</a>
                  </li>
                  <li>
                    <a href="/home">Delivery</a>
                  </li>
                </ul>
              </Zoom>
            </Col>
            <Col sm={12} md={6} lg={3}>
              <Zoom>
                <h4 className="col-title">Reach us</h4>
                <div className="">
                  <img width="100px" src="https://i.ibb.co/sRh82qJ/contact.png" alt="" />
                </div>
                <ul className="information contact-info">
                  <li>
                    <i className="fas fa-map-marker-alt"></i>
                    Dhaka, Bangladesh
                  </li>
                  <li>
                    <i className="fas fa-envelope"></i>
                    Official: foodfeast@gmail.com
                  </li>
                  <li>
                    <i className="fas fa-phone"></i>
                    Helpline: +8801798626997
                  </li>
                </ul>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Footer;
