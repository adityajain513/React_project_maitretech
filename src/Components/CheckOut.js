import React from 'react';
import '../Css/CheckOut.css';
import AppBar from '@mui/material/AppBar';
import { Box, Grid, Button } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import { Link} from 'react-router-dom';


export default function CheckOut() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className="CheckOutAppbar">
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
                    <Button component={Link} to='/' className='homeButton' variant='contained'>Home</Button>
                    <Button component={Link} to='/signin' className='LoginButton' variant='contained'>login</Button>
                </Toolbar>
            </AppBar>
            <Grid item sx={12} container>
                <Grid item lg={2} sm={12} ></Grid>
                <Grid item lg={8} sm={12} className='CheckoutMainBox'>
                    <div className='CheckOutInnerBox'>
                        <h2 className='CkeckourText'>Checkout</h2>
                     <div style={{display:"flex"}}>
                     <h6>Thankyou for your order.</h6> 
                        <Link to='/menu' className='CheckLink'>click here to order now</Link>
                     </div>
                    </div>
                  
                  </Grid>
                <Grid item lg={2} sm={12} >
              </Grid>

            </Grid>
        </Box>
    );
}

