import React from 'react';
import { AiOutlineShop } from "react-icons/ai";
import { TiArrowForwardOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';

import '../styles/EmptyCart.scss';

const EmptyCart = () => {
  return (
    <div className="EmptyCart">
      <p>Votre panier ne contient aucun article pour le moment..</p>
      <br />
      <p>Accédez à la boutique..</p>
      <br />
      <Link to="shop-section" className="shopLink">
        <TiArrowForwardOutline className="arrow" />
        <AiOutlineShop className="aiShop" />
      </Link>
    </div>
  )
}

export default EmptyCart;