import React from "react";
import { Container } from "react-bootstrap";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const OurShopSec1 = () => {
  return (
    <section className="game game-others">
      <Container>
        <div class="text-center text-light">
          <h1 class="fw-bold mt-3">OUR SHOP</h1>
          <div className="breadcrumb-div text center">
          <Breadcrumb className="breadcrumb-nav">
            <Breadcrumb.Item href="#" className="text-light text-decoration-none">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#" active className="text-light text-decoration-none">
              Data
            </Breadcrumb.Item>
          </Breadcrumb>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurShopSec1;
