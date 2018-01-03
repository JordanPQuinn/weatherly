import React, {Component} from 'react';
import CityCard from './CityCard.js';
import Hourly from './hourly.js';
import data from './mock-data';

const App = () => {
  return (
    <div>
      <CityCard data={data} />
      <Hourly data={data.hourly_forecast} /> 
    </div>
  ) 
}
export default App; 