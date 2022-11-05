import React, { useEffect , useState } from 'react';
import ArtContainer from './ArtContainer';



export default function ArtBox(props) {
    const [artTitle , setArtTitle] = useState(null);
    const apiUrl = `https://api.artic.edu/api/v1/artworks/${props.artId}?fields=id,title,image_id`



    useEffect(() => {
        fetch(apiUrl)
        .then((data) => data.json())
        .then((data) => {
        const imgUrl = data.config.iiif_url + '/' + data.data.image_id + '/full/843,/0/default.jpg';
        setArtTitle(data.data.title);
      });
    }, []);

    return(
        <div id={props.artID} className='artbox-div'>
            <img id={props.artID + '-image'}src={imgUrl} alt="artwork" />
            <p>{artTitle}</p>
            <button id={props.artID + '-button'} className='favorite-button'>Favorite</button>
        </div>
    )
}


