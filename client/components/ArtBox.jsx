import React, { useEffect } from 'react';


export default function ArtBox() {

    const url = `https://api.artic.edu/api/v1/artworks/${this.props.artId}?fields=id,title,image_id`

    useEffect(() => {
        fetch(url)
        .then((data) => data.json())
        .then((data) => {
            
      });
    })

    return(
        <div className='artbox-div'>

        </div>
    )
}


