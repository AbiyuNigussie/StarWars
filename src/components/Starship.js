import React from 'react';

const Starship = ({ starship }) => {
  return (
    <div className="card">
      <h3>{ starship.name }</h3>
      <p>model - { starship.model }</p>
      <p>passangers - { starship.passengers }</p>
    </div>
  );
}
 
export default Starship;