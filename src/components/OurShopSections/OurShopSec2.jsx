import React from "react";
import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import cardimg1 from "../../assets/trending-01.jpg";
import cardimg2 from "../../assets/trending-02.jpg";
import cardimg3 from "../../assets/trending-03.jpg";
import cardimg4 from "../../assets/trending-04.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
// import Button from "react-bootstrap/Button";

const OurShopSec2 = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const shopcards = [
    {
      subtitle: "Action",
      title: "Assasin Creed",
      image: cardimg1,
      ogprice: 28,
      price: 20,
    },
    { subtitle: "Action", title: "Assasin Creed", image: cardimg2, price: 44 },
    {
      subtitle: "Action",
      title: "Assasin Creed",
      image: cardimg3,
      ogprice: 64,
      price: 44,
    },
    { subtitle: "Action", title: "Assasin Creed", image: cardimg4, price: 32 },
  ];

  return (
    <div className="py-5">
      <ul className="tabs-ul d-flex justify-content-center">
        <li className="tabs-li">
          <h4
            className={
              toggleState === 1
                ? "tabs active-h4 px-2 py-2 p2"
                : "tabs px-2 py-2 p2"
            }
            onClick={() => toggleTab(1)}
          >
            Show All
          </h4>
        </li>
        <li className="tabs-li">
          <h4
            className={
              toggleState === 2
                ? "tabs active-h4 px-2 py-2 p2"
                : "tabs px-2 py-2 p2"
            }
            onClick={() => toggleTab(2)}
          >
            ADVENTURE
          </h4>
        </li>
        <li className="tabs-li">
          <h4
            className={
              toggleState === 3
                ? "tabs active-h4 px-2 py-2 p2"
                : "tabs px-2 py-2 p2"
            }
            onClick={() => toggleTab(3)}
          >
            STRATEGY
          </h4>
        </li>
        <li className="tabs-li">
          <h4
            className={
              toggleState === 4
                ? "tabs active-h4 px-2 py-2 p2"
                : "tabs px-2 py-2 p2"
            }
            onClick={() => toggleTab(4)}
          >
            RACING
          </h4>
        </li>
      </ul>
      <div className="tab-cont">
        <div className="content-tabs mt-3">
          <div
            className={
              toggleState === 1 ? "content  active-content" : "content"
            }
          >
            <section>
              <Container>
                <div className="home-cards-row d-flex justify-content-between align-items-center py-3">
                  {shopcards.map((elem, ind) => {
                    return (
                      <div key={ind} className="home-card position-relative">
                        <img
                          src={elem.image}
                          alt="trending-games"
                          className="card-img "
                        />
                        <div className="pr-box position-absolute rounded">
                          {elem.ogprice && (
                            <p className="m-0 text-light fw-bold text-decoration-line-through mb-1">
                              ${elem.ogprice}
                            </p>
                          )}
                          <p className="m-0 text-light fw-bold">
                            ${elem.price}
                          </p>
                        </div>
                        <div className="home-inner d-flex justify-content-between align-items-center my-3">
                          <div className="left">
                            <span className="text-secondary">
                              {elem.subtitle}
                            </span>
                            <h5 className="mt-2 fw-bold">{elem.title}</h5>
                          </div>
                          <div className="right">
                            <span className="rounded-circle bg-danger">
                              <FontAwesomeIcon
                                className="text-light"
                                icon={faBagShopping}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="home-cards-row d-flex justify-content-between align-items-center py-3">
                  {shopcards.map((elem, ind) => {
                    return (
                      <div key={ind} className="home-card position-relative">
                        <img
                          src={elem.image}
                          alt="trending-games"
                          className="card-img "
                        />
                        <div className="pr-box position-absolute rounded">
                          {elem.ogprice && (
                            <p className="m-0 text-light fw-bold text-decoration-line-through mb-1">
                              ${elem.ogprice}
                            </p>
                          )}
                          <p className="m-0 text-light fw-bold">
                            ${elem.price}
                          </p>
                        </div>
                        <div className="home-inner d-flex justify-content-between align-items-center my-3">
                          <div className="left">
                            <span className="text-secondary">
                              {elem.subtitle}
                            </span>
                            <h5 className="mt-2 fw-bold">{elem.title}</h5>
                          </div>
                          <div className="right">
                            <span className="rounded-circle bg-danger">
                              <FontAwesomeIcon
                                className="text-light"
                                icon={faBagShopping}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="home-cards-row d-flex justify-content-between align-items-center py-3">
                  {shopcards.map((elem, ind) => {
                    return (
                      <div key={ind} className="home-card position-relative">
                        <img
                          src={elem.image}
                          alt="trending-games"
                          className="card-img "
                        />
                        <div className="pr-box position-absolute rounded">
                          {elem.ogprice && (
                            <p className="m-0 text-light fw-bold text-decoration-line-through mb-1">
                              ${elem.ogprice}
                            </p>
                          )}
                          <p className="m-0 text-light fw-bold">
                            ${elem.price}
                          </p>
                        </div>
                        <div className="home-inner d-flex justify-content-between align-items-center my-3">
                          <div className="left">
                            <span className="text-secondary">
                              {elem.subtitle}
                            </span>
                            <h5 className="mt-2 fw-bold">{elem.title}</h5>
                          </div>
                          <div className="right">
                            <span className="rounded-circle bg-danger">
                              <FontAwesomeIcon
                                className="text-light"
                                icon={faBagShopping}
                              />
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Container>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurShopSec2;
