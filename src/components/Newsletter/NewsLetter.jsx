import React from "react";
import Form from "react-bootstrap/Form";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const NewsLetter = () => {
  return (
    <section class="position-relative newsletter my-5">
      <Container>
        <Row className="news-row">
          <Col className="col-lg-5 col-md-12">
            <div className="inner-box-1 news-box">
              <span className="text-danger fw-bold">OUR SHOP</span>
              <h2 className="fw-bold mt-4 mb-5">
                Go Pre-Order Buy & Get Best <span>Prices</span> For You!
              </h2>
              <p className="fw-bold">
                Lorem ipsum dolor consectetur adipiscing, sed do eiusmod tempor
                incididunt.
              </p>
              <a
                href=""
                className="bg-danger text-light p-3 px-4 rounded-pill text-decoration-none"
              >
                SHOP NOW
              </a>
            </div>
          </Col>

          <Col className="col-lg-5 col-md-12 offset-lg-2 align-self-end ">
            <div className="inner-box-1 news-box">
              <span className="text-danger fw-bold">NEWSLETTER</span>
              <h2 className="fw-bold mt-4 mb-5">
                Get Up To $100 Off Just Buy <span>Subscribe</span> Newsletter!
              </h2>
              <Form className="d-flex position-relative mt-5">
                <Form.Control
                  type="search"
                  placeholder="Your email..."
                  className="me-2 rounded-pill hero-input p-3"
                  aria-label="Search"
                />
                <Button
                  variant="danger"
                  className="search-btn rounded-pill position-absolute start-50 p-3 px-4"
                >
                  SUBSCRIBE NOW
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default NewsLetter;
