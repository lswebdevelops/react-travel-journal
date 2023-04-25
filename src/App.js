import React from 'react';
import Content from './Components/Content';
import Navbar from './Components/NavBar';
import './App.css';
import contentData from './Data/Data';

function App() {
const contentElements = contentData.map(item =>{
  return(
    <Content 
    key={item.id}
    {...item}/>
  )
})
  return (
    <div className="App">
      <Navbar />
      <div className='content-app'>
      {contentElements}
      </div>
      
    </div>
  );
};

export default App;
