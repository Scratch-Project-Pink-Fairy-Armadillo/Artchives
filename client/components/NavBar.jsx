import React from 'react';
import Login from './Login';
import SignUp from './SignUp';  
import FavoritesPage from './FavoritesPage.jsx';
import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();

// const navigate = useNavigate();
// component that will include or sign up / login and favorites
export default function NavBar(props) {
  // const [fav, setFav] = useState(props.favs)
  const navigate = useNavigate();

  return(
    <div>
    <nav>
      <button type='submit' id="NavFav" onClick={() => {
        // console.log(props)
        navigate("/favorites")
      }
      }>Favorites</button><b /> <img id="chive" src='https://cdn-icons-png.flaticon.com/512/5520/5520701.png' width={50}/>
      <SignUp />
    </nav>
    </div>
  )
    
}

