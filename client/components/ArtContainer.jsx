import React, { useEffect, useState } from 'react';
import ArtBox from './ArtBox';

export default function ArtContainer() {
    console.log('line 5');

    const [count, setCount] = useState(0);
    const [results, setResults] = useState([]);

    useEffect(() => {
      const idArray = ['229889', '239462', '155959', '140595', '146941']
      if (count<5){
        const newCount = count + 1 
        setCount(newCount);
        createArtBox(idArray[count])
      }

    })

    function createArtBox(id) {
      console.log('line 22');
      const apiUrl = 'https://api.artic.edu/api/v1/artworks/' + id + '?fields=id,title,image_id';

      fetch(apiUrl)
      .then((data) => data.json())
      .then((data) => {
        const artID = id;
        const title = data.data.title;
        const imgUrl = data.config.iiif_url + '/' + data.data.image_id + '/full/843,/0/default.jpg'
        console.log(results);
        const newResults = results.push((<ArtBox title = {title} imgUrl = {imgUrl} artID={id}/>))
        setResults(newResults);
    })
    }

    return (
      <div className='art-container'> {results} </div>
    )

  }
