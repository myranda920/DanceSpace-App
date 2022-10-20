import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { appData } from '../config/data';



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard(props) {
  const { data } = props;
  const { response, selected } = data;
  const { query } = response;
  const item = query?.search[0]
  const selectedData = appData[selected];
  const wikiContent = item?.snippet.replace(/<[^>]+>/g, "");

  return (
    <Container className="card-container">
    <Card sx={{  width: 1200 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Let's learn about...
        </Typography>
        <Typography variant="h5" component="div">
          {item?.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {/* {wikiContent} */}
        </Typography>
        <Typography variant="body2">
          {wikiContent}
          {selectedData?.wikiInfo}
        </Typography>
      </CardContent>
      <CardActions>
      {/* add link to button that takes you to the full wikipedia page */}
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Container>
  );
}


// https://en.wikipedia.org/wiki/Ballet
// https://en.wikipedia.org/wiki/Jazz_dance
// https://en.wikipedia.org/wiki/Lyrical_dance
// https://en.wikipedia.org/wiki/Tap_dance
// https://en.wikipedia.org/wiki/Ballroom_dance
// https://en.wikipedia.org/wiki/Hip_hop_dance