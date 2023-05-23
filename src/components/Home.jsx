import React from 'react'
import CardItem from './cart/CartItem';
import Banner from './Banner';

const Home = (props) => {
  return (
    <div>
        <Banner></Banner>
        <CardItem item={props.item}
        overlayItems={props.overlayItems}
        setOverlayItems={props.setOverlayItems}
        favorites={props.favorites}
        setFavorites={props.setFavorites}/>
    </div>
  )
}

export default Home