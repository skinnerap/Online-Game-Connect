import React from 'react';
import Infographic from '../ui/Infographic';
import Navigation from '../ui/Navigation';
import Author from '../ui/Author';
import './home.css';

const Home = ( props ) => {
    return (
        <div className="Home">
            <Navigation />
            <Infographic />
            <Author />
        </div>
    )
}

export default Home;