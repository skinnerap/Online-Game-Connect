import React, { useState } from 'react';
import './info.css';

const GameTypeChoices = ( props ) => {

    const GAME_TYPES = ['MLG Customs', 'Multiplayer Online Ranked', 'Multiplayer Online Social', 'Custom Games', 'Campaign'];

    const [selectedGameType, setSelectedGameType] = useState("");

    return (
        <div className="Game-type-choices">
            <h2>Choose Game Type</h2>
            {GAME_TYPES.map((gameType, ind) => (
                <div className="Game-choice" key={ind} onClick={() => setSelectedGameType(gameType)}>
                    {gameType}
                </div>
            ))}
            <p>Selected Game Type: {selectedGameType}</p>
        </div>
    )
}

export default GameTypeChoices;