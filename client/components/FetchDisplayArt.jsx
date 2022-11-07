import React, { Component } from 'react';

export default class FetchDisplayArt extends Component {
    
    state = {
        loading: true,
        artworkUrl: null,
        artworkTitle: null
    }
    
    async componentDidMount() {
        const url = 'https://api.artic.edu/api/v1/artworks?page=1&fields=id%2Ctitle%2Cartist_display%2Cdate_display%2Cartist_display%2Cdepartment_title%2Cdepartment_id%2Cartwork_type_title%2Cmain_reference_number%2Cimage_id%2Cconfig%2C'
        const response = await fetch(url);
        const data = await response.json();
        const id = data.data[3].id; 
        const title = data.data[3].title;
        const url2 = 'https://api.artic.edu/api/v1/artworks/' + id + '?fields=id,title,image_id'
        const response2 = await fetch(url2)
        const data2 = await response2.json();
        const finalUrl = data2.config.iiif_url + '/' + data2.data.image_id + '/full/843,/0/default.jpg'
        console.log(data2.config.iiif_url)
        this.setState({artworkUrl: finalUrl , artworkTitle: title, loading: false} )
        console.log(data2.config.iiif_url)
        console.log(data2.data.image_id)
        
        console.log('HELLO')
        console.log('test   '+ url2)
        console.log(finalUrl)
        
    }

//https://www.artic.edu/iiif/2 + / + 90bc0cec-0d4e-9af5-3912-52a082a428e5 + /full/843,/0/default.jpg
// https://www.artic.edu/iiif/2/90bc0cec-0d4e-9af5-3912-52a082a428e5/full/843,/0/default.jpg
// https://www.artic.edu/iiif/2/90bc0cec-0d4e-9af5-3912-52a082a428e5/full/843,/0/default.jpg


    render(){
        return (
            <div>
                {this.state.loading || !this.state.artworkTitle ? (
                    <div>loading...</div>
                ) : ( <div> 
                    <div>{this.state.artworkTitle}</div>
                    <img src={this.state.artworkUrl} alt="art piece" />
                </div> )
            }


            </div>
        )
    }
}
