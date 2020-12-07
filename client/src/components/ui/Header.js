import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';

const Header = ( props ) => {
    return (
        <Jumbotron fluid>
            <Container>
                <h1>Helping Gamers Connect With Other Gamers</h1>
                <p>
                    We want you to find other gamers who are playing the games you play, the way you play! Gone are the days
                    of searching forum boards with little to no results. You can log in as often as you want to check for new 
                    players looking to play what you like. Make sure to share this website with your friends as the more it grows
                    the more it is exponentially helpful!
                </p>
            </Container>
        </Jumbotron>
    )
}

export default Header;