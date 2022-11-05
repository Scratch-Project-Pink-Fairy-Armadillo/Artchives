import React, { useEffect } from 'react';


export default function ArtBox() {

    const url = `https://api.artic.edu/api/v1/artworks/${this.props.artId}?fields=id,title,image_id`

    useEffect(() => {
        fetch('https://api.artic.edu/api/v1/artworks/229889?fields=id,feather-headdress,91b70d5e-519f-484b-d9e5-4a07f6fd171b/full/843/0/default.jpg')
        .then((data) => data.json())
        .then((data) => {
         
      });
    })

    return(
        <div className='artbox-div'>

        </div>
    )
}


