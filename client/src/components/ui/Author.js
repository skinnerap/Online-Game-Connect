import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Author = ( props ) => {
    return (
        <Card className="text-center">
            <Card.Header>Additional Information</Card.Header>
            <Card.Body>
                <Card.Title>Thank You</Card.Title>
                <Card.Text>
                    I created this application to help gamers help connect with other gamers who otherwise
                    would have a hard time finding each other. Some of my best friends in life have been made
                    behind the controller and an Xbox Live connection, and I want to pass on that wonderful
                    oppourtunity to as many people as possible. If you love this website please consider contributing
                    by simply spreading the word and linking the site. You can also contribute by providing important
                    information about new games to support on the website. Thank you so much for visiting and using
                    Game Connect!
                </Card.Text>
                <Button variant="primary">Developer Info / Contribute</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Alexander Skinner</Card.Footer>
        </Card>
    )
}

export default Author;