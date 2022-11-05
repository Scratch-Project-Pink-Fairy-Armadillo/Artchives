import React, {Component} from 'react';
import NavBar from './NavBar';
import About from './About';
import ArtContainer from './ArtContainer';






const App = () => {
  return (
    <div>
      <h1>Hello World!</h1>
        <ArtContainer />
        <About /> 
    </div>
  )
}

export default App;