import React from "react";
import viewimg1 from "../../assets/top-game-01.jpg";
import viewimg2 from "../../assets/top-game-02.jpg";
import viewimg3 from "../../assets/top-game-03.jpg";
import viewimg4 from "../../assets/top-game-04.jpg";
import viewimg5 from "../../assets/top-game-05.jpg";
import viewimg6 from "../../assets/top-game-06.jpg";
import { Container, Row, Col } from "react-bootstrap";

const ViewCards = () => {
  return (
    <section className="view-cards">
      <Container>
        <div className="home-card-text d-flex justify-content-between align-items-center py-3">
          <div className="inner-box-1">
            <span className="text-danger fw-bold">TRENDING</span>
            <h2 className="fw-bold mt-3">Trending Games</h2>
          </div>
          <div className="inner-box-2">
            <a
              href=""
              className="bg-danger text-light p-3 px-4 rounded-pill text-decoration-none"
            >
              VIEW ALL
            </a>
          </div>
        </div>
        <Row>
          <Col lg={2} sm={6}>
            <div className="home-card pro-card position-relative">
              <div className="card-img">
                  <img src={viewimg1} alt="trending-games" className="card-img" />
              </div>
              <div className="home-inner d-flex justify-content-center text-center flex-column my-3">
                <div className="left mb-4">
                  <span className="text-secondary">Adventure</span>
                  <h5 className="mt-2 fw-bold">Assasin Creed</h5>
                </div>
                <div className="right right-pro">
                  <a href className="bg-danger text-light p-2 px-3 fw-bold rounded-pill text-decoration-none">
                    EXPLORE
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={2} sm={6}>
            <div className="home-card pro-card position-relative">
              <div className="card-img">
                  <img src={viewimg2} alt="trending-games" className="card-img" />
              </div>
              <div className="home-inner d-flex justify-content-center text-center flex-column my-3">
                <div className="left mb-4">
                  <span className="text-secondary">Adventure</span>
                  <h5 className="mt-2 fw-bold">Assasin Creed</h5>
                </div>
                <div className="right right-pro">
                  <a href className="bg-danger text-light p-2 px-3 fw-bold rounded-pill text-decoration-none">
                    EXPLORE
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={2} sm={6}>
            <div className="home-card pro-card position-relative">
              <div className="card-img">
                  <img src={viewimg3} alt="trending-games" className="card-img" />
              </div>
              <div className="home-inner d-flex justify-content-center text-center flex-column my-3">
                <div className="left mb-4">
                  <span className="text-secondary">Adventure</span>
                  <h5 className="mt-2 fw-bold">Assasin Creed</h5>
                </div>
                <div className="right right-pro">
                  <a href className="bg-danger text-light p-2 px-3 fw-bold rounded-pill text-decoration-none">
                    EXPLORE
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={2} sm={6}>
            <div className="home-card pro-card position-relative">
              <div className="card-img">
                  <img src={viewimg4} alt="trending-games" className="card-img" />
              </div>
              <div className="home-inner d-flex justify-content-center text-center flex-column my-3">
                <div className="left mb-4">
                  <span className="text-secondary">Adventure</span>
                  <h5 className="mt-2 fw-bold">Assasin Creed</h5>
                </div>
                <div className="right right-pro">
                  <a href className="bg-danger text-light p-2 px-3 fw-bold rounded-pill text-decoration-none">
                    EXPLORE
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={2} sm={6}>
            <div className="home-card pro-card position-relative">
              <div className="card-img">
                  <img src={viewimg5} alt="trending-games" className="card-img" />
              </div>
              <div className="home-inner d-flex justify-content-center text-center flex-column my-3">
                <div className="left mb-4">
                  <span className="text-secondary">Adventure</span>
                  <h5 className="mt-2 fw-bold">Assasin Creed</h5>
                </div>
                <div className="right right-pro">
                  <a href className="bg-danger text-light p-2 px-3 fw-bold rounded-pill text-decoration-none">
                    EXPLORE
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={2} sm={6}>
            <div className="home-card pro-card position-relative">
              <div className="card-img">
                  <img src={viewimg6} alt="trending-games" className="card-img" />
              </div>
              <div className="home-inner d-flex justify-content-center text-center flex-column my-3">
                <div className="left mb-4">
                  <span className="text-secondary">Adventure</span>
                  <h5 className="mt-2 fw-bold">Assasin Creed</h5>
                </div>
                <div className="right right-pro">
                  <a href className="bg-danger text-light p-2 px-3 fw-bold rounded-pill text-decoration-none">
                    EXPLORE
                  </a>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ViewCards;
