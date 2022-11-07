import React, { useEffect , useState } from 'react';
import ArtContainer from './ArtContainer';



export default function ArtBox(props) {
    console.log(props)
   // console.log('here');
    const [isFavorite , setFavorite] = useState(false);



    // useEffect(() => {
    //     console.log(props)
    //     setFavorite(props);
    // }, []);




    return(
        <div id='{props.artID}' className='artbox-div'>

            <img id={props.artID + '-image'} src={props.imgUrl} alt="artwork" />
            <p>{props.title}</p>
            <button id='favButton' className='favorite-button' onClick={() => console.log('favorited!')}>Favorite</button>
        </div>
    )
}
