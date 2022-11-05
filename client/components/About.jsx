import React from 'react';

// Debbie api to use:
// https://www.artic.edu/iiif/2/1adf2696-8489-499b-cad2-821d7fde4b33/full/843,/0/default.jpg
// Heres another? https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,main_reference_number,image_id
// non-stateful component that will be added to app on home page
export default function About() {
  return(
    <div>
    <h1 id="heading"> The Artchives</h1>
      <article>
        Explore thousands of different artworks featured in the Art Institute of Chicago. 
        Artchives allows you access to not only view these pieces, but also favorite them and
        add them to your own collection in order to better prepare you for your visit.
      </article>
    </div>
  )
}


