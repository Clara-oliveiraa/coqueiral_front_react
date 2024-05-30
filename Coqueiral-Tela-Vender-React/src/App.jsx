import React from 'react';
import './vender.css';
import Vender from './components/Vender';
import Navbar from './components/Navbar';
import Banner from './components/Banner';

const App = () => {
  console.log("App component is rendering");

  return (
    <div className="App">
    
      <Navbar />
      <Vender />
     
    </div>
  );
}

export default App;
