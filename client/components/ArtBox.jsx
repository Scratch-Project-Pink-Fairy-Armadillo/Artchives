import React, { useEffect , useState } from 'react';
import ArtContainer from './ArtContainer';


export default function ArtBox(props) {
    // console.log(props)
    // console.log('here');
    const [isFavorite , setFavorite] = useState(false);
    const [artwork, setArtwork] = useState('');
    const [isShown, setIsShown] = useState(false);

    //props.favs is an empty array right now
    // console.log(props);

    // useEffect(() => {
    //     console.log(props)
    //     setFavorite(props);
    // }, []);
  

const handleClick = (e) => {
  // console.log(props.image_id)
  const image_id = props.image_id;

  // e.preventDefault();
  const id = props.artId;
  // console.log("this is artId",artId);
  const title = props.title;
  // const image_id = props.image_id;
  const artist_display= props.artist_display;
  const artwork_type_title= props.artwork_type_title;
  const date_display= props.date_display;
  const department_title= props.department_title;
  const department_id= props.department_id;
//   console.log(props)
    // fetch('http://localhost:3000/favorites', {
    //     method: 'POST',
    //     // body: JSON.stringify({id, title, image_id, artist_display, artwork_type_title, date_display, department_title, department_id})
    //     body: JSON.stringify({image_id})
    //   })
    //     .then(resp => resp.json())
    //     .then((resp) => {
    //       console.log('fetched!');
    //     })
        // console.log(props);
        // .catch (err => console.log(err));

        if (!isFavorite){ 
          const artComp = {id, title, image_id, artist_display, artwork_type_title, date_display, department_title, department_id};
          setFavorite(artComp);
        console.log("This art is now a favorite." ,artComp);
        
    }
  }


    return(
        <div className='artbox-div'>

            <img src={props.imgUrl} height = "200" width= "200" alt="artwork" onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)}/>
            <p>{props.title}</p>
            {/* <p>{props.title}</p> */}
            <button className='favorite-button' onClick={(e) => {
              //setFavs in here with favorites
                console.log('favorited!');
                handleClick(e.target.value);
            }}>Favorite</button>
            {isShown && (
        <div>
          <p>{props.artist_display}</p>
          <p>era: {props.date_display}</p>
        </div>
      )}
        </div>
    )
}
