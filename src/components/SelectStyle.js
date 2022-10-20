import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Container from '@mui/material/Container';
import '../App.css';

export default function ComboBox(props) {
  return (
    <Container className="container">
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={danceStyles}
      onSelect={(event) => getInfo(event, props.setData)}
      // center this, it is not center with all views
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Choose a Style of Dance" />}
    />
    </Container>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const danceStyles = [
  { label: 'Ballet', id: 1 },
  { label: 'Jazz', id: 2 },
  { label: 'Lyrical', id: 3 },
  { label: 'Contemporary', id: 4 },
  { label: 'Tap', id: 5 },
  { label: "Ballroom", id: 6 },
  { label: 'Hip-Hop', id: 7 },
];

const getInfo = (event, setData) => {
   const { target } = event;
   event.preventDefault();
   console.log(target?.value)

   if(target?.value) getWikiInfo(target?.value, setData)
}


const getWikiInfo = (query, setData) => {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=${query}`)
      .then((response) => response.json())
      .then((data) => setData({
        response: data,
        selected: query
      }))
}

// ballet
// jazz
// lyrical
// contemporary
// tap
// ballroom
// hiphop
// salsa

// add the fetch inside of the event listener
// use e.target.value variable in the api call 
