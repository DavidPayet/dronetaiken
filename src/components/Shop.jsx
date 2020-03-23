import React from 'react';
import DroneList from './DroneList';
import '../styles/Shop.scss';

import fetchedDrones from '../drones.json'
import { useState } from 'react';

const Products = () => {

  const [drone] = useState(fetchedDrones);
  return (
    <div className="Shop">
      <h1>Boutique</h1>
      <DroneList listDrones={drone} />
    </div >
  );
};

export default Products;