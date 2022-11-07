import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import ArtBox from './ArtBox.jsx';

const Fetched = ({results}) => {
    return (
        <div className = 'results'>
            <ArtBox 
            results = {results}/>
        </div>
    )
};

export default Fetched;