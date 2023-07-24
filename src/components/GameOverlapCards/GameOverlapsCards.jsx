import React from 'react'
import img1 from "../../assets/featured-01.png";
import img2 from "../../assets/featured-02.png";
import img3 from "../../assets/featured-03.png";
import img4 from "../../assets/featured-04.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const GameOverlapsCards = () => {
    const mycards = [
        { title: "FREE STORAGE", src: img1 },
        { title: "USER MORE", src: img2 },
        { title: "REPLAY READY", src: img3 },
        { title: "EASY LAYOUT", src: img4 },
      ];
      console.log(mycards);
  return (
    <Container>
      <Row className="g-3 game-card-row py-5 justify-content-center">
        {mycards.map((elem, ind) => {
          return (
            <Col key={ind} className="game-card-col col-12 col-md-6 col-lg-3 ">
              <div className="m-auto mb-4 text-center rounded-circle"><img src={elem.src} alt="images" className="pt-4"/></div>
              <h5 className="fw-bold">{elem.title}</h5>
            </Col>
          );
        })}
      </Row>
    </Container>
  )
}

export default GameOverlapsCards