
  import React, { useEffect, useState } from 'react';
  import ArtBox from './ArtBox';
  
  export default function ArtContainer() {
  
      const idArray = ['16487', '14556', '16564', '27103', '63783','18754', 
      '25838', '66042', '27954', '27281', '28560', '34145', '45240']
      //image id which we have to get from the fetch call https://api.artic.edu/api/v1/artworks?page=1&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cartist_display%2Cdepartment_title%2Cdepartment_id%2Cartwork_type_title%2Cmain_reference_number%2Cimage_id%2Cconfig%2C
      //this website gives you objects with the image id in those objects
      



      const [count, setCount] = useState(0);
      const [results, setResults] = useState([]);
      const [imageId, setImageId] = useState(null);
      const [page, setPage] = useState(0);


  
      useEffect(() => {     
        //instead of count changing, we change page
        if (count < 12){
          
          createArtBox(idArray[count])
          setCount(count + 1);
          //console.log(count);
          
        }
       }, [count]);  

      function createArtBox(id) {
        const apiUrl = 'https://api.artic.edu/api/v1/artworks/' + id + '?fields=id,title,image_id';

        const api = `https://api.artic.edu/api/v1/artworks?page=${page}&fields=id,title,artist_display,date_display,artist_display,department_title,department_id,artwork_type_title,main_reference_number,image_id,config`;
  
        //promise all fetch with 2 links
        //https://api.artic.edu/api/v1/artworks?page=1&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cartist_display%2Cdepartment_title%2Cdepartment_id%2Cartwork_type_title%2Cmain_reference_number%2Cimage_id%2Cconfig%2C
        //https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg
        //inside of the fetch is where you'll set the image_id

        fetch(api)
        .then ((data) => data.json());
        .then ((data) => {
          data.data.forEach(el => {
            el.
          })
        })


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