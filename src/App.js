import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetCard from './components/PlanetCard';
import Pagination from './components/Pagination';
import './style.css'

const App = () => {
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/planets/?page=${currentPage}`);
        setPlanets(response.data.results);
        setNextPage(response.data.next);
        setPrevPage(response.data.previous);
      } catch (error) {
        console.error('Error fetching planets:', error);
      }
    };

    fetchPlanets();
  }, [currentPage]);

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <div className="app">
      <h1>Star Wars Planets Directory</h1>
      <div className="planet-cards">
        {planets.map(planet => (
          <PlanetCard key={planet.name} planet={planet} />
        ))}
      </div>
      <Pagination 
        handleNextPage={handleNextPage} 
        handlePrevPage={handlePrevPage} 
        prevPage={prevPage} 
        nextPage={nextPage} 
      />
    </div>
  );
};

export default App;
