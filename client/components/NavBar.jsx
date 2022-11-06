import React from 'react';
import Login from './Login';
import SignUp from './SignUp';    

// component that will include or sign up / login and favorites
export default function NavBar() {
  return(
    <nav>
      <button type='submit' id="fav" onClick={() => console.log('route to favorites page')}>Favorites</button>
      <SignUp />
    </nav>
  )
    
}

