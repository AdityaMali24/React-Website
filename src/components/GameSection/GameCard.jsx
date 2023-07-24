import React from 'react';
import gameimg from '../../assets/banner-image.jpg';

const GameCard = () => {
  return (
    <div className="game-img text-end position-relative ms-auto">
        <img src={gameimg} alt="game-card" className='' />
        <span className="tool bg-danger position-absolute top-100 start-0 translate-middle text-light">
            -40%
        </span>
        <span className="price rounded-pill bg-primary position-absolute text-light fw-bold fs-4">
            22$
        </span>
    </div>
  )
}

export default GameCard