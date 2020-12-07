import React from 'react';
import { Navbar } from 'react-bootstrap';
import GameSelection from '../userInfo/GameSelection';
import GameTypeChoices from '../userInfo/GameTypeChoices';
import Gamertag from '../userInfo/Gamertag';

const Navigation = ( props ) => {
    return (
        <Navbar className="bg-dark justify-content-between">
            <GameSelection />
            <Gamertag />
            <GameTypeChoices /> 
        </Navbar>
    )
}

export default Navigation;