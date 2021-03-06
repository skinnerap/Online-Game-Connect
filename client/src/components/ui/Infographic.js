import React, { useState } from 'react';
import { Card, Accordion, Button } from 'react-bootstrap';
import './ui.css';

const Infographic = ( props ) => {

    const [accordianIsOpen, setAccordianIsOpen] = useState(true);

    return (  
        <Accordion defaultActiveKey="0">
            <Card>
                <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0" onClick={() => setAccordianIsOpen(!accordianIsOpen)}>
                    {accordianIsOpen ? 'Hide this message' : 'How it Works'}
                </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <div>
                        <h2 style={{textAlign: 'center'}}>How It Works</h2>
                        <div className="Infographic">
                            <Card style={{ width: '18rem', marginRight: '20px' }}>
                                <Card.Body>
                                    <Card.Title>Enter Your Gamertag</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">How gamers find you, and you find other gamers!</Card.Subtitle>
                                    <Card.Text>
                                    This is how other gamers can find you. Gamers can send you friend requests on Xbox Live using
                                    your gamertag, or, you can send a request to others.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', marginRight: '20px' }}>
                                <Card.Body>
                                    <Card.Title>Select Your Game</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">More game support is coming soon!</Card.Subtitle>
                                    <Card.Text>
                                    Use the search bar to find your favorite game. Simply click your favorite game once it pops up while you
                                    are searching.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem', marginRight: '20px' }}>
                                <Card.Body>
                                    <Card.Title>Pick a Game Type</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">Play matchmaking, custom games, campaign, and more!</Card.Subtitle>
                                    <Card.Text>
                                    Choose a game type that you want to play today. Some players like big team battle customs, others like ranked
                                    matchmaking playlists!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                        
                    </div>
                </Card.Body>
                </Accordion.Collapse>
            </Card> 
        </Accordion>  
       
    )
}

export default Infographic;