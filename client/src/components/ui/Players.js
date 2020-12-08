import React from 'react';
import { Table } from 'react-bootstrap';

const Players = ( props ) => {
    return (
        <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                <th>#</th>
                <th>Game</th>
                <th>Playlist</th>
                <th>Gamertag</th>
                </tr>
            </thead>
            <tbody>  
                {props.payload.map((player, ind) => (
                    <tr key={player.id}>
                        <td>{ind}</td>
                        <td>{player.playerGame}</td>
                        <td>{player.playerPlaylist}</td>
                        <td>{player.playerName}</td>
                    </tr>
                ))}
                {props.dbPlayers.map((player, ind) => (
                    <tr key={player.id}>
                        <td>{ind}</td>
                        <td>{player.playerGame}</td>
                        <td>{player.playerPlaylist}</td>
                        <td>{player.playerName}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default Players;