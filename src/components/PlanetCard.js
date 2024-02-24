import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style.css'


const PlanetCard = ({ planet }) => {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    const fetchResidents = async () => {
      const residentPromises = planet.residents.map(url => axios.get(url));
      try {
        const residentsData = await Promise.all(residentPromises);
        const residents = residentsData.map(res => res.data);
        setResidents(residents);
      } catch (error) {
        console.error('Error fetching residents:', error);
      }
    };

    fetchResidents();
  }, [planet.residents]);

  return (
    <div className="planet-card">
      <h2>{planet.name}</h2>
      <p><strong>Climate:</strong> {planet.climate}</p>
      <p><strong>Population:</strong> {planet.population}</p>
      <p><strong>Terrain:</strong> {planet.terrain}</p>
      <h3>Residents:</h3>
      <ul>
        {residents.map(resident => (
          <li key={resident.url}>
            <p><strong>Name:</strong> {resident.name}</p>
            <p><strong>Height:</strong> {resident.height}</p>
            <p><strong>Mass:</strong> {resident.mass}</p>
            <p><strong>Gender:</strong> {resident.gender}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanetCard;
