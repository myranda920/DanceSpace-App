import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  const { response } = props.data;
  const { query } = response;
 
  const item = query?.search[0]

  console.log(response);

  return (
    <Card sx={{  width: 500 }}>
      <CardContent className="card-content">
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Let's learn about...
        </Typography>
        <Typography variant="h5" component="div">
          {item?.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          
        </Typography>
        <Typography variant="body2">
          {item?.snippet}
        </Typography>
      </CardContent>
      <CardActions>
      {/* add link to button that takes you to the full wikipedia page */}
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}