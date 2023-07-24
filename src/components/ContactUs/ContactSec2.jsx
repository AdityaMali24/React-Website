import React from "react";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import { Container, Row, Col } from "react-bootstrap";

const ContactSec2 = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="row-cols-1 row-cols-lg-2 py-5 align-items-center m-0 row">
          <Col>
            <div className="contact-text">
              <div className="inner-box-1">
                <span className="text-danger fw-bold">CONTACT US</span>
                <h2 className="fw-bold mt-3">Say Hello!</h2>
              </div>
              <p className="my-5">
                LUGX Gaming Template is based on the latest Bootstrap 5 CSS
                framework. This template is provided by TemplateMo and it is
                suitable for your gaming shop ecommerce websites. Feel free to
                use this for any purpose. Thank you.
              </p>
              <div className="contact-inner">
                <div className="cin">
                  <h6>Address</h6>
                  <p>Sunny Isles Beach, FL 33160, United States</p>
                </div>
                <div className="cin">
                  <h6>Phone</h6>
                  <p>+123 456 7890</p>
                </div>
                <div className="cin">
                  <h6>Email</h6>
                  <p>lugx@contact.com</p>
                </div>
              </div>
            </div>
          </Col>
          <Row className="row-cols-1 row">
            <Col>
              <iframe
                className="w-100 mb-5"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.2153349135633!2d72.84961067512803!3d19.229444882007115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b0d42c95bdf9%3A0x5a3374a957943f4b!2sTryCatch%20Classes%20%7C%20Full%20Stack%20Web%20Development%20%7C%20Data%20Science%20Python%20Alteryx%20%7C%20Software%20Testing%20%7C%20Android%20IOS%20Flutter%20Training!5e0!3m2!1sen!2sin!4v1689590432930!5m2!1sen!2sin"
                width="400"
                height="300"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </Col>
            <Col>
                <Form>
                   <div className="form-box d-flex justify-content-between align-items-center mb-4">
                       <input type="text" className="rounded-pill w-100 p-3" name="" id="" placeholder="Your Name..." fdprocessedid="kg4pk"/>
                       <input type="text" className="rounded-pill w-100 p-3" name="" id="" placeholder="Your Surname..." fdprocessedid="iuhr7d"/>
                   </div>
                   <div className="form-box d-flex justify-content-between align-items-center mb-4">
                       <input type="text" className="rounded-pill w-100 p-3" name="" id="" placeholder="Your Name..." fdprocessedid="kg4pk"/>
                       <input type="email" className="rounded-pill w-100 p-3" name="" id="" placeholder="Your email..." fdprocessedid="iuhr7d"/>
                   </div>
                   <textarea name="" id="" cols="82" rows="4" class=" p-3" placeholder="Your Message"></textarea>
                   <Button type="submit" className="bg-danger border-0 mt-4 rounded-pill p-3 px-4 btn btn-primary" fdprocessedid="nemikc">SEND MESSAGE</Button>
                   
                </Form>
            </Col>
          </Row>
        </Row>
      </Container>
    </section>
  );
};

export default ContactSec2;


