import React from 'react';
import './Home.css'
import SearchBar from '../../components/SearchBar/SearchBar';
import Princing from '../Pricing/Pricing';

const Home = () => {
  return (
    <div className='home'>
     <h1>HOME</h1>
     <SearchBar/>
    </div>
  );
}

export default Home;
