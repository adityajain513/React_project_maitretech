import  React from 'react';
import '../Css/Home.css';
import { Link} from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import {Box, Grid, Button} from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RestaurantIcon from '@mui/icons-material/Restaurant'; 
// import BackGround from './BackGround';

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="LayoutAppbar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <RestaurantIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           Food's Restaurant
          </Typography>
          <Button component={Link} className='LoginButton' to='/signin' variant='contained'>login</Button>

        </Toolbar>
      </AppBar>
     <Grid item sx={12} container>
         <Grid item sx={12} lg={12} sm={12} className='LayoutHeading'>
             <h1 className='LayoutWelcome'>Welcome to Food's</h1>
             <h1 className='LayoutWelcome'>Kitchen</h1>
             <Button component={Link} to='/menu' className='LayoutMenuButton'>Go to menu</Button>
              {/* <Button component={Box} >Click me</Button> */}
          </Grid>

     </Grid>
     {/* <BackGround/> */}
    </Box>
  );
}

