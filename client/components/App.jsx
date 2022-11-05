import React, {Component} from 'react';
import NavBar from './NavBar';
import About from './About';
import ArtContainer from './ArtContainer';


const App = () => {
  return (
    <div>
        <NavBar /> 
        <ArtContainer />
        <About /> 
    </div>
  )
}

export default App;