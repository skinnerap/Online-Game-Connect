import React, { useState } from 'react';
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
        setSelectedGame(game);                      // Store the selected game
    }

    return (
        <div className="GameSelection">

            <h2>Search For Your Game</h2>

            <input 
                type="text" 
                placeholder="Search Game Titles" 
                onChange={(e) => handleUserSearchChange(e)} />
            {validGameList ? 
            validGameList.map((game, ind) => (
                <div 
                    className="Game-choice" 
                    key={ind}
                    onClick={() => handleUserSelectedGame(game)}
                >
                    {game}
                </div>
            )) : 
            null}

            <p>Selected Game: {selectedGame}</p>

        </div>
    )
}

export default GameSelection;