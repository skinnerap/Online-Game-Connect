import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Button } from 'react-bootstrap';
import GameSelection from '../userInfo/GameSelection';
import GameTypeChoices from '../userInfo/GameTypeChoices';
import Gamertag from '../userInfo/Gamertag';
import Players from '../ui/Players';
import io from 'socket.io-client';

const Navigation = ( props ) => {

    const [yourId, setYourId] = useState();            // Stores user's ID
    const [playerName, setPlayerName] = useState("")   // Stores user's Gamertag Name or "Player Name"
    const [gameSelected, setGameSelected] = useState("") // Stores user's selected game (by title)
    const [playlistSelected, setPlaylistSelected] = useState("") // Stores user's selected playlist preference
    const [messages, setMessages] = useState([]);      // Stores all messages the user has seen.

    const socketRef = useRef();                        // An instance of the user's socket

    useEffect(() => {

        socketRef.current = io.connect('/');           // Proxy set is package.json to allow '/' to direct to our server
        socketRef.current.on("your id", id => {        // Event listener to set the user's ID
            setYourId(id);
        });

        socketRef.current.on("message", body => {      // When the user's socket receives a "message" event
            receivedMessage(body);                         // Pass the message to a function to receive it
        })

    }, []);                                            // Runs only once on initial component render

    const receivedMessage = ( body ) => {              // Updates the stored player detail messages sent to the server
        setMessages((messages) => [...messages, body]);
    }

    const sendPlayerDetails = (e) => {

        e.preventDefault();                            // Prevents Form from submitting
        const msgObj = {                               // Store the message as an object with the message body and user's ID
            playerName: playerName,
            playerGame: gameSelected,
            playerPlaylist: playlistSelected,
            id: yourId
        }

        socketRef.current.emit("send message", msgObj);

    }

    const updatePlayerName = ( playerName ) => {
        setPlayerName(() => playerName);
    }

    const updateGameSelected = ( gameSelected ) => {
        setGameSelected(() => gameSelected);
    }

    const updatePlaylistSelected = ( playlistSelected ) => {
        setPlaylistSelected(() => playlistSelected);
    }

    return (
        <>
        <Navbar variant="dark" background="dark" className="bg-dark justify-content-between">
            <Gamertag playerName={(playerName) => updatePlayerName(playerName)}/>
            <GameSelection gameSelected={(gameSelected) => updateGameSelected(gameSelected)} />
            <GameTypeChoices gameTypeSelected={(playlistSelected) => updatePlaylistSelected(playlistSelected)} /> 
            <Button onClick={(e) => sendPlayerDetails(e)}>
                Submit
            </Button>
        </Navbar>
        <Players payload={messages} />
        </>
    )
}

export default Navigation;