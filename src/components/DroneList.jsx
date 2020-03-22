import React from 'react';
import Drone from './Drone';
import '../styles/DroneList.scss';

const DroneList = (props) => {
  return (
    <div className="DroneList" >
      {props.listDrones.map(drone => (
        <Drone
          oneDrone={drone}
          key={drone.id}
        />
      ))}
    </div>
  );
}

export default DroneList;