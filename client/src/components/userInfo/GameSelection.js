import React, { useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import './info.css';

const GameSelection = ( props ) => {

    const GAME_LIST = ['halo combat evolved', 'halo 2', 'halo 2 anniversary', 'halo 3', 'halo 3 odst', 'halo reach', 'halo 4', 'halo 5'];

    const [userSearch, setUserSearch] = useState("");
    const [validGameList, setValidGameList] = useState([]);
    const [selectedGame, setSelectedGame] = useState("");

    const handleUserSearchChange = (e) => {

        setUserSearch(e.target.value);
        updateValidGameList();
        
    }

    const updateValidGameList = () => {

        if(userSearch === "") {
            setValidGameList([]);
            return;
        }

        let validGames = [];
        GAME_LIST.forEach(game => {
            if(game.trim().includes(userSearch.toLowerCase().trim())) {
                validGames.push(game);
            }
        });

        setValidGameList(() => validGames);

    }

    const handleUserSelectedGame = (game) => {
        setValidGameList([]);                       // Reset the valid games list to empty array as user search is now empty
        setUserSearch("");                          // Reset the user's search to an empty string  
        props.gameSelected(game)                    // Sends the selected game back to the parent where data is being used
        setSelectedGame(() => game)                 // Stores the selected game locally for display in this component
    }

    return (
        <div className="Game-selection">
            <Form inline onSubmit={(e) => e.preventDefault()}>
                <FormControl 
                    type="text" 
                    placeholder="Search Game Titles" 
                    onChange={(e) => handleUserSearchChange(e)} 
                    className=" mr-sm-2" />
                <span style={{alignSelf: 'center', marginLeft: '10px', color: 'white'}}>Selected Game: {selectedGame}</span>
            </Form>

            

            <div className="Overlay">

                {validGameList ? 
                    validGameList.map((game, ind) => (
                        <option 
                            key={ind}
                            className="Game-option"
                            onClick={() => handleUserSelectedGame(game)}
                        >
                            {game}
                        </option>
                    )) : null}

            </div>

        </div>
    )
}

export default GameSelection;