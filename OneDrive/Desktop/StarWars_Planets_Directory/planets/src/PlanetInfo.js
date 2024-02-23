import React from 'react'
import ResidentDetails from './ResidentDetails';
const PlanetInfo = (props) => {
  return (
    <div className='card'>
      <div className='planet-details'>
        <h3 className='planet-name'><h2>Planet Name:</h2>{props.planet.name}</h3>
        <p className='planet-climate'><h3>Climate:</h3>{props.planet.climate}</p>
        <p className='planet-population'><h3>Population:</h3> {props.planet.population}</p>
        <p className='planet-terrain'><h3>Terrain:</h3> {props.planet.terrain}</p></div>
        <h2>Residents:</h2>
        <ul>
          {props.planet.residents.map((residentUrl, index) => (
            <li key={index}>
              <ResidentDetails residentUrl={residentUrl} />
            </li>
          ))}
        </ul>
    </div>
  );
};

export default PlanetInfo