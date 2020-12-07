import React from 'react';
import GameSelection from '../userInfo/GameSelection';
import Gamertag from '../userInfo/Gamertag';
import GameTypeChoices from '../userInfo/GameTypeChoices';

const Home = ( props ) => {
    return (
        <div>
            <GameSelection />
            <Gamertag />
            <GameTypeChoices />
        </div>
    )
}

export default Home;