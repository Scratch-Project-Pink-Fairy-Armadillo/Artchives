import React, { useEffect, useState } from 'react';
import ArtBox from './ArtBox';

export default function ArtContainer() {

    const idArray = ['229889', '239462', '155959', '140595', '146941']
    const [count, setCount] = useState(0);
    const [results, setResults] = useState([]);
  
    useEffect(() => {     
      if (count < 4){
        setCount(count + 1);
        createArtBox(idArray[count])
        console.log(count);
        
      }
      
    }, []);
    
    
    function createArtBox(id) {
      const apiUrl = 'https://api.artic.edu/api/v1/artworks/' + id + '?fields=id,title,image_id';

      fetch(apiUrl)
      .then((data) => data.json())
      .then((data) => {
        const artId = id;
        const title = data.data.title;
        const imgUrl = data.config.iiif_url + '/' + data.data.image_id + '/full/200,/0/default.jpg'
        results.push(<ArtBox artId={artId} title={title} imgUrl={imgUrl} key={artId}/>)
        //console.log(results[0])
        setResults(results[0])
      })  
    }
 
  
    return (
      <div>
        {results}
       {/* {
        results.map((art,i) => {
          { console.log(art)}
           <img src= {art} key={i}/>
          })

       } */}
      </div>

    )
  }
