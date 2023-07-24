import React from "react";
import cardimg1 from "../../assets/trending-01.jpg";
import cardimg2 from "../../assets/trending-02.jpg";
import cardimg3 from "../../assets/trending-03.jpg";
import cardimg4 from "../../assets/trending-04.jpg";
import { Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";

const ShopCards = () => {
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
    <section className='py-5'>
    <Container>
        <div className="home-card-text d-flex justify-content-between align-items-center py-3">
            <div className="inner-box-1">
                <span className='text-danger fw-bold'>TRENDING</span>
                <h2 className='fw-bold mt-3'>Trending Games</h2>
            </div>
            <div className="inner-box-2">
                <a href="" className='bg-danger text-light p-3 rounded-pill text-decoration-none'>VIEW ALL</a>
            </div>
        </div>
        <div className="home-cards-row d-flex justify-content-between align-items-center py-3">
            {
                shopcards.map((elem,ind)=>{
                    return(
                        <div key={ind} className="home-card position-relative">
                            <img src={elem.image} alt="trending-games" className='card-img ' />
                            <div className="pr-box position-absolute rounded">
                            {elem.ogprice && <p className="m-0 text-light fw-bold text-decoration-line-through mb-1">${elem.ogprice}</p>}
                                <p className='m-0 text-light fw-bold'>${elem.price}</p>
                            </div>
                            <div className="home-inner d-flex justify-content-between align-items-center my-3">
                                <div className="left">
                                <span className='text-secondary'>{elem.subtitle}</span>
                                <h5 className='mt-2 fw-bold'>{elem.title}</h5>    
                                </div>
                                <div className="right">
                                    <span className='rounded-circle bg-danger'><FontAwesomeIcon className='text-light' icon={faBagShopping} /></span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </Container>
    </section>
  );
};

export default ShopCards;
