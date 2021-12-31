import React from 'react';

const Specie = ({ specie }) => {
    return (
        <div className="card">
        <h3>{ specie.name }</h3>
        <p>classification - { specie.classification }</p>
        <p>designation - { specie.designation }</p>
        <p>Langauge - { specie.language }</p>
        </div>
    );
}
   
export default Specie;