import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect() {
  const [style, setStyle] = React.useState('');

  const handleChange = (event) => {
    setStyle(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ m: 14, minWidth: 1100 }}>
        <InputLabel id="demo-simple-select-label">Select Style of Dance</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={style}
          label="Style"
          onChange={handleChange}
        >
          <MenuItem value={'Ballet'}>Ballet</MenuItem>
          <MenuItem value={'Jazz'}>Jazz</MenuItem>
          <MenuItem value={'Lyrical'}>Lyrical</MenuItem>
          <MenuItem value={'Contemporary'}>Contemporary</MenuItem>
          <MenuItem value={'Tap'}>Tap</MenuItem>
          <MenuItem value={'Ballroom'}>Ballroom</MenuItem>
          <MenuItem value={'Hip-Hop'}>Hip-Hop</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}