import React from 'react';

export default function About() {
    const idArray = ['229889', '239462', '155959', '140595', '146941']
    const boxes = [];
    for (let i = 0; i < 5; i++){
        boxes.push(<ArtBox artid = {idArray[i]} />)
    };

    return(
      <div className='art-container'>
        
      </div>
    )
  }
  