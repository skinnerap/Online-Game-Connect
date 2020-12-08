import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Logo = () => {
    return (
        <Container className="bg-dark" style={{color: 'white'}} fluid>
            <Row>
                <Col>
                    <h1 style={{textAlign: 'center'}}>FindGamers.xyz</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default Logo;