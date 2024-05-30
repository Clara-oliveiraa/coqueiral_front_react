import React from 'react';
import './etica.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Etica from './components/Etica';

const App = () => {
  console.log("App component is rendering");

  return (
    <div className="App">
    
      <Navbar />  
      <Etica />
     
    </div>
  );
}

export default App;
