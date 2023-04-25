import React from 'react';
import Content from './Components/Content';
import Navbar from './Components/NavBar';
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='content-app'>
      <Content />     
      <Content />      
      < Content />
      </div>
      
    </div>
  );
}

export default App;
