import React, {Component} from 'react';
import ReactDOM from 'react-dom';
// import NavBar from './NavBar';
// import About from './About';
import '../../assets/styles.css';
import ArtContainer from './ArtContainer';
import { Routes, Route } from 'react-router-dom';  
import FavoritesPage from './FavoritesPage.jsx';


const App = () => {
  return (
    <div className = 'app'>
        <Routes>
          <Route path='/' element={ <ArtContainer /> }/>
          <Route path='/favorites' element={ <FavoritesPage/> } />
        </Routes>
     </div>
  )
};

export default App;