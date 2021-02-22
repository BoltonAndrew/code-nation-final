import React from 'react';
import './App.css';
import React from 'react';
import { Home } from './pages/Home'; 

import Title from './components/Title';
import Banner from './components/Banner';
 



function App() {
  return (
    <div className="App">
      <Title />
      <br />
      <Banner /> 
      <br />
      <hr />
    </div>
  );
}

 
export default App;
