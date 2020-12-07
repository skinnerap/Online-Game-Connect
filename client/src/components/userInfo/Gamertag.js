import { useState } from 'react';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';
import './info.css';

const Gamertag = ( props ) => {

  const [gamerName, setGamerName] = useState("");      // Stores user's message

  const handleMessageInput = (e) => {
    setGamerName(e.target.value);
  }

  return (
    
    <div className="Gamertag">
      <Form inline onSubmit={(e) => e.preventDefault()}>
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
        <Button onClick={() => props.playerName(gamerName)} style={{marginLeft: '5px'}}>Add Name</Button>
      </Form>

    </div>
  );
}

export default Gamertag;
