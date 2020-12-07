import { useState, useRef, useEffect } from 'react';
import io from 'socket.io-client';
import './info.css';

function Gamertag() {

  const [yourId, setYourId] = useState();          // Stores user's ID
  const [message, setMessage] = useState("");      // Stores user's message
  const [messages, setMessages] = useState([]);    // Stores all messages the user has seen.

  const socketRef = useRef();                      // An instance of the user's socket

  useEffect(() => {

    socketRef.current = io.connect('/');           // Proxy set is package.json to allow '/' to direct to our server
    socketRef.current.on("your id", id => {        // Event listener to set the user's ID
      setYourId(id);
    });

    socketRef.current.on("message", body => {
      receivedMessage(body);
    })

  }, []);                                          // Runs only once on initial component render

  const receivedMessage = ( body ) => {
    setMessages((messages) => [...messages, body]);
  }

  const sendMessage = () => {

    const msgObj = {                               // Store the message as an object with the message body and user's ID
      body: message,
      id: yourId
    }

    setMessage("");                                // Clear the message back to an empty string

    socketRef.current.emit("send message", msgObj);

  }

  const handleMessageInput = (e) => {
    setMessage(e.target.value);
  }

  return (
    <div className="Gamertag">
      <h2>Enter Your Gamertag</h2>
      {messages.map((msg, ind) => (
        msg.id === yourId ? 
        <div className="User-msgs" key={ind}>
          {msg.body}
        </div> :
        <div className="Other-msgs" key={ind}>
          {msg.body}
        </div>
      ))}

      <div className="Input-bar">
        <input type="text" placeholder="Enter Gamertag" onChange={(e) => handleMessageInput(e)} />
        <button onClick={sendMessage}>Submit</button>
      </div>

    </div>
  );
}

export default Gamertag;
