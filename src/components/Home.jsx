import React from 'react';
import GameDetails from './GameSection/GameDetails';
import GameOverlapsCards from './GameOverlapCards/GameOverlapsCards';
import ShopCards from './OurShopCards/ShopCards';
import ViewCards from './ViewCards/ViewCards';
import CategoryCard from './Categorycard/CategoryCard';
import NewsLetter from './Newsletter/NewsLetter';
// import FooterHome from './Footer-Home/FooterHome';

const Home = () => {
  return (
    <>
    <GameDetails/>
    <GameOverlapsCards/>
    <ShopCards/>
    <ViewCards/>
    <CategoryCard/>
    <NewsLetter/>
    {/* <FooterHome/> */}
    </>
  )
}

export default Home