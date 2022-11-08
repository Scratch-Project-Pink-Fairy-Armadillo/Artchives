  import React, { useEffect, useState } from 'react';
  import ArtBox from './ArtBox';
  import NavBar from './NavBar';
  import About from './About';
  
  export default function ArtContainer(props) {
      //image id which we have to get from the fetch call https://api.artic.edu/api/v1/artworks?page=1&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cartist_display%2Cdepartment_title%2Cdepartment_id%2Cartwork_type_title%2Cmain_reference_number%2Cimage_id%2Cconfig%2C
      //this website gives you objects with the image id in those objects

      const [results, setResults] = useState([]);
      const [page, setPage] = useState(1);
      const [favs, setFavs] = useState(['h'])

    const handleClick = () => {
      setResults([]);
      setPage(page + 1);
    }

    const handleClick2 = () => {
      setResults([]);
      if (page > 1) setPage(page - 1);
    }

const api = `https://api.artic.edu/api/v1/artworks?page=${page}&fields=id,title,artist_display,date_display,artist_display,department_title,department_id,artwork_type_title,main_reference_number,image_id,config`;

    //have function in here that will increment page if the next page button is clicked

       useEffect(() => {    
        // createArtBox();
        // setPage(page + 1);
          // window.onscroll = function() {
          // if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight + 190) {
              // setPage(page + 1);
              createArtBox();
          // }
      // }
        }, [page]) //page needs to go in parameter

      function createArtBox() {
        // const api = `https://api.artic.edu/api/v1/artworks?page=${page}&fields=id,title,artist_display,date_display,artist_display,department_title,department_id,artwork_type_title,main_reference_number,image_id,config`;
        // const api = `https://api.artic.edu/api/v1/artworks?page=1&fields=id,title,artist_display,date_display,artist_display,department_title,department_id,artwork_type_title,main_reference_number,image_id,config`;
  
        //promise all fetch with 2 links
        //https://api.artic.edu/api/v1/artworks?page=1&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cartist_display%2Cdepartment_title%2Cdepartment_id%2Cartwork_type_title%2Cmain_reference_number%2Cimage_id%2Cconfig%2C
        //https://www.artic.edu/iiif/2/{image_id}/full/843,/0/default.jpg
        //inside of the fetch is where you'll set the image_id

        fetch(api)
        .then((data) => data.json())
        .then((data) => {
          // console.log(data);
          data.data.forEach(el => {
            const artId = el['id'];
            const title = el['title'];
            const image_id = el['image_id'];
            const artist_display = el['artist_display'];
            const artwork_type_title = el['artwork_type_title'];
            const date_display = el['date_display'];
            const department_title = el['department_title'];
            const department_id = el['department_id'];
            // console.log(el['image_id'])
            // setImageId(el['image_id']); //doesn't work for some reason
            // console.log(image_id)
            fetch('https://www.artic.edu/iiif/2/' + `${el['image_id']}` + '/full/843,/0/default.jpg')
            // .then((data) => data.json())
            .then((data) => {
              // console.log(data.url);
              // setResults([...data.url])
              // setImgUrl(data.url);
              // const imgUrl = data.url;

              results.push(<ArtBox 
                artId={artId} 
                title={title} 
                imgUrl={data.url}
                image_id={image_id}
                key={artId}
                artist_display={artist_display}
                artwork_type_title={artwork_type_title}
                date_display={date_display}
                department_title={department_title}
                department_id={department_id}
                favs = {favs}
              />)
              setResults([...results])
            })
          })
        })
  
    }

    return (
      <div>
      <NavBar /> 
        <About /> 
        {results}
        <div className='prevnextbuttons'>
        <button className='previous-button' onClick={() => {
                handleClick2();
            }}>Previous</button>
        <button className='next-button' onClick={() => {
                handleClick();
            }}>Next</button>
            </div>
      </div>

    )
  }