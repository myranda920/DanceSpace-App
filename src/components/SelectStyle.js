import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={danceStyles}
      sx={{ width: 1400, p: 14 }}
      renderInput={(params) => <TextField {...params} label="Choose a Style of Dance" />}
    />
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



// ballet
// jazz
// lyrical
// contemporary
// tap
// ballroom
// hiphop
// salsa