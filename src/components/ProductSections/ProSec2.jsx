import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import singleimg from "../../assets/single-game.jpg";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const ProSec2 = () => {
  return (
    <section className="my-5 py-5">
      <Container>
        <Row className=" row row-cols-1 row-cols-lg-2 pb-5 align-items-center" >
          <Col>
            <div className="cart-img-wrap">
              <img src={singleimg} alt="single-game" />
            </div>
          </Col>
          <Col>
            <div className="cart-text">
              <h3 className="fw-bold">Call of Duty®: Modern Warfare® II</h3>
              <div className="cart-price">
                <span className="text-secondary text-decoration-line-through fs-3 fw-bold">
                  $28
                </span>
                <span className="fs-1 fw-bold text-primary">$22</span>
              </div>
              <p className="my-5">
                LUGX Gaming Template is based on the latest Bootstrap 5 CSS
                framework. This template is provided by TemplateMo and it is
                suitable for your gaming shop ecommerce websites. Feel free to
                use this for any purpose. Thank you.
              </p>
              <div className="input-group-div pb-5">
                <input
                  type="number"
                  name=""
                  id=""
                  className="rounded-pill border-1"
                  fdprocessedid="r91jfk"
                />
                <Button
                  type="button"
                  className="rounded-pill p-3 px-4 nav-btn btn btn-danger"
                  fdprocessedid="p40rbb"
                >
                  <FontAwesomeIcon
                    className="text-light"
                    icon={faBagShopping}
                  />
                  ADD TO CART
                </Button>
              </div>
              <div className="bottom-div">
                <p>
                  <span className="text-secondary">Game ID :</span>{" "}
                  <span className="text-primary">COD MMII</span>
                </p>
                <p>
                  <span className="text-secondary">Genre :</span>{" "}
                  <span className="text-primary">Action, Team, Single</span>
                </p>
                <p>
                  <span className="text-secondary">Multi-tags :</span>{" "}
                  <span className="text-primary">War, Battle, Royal</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>


  );
};

export default ProSec2;
