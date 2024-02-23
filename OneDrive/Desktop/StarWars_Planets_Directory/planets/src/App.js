import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PlanetInfo from './PlanetInfo';
import './App.css'
const App = () => {
  const [planetsdata, setPlanetsdata] = useState([]);
  const [currentpage,setcurrentpage] = useState(1)
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(`https://swapi.dev/api/planets/?page=${currentpage}&format=json`);
        setPlanetsdata(res.data.results);
      } catch (error) {
        console.error('Error');
      }
    };
    fetchdata();
  }, [currentpage]);
  return (
    <div className='container'>
    <div className='head'> 
    Star Wars Planets Directory
      </div>
      <div className='body'>
         {planetsdata.map((item, index) => (
        <PlanetInfo key={index} planet={item} />
      ))}
      <div className='pagination'>
        <button className={currentpage==1? 'btnnotdispaly':''}onClick={()=>{
          setcurrentpage(currentpage-1)
        }}>prev</button>
        <button onClick={()=>{
          setcurrentpage(currentpage+1)
        }}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default App;

