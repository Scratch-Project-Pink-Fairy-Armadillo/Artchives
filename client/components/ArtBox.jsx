import React, { useEffect , useState } from 'react';
import ArtContainer from './ArtContainer';



export default function ArtBox(props) {
    console.log(props)
    console.log('here');
    const [isFavorite , setFavorite] = useState(false);


/*
    useEffect(() => {
        console.log('here')
        fetch(apiUrl)
        .then((data) => data.json())
        .then((data) => {
        setArtTitle(data.data.title);
        setimgUrl(data.config.iiif_url + '/' + data.data.image_id + '/full/843,/0/default.jpg')
        console.log(imgUrl);
      });
    }, []);

*/

    return(
        <div id={props.artID} className='artbox-div'>
            <img id={props.artID + '-image'} src={props.imgUrl} alt="artwork" />
            <p>{props.title}</p>
            <p>here</p>
            <button id={props.artID + '-button'} className='favorite-button'>Favorite</button>
        </div>
    )
}


