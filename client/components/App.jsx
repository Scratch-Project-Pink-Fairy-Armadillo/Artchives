import React, {Component} from 'react';
import NavBar from './NavBar';
import About from './About';
import ArtContainer from './ArtContainer';
import FetchDisplayArt from './FetchDisplayArt';






const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
        <FetchDisplayArt />
        <About /> 
    </div>
  )
}

export default App;