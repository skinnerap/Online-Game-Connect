import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import './info.css';

const GameTypeChoices = ( props ) => {

    const GAME_TYPES = ['MLG Customs', 'Multiplayer Online Ranked', 'Multiplayer Online Social', 'Custom Games', 'Campaign'];

    const [selectedGameType, setSelectedGameType] = useState("");

    const updateSelectedGameType = ( gameType ) => {
        props.gameTypeSelected(gameType);
        setSelectedGameType(() => gameType);
    }

    return (
        <div className="Game-type-choices">
            <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Select Game Type
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {GAME_TYPES.map((gameType, ind) => (
                        <Dropdown.Item 
                            key={ind} 
                            onClick={() => updateSelectedGameType(gameType)}
                        >
                            {gameType}
                        </Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            
            <span style={{alignSelf: 'center', marginLeft: '10px', color: 'white', border: '1px solid #666', padding: '5px', borderRadius: '5px'}}>Selected Game Type: {selectedGameType}</span>

        </div>
    )
}

export default GameTypeChoices;