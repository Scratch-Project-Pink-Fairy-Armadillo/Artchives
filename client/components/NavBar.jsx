import React from 'react';
import Login from './Login';
import SignUp from './SignUp';    

// component that will include or sign up / login and favorites
export default function NavBar() {
  return(
    <nav>
      <button type='submit' id="NavFav" onClick={() => console.log('route to favorites page')}>Favorites</button><b /> <img id="chive" src='https://cdn-icons-png.flaticon.com/512/5520/5520701.png' width={50}/>
      <SignUp />
    </nav>
  )
    
}

