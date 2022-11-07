import React, { useEffect , useState } from 'react';
import ArtContainer from './ArtContainer';



export default function ArtBox(props) {
    // console.log(props)
    // console.log('here');
    const [isFavorite , setFavorite] = useState(false);



    // useEffect(() => {
    //     console.log(props)
    //     setFavorite(props);
    // }, []);



const handleClick = (props) => {
    fetch('http://localhost:3000/favorites', {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON'
        },
        body: JSON.stringify(props)
      })
        .then(resp => resp.json())
        .then((data) => {
          console.log(data);
        })

}

    return(
        <div className='artbox-div'>

            <img src={props.imgUrl} alt="artwork" />
            {/* <p>{props.title}</p> */}
            <button className='favorite-button' onClick={() => {
                console.log('favorited!');
                handleClick();
            }}>Favorite</button>
        </div>
    )
}
