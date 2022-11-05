import React, { useEffect } from 'react';


export default function ArtBox() {

    const apiUrl = `https://api.artic.edu/api/v1/artworks/${this.props.artId}?fields=id,title,image_id`
    var imgUrl = {};
    var artTitle = ''

    useEffect(() => {
        fetch(apiUrl)
        .then((data) => data.json())
        .then((data) => {
            imgUrl = data.config.iiif_url;
            artTitle = data.title;
      });
    })

    return(
        <div className='artbox-div'>
            <img src={imgURL} alt="artwork" />
            <p>{artTitle}</p>
            <button className='favorite-button'>Favorite</button>
        </div>
    )
}


