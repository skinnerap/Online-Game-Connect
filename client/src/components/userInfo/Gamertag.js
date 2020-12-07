import { useState, useRef, useEffect } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
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

  const sendMessage = (e) => {

    e.preventDefault();                            // Prevents Form from submitting
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
      <Form inline onSubmit={(e) => sendMessage(e)}>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Gamertag"
            aria-label="Gamertag"
            aria-describedby="basic-addon1"
            onChange={(e) => handleMessageInput(e)}
          />
        </InputGroup>
      </Form>
      {messages.map((msg, ind) => (
        msg.id === yourId ? 
        <span className="User-msgs" style={{alignSelf: 'center', marginLeft: '10px', color: 'white'}} key={ind}>
          {msg.body}
        </span> :
        <span className="Other-msgs" style={{alignSelf: 'center', marginLeft: '10px', color: 'white'}} key={ind}>
          {msg.body}
        </span>
      ))}

    </div>
  );
}

export default Gamertag;
