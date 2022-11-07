import React, { useEffect, useState } from 'react';
import ArtBox from './ArtBox';

export default function ArtContainer() {

    const idArray = ['16487', '14556', '16564', '27103', '63783','18754', 
    '25838', '66042', '27954', '27281', '28560', '34145', '45240']
    const [count, setCount] = useState(0);
    const [results, setResults] = useState([]);
  
    useEffect(() => {     
      if (count < 12){
        
        createArtBox(idArray[count])
        setCount(count + 1);
        //console.log(count);
        
      }
     }, [count]);  

    function createArtBox(id) {
      const apiUrl = 'https://api.artic.edu/api/v1/artworks/' + id + '?fields=id,title,image_id';

      fetch(apiUrl)
      .then((data) => data.json())
      .then((data) => {
        const artId = id;
        const title = data.data.title;
        const imgUrl = data.config.iiif_url + '/' + data.data.image_id + '/full/200,/0/default.jpg'

        results.push(<ArtBox artId={artId} title={title} imgUrl={imgUrl} key={artId}/>)
        
        //console.log(results)
        
        setResults([...results])
   
      }) 
    }
 
  
    return (
      <div>
        {results}
   
      </div>

    )
  }

