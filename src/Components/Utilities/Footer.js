import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import facebook from "../../Assets/facebook.png";
import instagram from "../../Assets/instagram.png";
import twitter from "../../Assets/twitter.png";
import phone from "../../Assets/phone.png";
const Footer = () => {
  return (
    <div
      className="footer-background footer mt-3 pt-2"
      style={{ maxHeight: "50px" }}
    >
      <Container className="">
        <Row className="d-flex justify-content-between align-items-center">
          <Col sm="6" className="d-flex align-items-center ">
            <div className="footer-shroot ">Terms and Conditions</div>
            <div className="footer-shroot mx-2">Privacy</div>
            <div className="footer-shroot mx-2">Contact Us</div>
          </Col>
          <Col
            sm="6"
            className="d-flex justify-content-end align-items-center "
          >
            <div className="d-flex pt-3 mx-2">
              <img width="20px" height="20px" src={phone} alt="Phone" />
              <p className="footer-phone">+49152123232322</p>
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={facebook} alt="Facebook" />
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={instagram} alt="Instagram" />
            </div>
            <div style={{ cursor: "pointer" }}>
              <img width="20px" height="20px" src={twitter} alt="Twitter" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
