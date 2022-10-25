import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from '@mui/material/Container';
import { appData } from '../config/data';

import '../App.css';

const danceStyles = [
  { label: 'Ballet', id: 1 },
  { label: 'Jazz', id: 2 },
  { label: 'Lyrical', id: 3 },
  { label: 'Contemporary', id: 4 },
  { label: 'Tap', id: 5 },
  { label: "Ballroom", id: 6 },
  { label: 'Hip-Hop', id: 7 },
];

export default function ComboBox(props) {

  const getWikiInfo = (selected, setData) => {
    const apikey = appData[selected]?.wikiApiKey;
  
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${apikey}`)
      .then((response) => response.json())
      .then((data) => setData({
        response: data,
        selected,
      }))
  }

  const getInfo = (event, setData) => {
    const { target } = event;
    event.preventDefault();

    if (target?.value) getWikiInfo(target?.value, setData);
  }

  return (
    <Container className="container">
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={danceStyles}
      onSelect={(event) => getInfo(event, props.setData)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose a Style of Dance" />}
    />
    </Container>
  );
}

