import React from 'react';
import { Container } from "react-bootstrap";
import catimg1 from "../../assets/top-game-01.jpg";
import catimg2 from "../../assets/top-game-02.jpg";
import catimg3 from "../../assets/top-game-03.jpg";
import catimg4 from "../../assets/top-game-04.jpg";
import catimg5 from "../../assets/top-game-05.jpg";


const ProSec4 = () => {
  return (
    <section className='py-5'>
        <Container>
        <div className="home-card-text d-flex justify-content-between align-items-center py-3">
          <div className="inner-box-1">
            <span className="text-danger fw-bold">Action</span>
            <h2 className="fw-bold mt-3">Related Games</h2>
          </div>
          <div className="inner-box-2">
            <a
              href=""
              className="bg-danger text-light p-3  rounded-pill text-decoration-none"
            >
              VIEW ALL
            </a>
          </div>
        </div>
        <div class="home-cards-row d-flex justify-content-between align-items-center py-5">
            <div class="home-card cat-card position-relative">
                <h5 class="py-3 mt-1 text-light text-center">Action</h5>
                <img src={catimg1} alt="trending-games" class="card-img "/>
            </div>
            <div class="home-card cat-card position-relative">
                <h5 class="py-3 mt-1 text-light text-center">Action</h5>
                <img src={catimg2} alt="trending-games" class="card-img "/>
            </div>
            <div class="home-card cat-card position-relative">
                <h5 class="py-3 mt-1 text-light text-center">Action</h5>
                <img src={catimg3} alt="trending-games" class="card-img "/>
            </div>
            <div class="home-card cat-card position-relative">
                <h5 class="py-3 mt-1 text-light text-center">Action</h5>
                <img src={catimg4} alt="trending-games" class="card-img "/>
            </div>
            <div class="home-card cat-card position-relative">
                <h5 class="py-3 mt-1 text-light text-center">Action</h5>
                <img src={catimg5} alt="trending-games" class="card-img "/>
            </div>
        </div>
        </Container>
    </section>
  )
}

export default ProSec4