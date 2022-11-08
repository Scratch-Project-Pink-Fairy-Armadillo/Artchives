import React from 'react';


export default function FavBox() {
    useEffect = () => {
        fetch('http://localhost:3000/favorites')
            .then(resp => resp.json())
            .then((data) => {
              console.log('fetched!');
            })
    }

    return (
        <div>
          <h1>Favorites</h1>
       </div>
      )

    
}