import React from 'react';
import { Container } from 'react-bootstrap';
import Infographic from '../ui/Infographic';
import Navigation from '../ui/Navigation';
import Author from '../ui/Author';
import './home.css';

const Home = ( props ) => {
    return (
        <Container fluid>
            <Navigation />
            <Infographic />
            <Author />
        </Container>
    )
}

export default Home;