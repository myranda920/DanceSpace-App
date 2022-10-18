import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import SelectStyle from './SelectStyle';
import InfoCard from './InfoCard';
import InfoVideo from './InfoVideo';
// Copyright in the Footer Section 
function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://dancespace.io/">
        Dance Space
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const cards = [1, 2, 3];
const theme = createTheme();

export default function Album() {
const [data, setData] = React.useState({ response: {}, selected: '' });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
         {/* possible logo inport here */}
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
            Dance Space
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Dance Space
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              A dance style informational
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">What is Dance Space?</Button>
              {/* <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}


          <Grid container spacing={4}>
            {(cards[1]) = 
              <Grid item key={cards[1]} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="Images/Information1Image.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      About
                    </Typography>
                    <Typography>
                      This Space provides a background on any style of dance you are curious about. Many times on the internet there is SO much to search
                      for it is imporant to narrow it down to the most important facts of a particular dance style. It can be history, artists, training, 
                      or culture. This site provides you with information, a few demonstration videos that range from beggining level dance to advanced competitive dance and performing. 
                      Lastly, you can find studio reviews based on location.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">More Information</Button> */}
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            }
            {(cards[2]) = 
              <Grid item key={cards[2]} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="Images/Information1Image.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                    Why dance?
                    </Typography>
                    <Typography>
                    There are many reasons to learn how to dance. Dance can provide great discipline and technical trainings for kids to adults. It can provide a community of support and great mentors. 
                    It can be a great hobby but can also become something you can make a career out of. One can become a professional dancer and teacher. Many dancers go on to top college dance teams as well. 
                    For people who don’t enjoy running or going to the gym, dance can be a great form of cardio and strength training.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">More Information</Button> */}
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            }
            {(cards[3]) = 
              <Grid item key={cards[3]} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="Images/Information1Image.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Training
                    </Typography>
                    <Typography>
                    There are a large variety of dance studios around the world that specialize in teaching kids from ages 3-18. 
                    Most of these studios provide recreational classes along with competition training. 
                    Being a competition dancer means you can compete at local and national competions. 
                    This teaches kids how to work hard, and becoming great athletes and performers. 
                    There are also many studios that provide adult classes for more fun and exercise as well as great dance training. 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">More Information</Button> */}
                    {/* <Button size="small">Edit</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            }
          </Grid>
        </Container>
      </main>

      {/* Select Style Component */}
      <SelectStyle setData={setData}/>
      <InfoCard data={data} />
      <InfoVideo selected={data.selected} />
      {/* Footer Component/ stretch goal: to add a link with a link to google maps to find dance studios */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Ready to dance?
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Find a studio near you!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}

// next two hours - get a video to show 
