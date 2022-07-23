import React, { useState } from 'react';
import '../Css/Menu.css';
import AppBar from '@mui/material/AppBar';
import { Link } from 'react-router-dom';
import { Box, Button, ButtonGroup } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

export default function Menu() {
  const [order,setOrder]=useState(0);

  const [count, setCount] = useState(false);
  const [amount, setAmount] = useState(200);

  function additems() {
    let burgerPrice = 200;
    let temp = count + 1;
    let test = temp * burgerPrice;
    setCount(temp);
    setAmount(test);
  }

  function removeitems() 
  {
    if(count >= 1)
    {
      let burgerPrice = 200;
    let temp = count - 1;
    let test = temp * burgerPrice;
    setCount(temp);
    setAmount(test);
    }
    

  }

  const [data, setData] = useState(false);
  const [temp, setTemp] = useState(50);

  function addsitems() {
    let burgerPrice = 50;
    let temp = data + 1;
    let test = temp * burgerPrice;
    setData(temp);
    setTemp(test);
  }

  function removesitems() {
    if(data >= 1){
      let burgerPrice = 50;
      let temp = data - 1;
      let test = temp * burgerPrice;
      setData(temp);
      setTemp(test);
    }
   
  }

  const [main, setMain] = useState(false);
  const [docs, setDocs] = useState(150);

  function itemAdd() {
    let burgerPrice = 150;
    let temp = main + 1;
    let test = temp * burgerPrice;
    setMain(temp);
    setDocs(test);
  }

  function itemRemove() {
   if(main >= 1){
    let burgerPrice = 150;
    let temp = main - 1;
    let test = temp * burgerPrice;
    setMain(temp);
    setDocs(test);
   }
  }

  const [coin, setCoin] = useState(false);
  const [pop, setPop] = useState(80);

  function itemsadd() {
    let burgerPrice = 80;
    let temp = coin + 1;
    let test = temp * burgerPrice;
    setCoin(temp);
    setPop(test);
  }

  function itemsremove() {
    if(coin >= 1){
      let burgerPrice = 80;
      let temp = coin - 1;
      let test = temp * burgerPrice;
      setCoin(temp);
      setPop(test);
    }
  
  }

  const [demo, setDemo] = useState(false);
  const [pack, setPack] = useState(120);
  function addCart() {
    let burgerPrice = 120;
    let temp = demo + 1;
    let test = temp * burgerPrice;
    setDemo(temp);
    setPack(test);
  }

  function removeCart() {
    if(demo >= 1){
      let burgerPrice = 120;
      let temp = demo - 1;
      let test = temp * burgerPrice;
      setDemo(temp);
      setPack(test);
    }
   
  }

  const [cute, setCute] = useState(false);
  const [card, setCard] = useState(90);

  function addInCart() {
    let burgerPrice = 90;
    let temp = cute + 1;
    let test = temp * burgerPrice;
    setCute(temp);
    setCard(test);
  }

  function removeinCart() {
    if(cute >= 1){
      let burgerPrice = 90;
      let temp = cute - 1;
      let test = temp * burgerPrice;
      setCute(temp);
      setCard(test);
    }
    
  }

  const [manch, setManch] = useState(false);
  const [sand, setSand] = useState(170);

  function ManchCart() {
    let burgerPrice = 170;
    let temp = manch + 1;
    let test = temp * burgerPrice;
    setManch(temp);
    setSand(test);
  }

  function ManchRemove() {
    if(manch >= 1){
      let burgerPrice = 170;
      let temp = manch - 1;
      let test = temp * burgerPrice;
      setManch(temp);
      setSand(test);
    }
 
  }

  const [roll, setRoll] = useState(false);
  const [pizz, setpizz] = useState(190);

  function RollCart() {
    let burgerPrice = 190;
    let temp = roll + 1;
    let test = temp * burgerPrice;
    setRoll(temp);
    setpizz(test);
  }

  function RollRemove() {
    if(roll >= 1){
      let burgerPrice = 190;
      let temp = roll - 1;
      let test = temp * burgerPrice;
      setRoll(temp);
      setpizz(test);
    }
  
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="OrderAppbar">
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
          <ShoppingCartIcon className='shoppingicon'   /><span className='orderlist'>{order}</span>

          <Button component={Link} className='orderPlaced' color='success' to='/checkout' variant='contained'>Place Your Order</Button>
          <Button component={Link} className='LoginButton' to='/signin' variant='outlined'>login</Button>

        </Toolbar>
      </AppBar>

      <div className='container-fluid'>
        <div className='row' style={{ padding: "20px" }}>
          <div className='col-3'>
            <Card sx={{ maxWidth: 345, padding: "10px" }}>
              <img src='Images/Burger.jpg' alt="Burger" className='menuOrderImg'></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  HamBurger
                </Typography>
                <Typography variant="body2" color="text.secondary">
                </Typography>
              </CardContent>
              <div>
                <p>Price : 200</p>
                {
                  count == 0 ? null : <div>  <p>Total : {count}</p>
                    <p>Cost(INR) : {amount}</p>
                  </div>
                }
              </div>
              <CardActions>
                <Button size="small" onClick={additems} variant='contained'>+</Button>
                <Button size="small" onClick={removeitems} color='error' variant='contained'>-</Button>
                <Button size="small" onClick={()=>setOrder(order+1)} color='success' variant='contained'>AddToCart</Button>
              </CardActions>
            </Card>

          </div>

          <div className='col-3'>
            <Card sx={{ maxWidth: 345, padding: "10px" }}>
              <img src='Images/coca-cola.jpg' alt="Coca-Cola" className='menuOrderImg'></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Coca-Cola
                </Typography>
              </CardContent>
              <div>
                <p>Price : 50</p>
                {
                  data == 0 ? null : <div>  <p>Total : {data}</p>
                    <p>Cost(INR) : {temp}</p>
                  </div>
                }

              </div>
              <CardActions>
                <Button size="small" onClick={addsitems} variant='contained'>+</Button>
                <Button size="small" onClick={removesitems} color='error' variant='contained'>-</Button>
                <Button size="small" onClick={()=>setOrder(order+1)} color='success' variant='contained'>AddToCart</Button>

              </CardActions>
            </Card>
          </div>

          <div className='col-3'>
            <Card sx={{ maxWidth: 345, padding: "10px" }}>
              <img src='Images/Fries.jpg' alt="Fries" className='menuOrderImg'></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  French Fries
                </Typography>
              </CardContent>
              <div>
                <p>Price : 150</p>
                {
                  main == 0 ? null : <div><p>Total : {main}</p>
                    <p>Cost(INR) : {docs}</p>
                  </div>
                }


              </div>
              <CardActions>
                <Button size="small" onClick={itemAdd} variant='contained'>+</Button>
                <Button size="small" onClick={itemRemove} color='error' variant='contained'>-</Button>
                <Button size="small" onClick={()=>setOrder(order+1)} color='success' variant='contained'>AddToCart</Button>

              </CardActions>
            </Card>
          </div>

          <div className='col-3'>
            <Card sx={{ maxWidth: 345, padding: "10px" }}>
              <img src='Images/pepsi.jpg' alt="Pepsi" className='menuOrderImg'></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pepsi
                </Typography>
              </CardContent>
              <div>
                <p>Price : 80</p>
                {
                  coin == 0 ? null : <div><p>Total : {coin}</p>
                    <p>Cost(INR) : {pop}</p></div>
                }


              </div>
              <CardActions>
                <Button size="small" onClick={itemsadd} variant='contained'>+</Button>
                <Button size="small" onClick={itemsremove} color='error' variant='contained'>-</Button>
                <Button size="small" onClick={()=>setOrder(order+1)} color='success' variant='contained'>AddToCart</Button>

              </CardActions>
            </Card>
          </div>

        </div>



        <div className='row' style={{ padding: "20px" }}>
          <div className='col-3'>
            <Card sx={{ maxWidth: 345, padding: "10px" }}>
              <img src='Images/rolls.jpg' alt="Rolls" className='menuOrderImg'></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Spring Roll
                </Typography>

              </CardContent>
              <div>
                <p>Price : 120</p>
                {
                  demo == 0 ? null : <div> <p>Total : {demo}</p>
                    <p>Cost(INR) : {pack}</p>
                  </div>
                }


              </div>
              <CardActions>
                <Button size="small" onClick={addCart} variant='contained'>+</Button>
                <Button size="small" onClick={removeCart} color='error' variant='contained'>-</Button>
                <Button size="small" onClick={()=>setOrder(order+1)} color='success' variant='contained'>AddToCart</Button>

              </CardActions>
            </Card>

          </div>

          <div className='col-3'>
            <Card sx={{ maxWidth: 345, padding: "10px" }}>
              <img src='Images/sandwitch.jpg' alt="sandwitch" className='menuOrderImg'></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Sandwitch
                </Typography>

              </CardContent>
              <div>
                <p>Price : 90</p>
                {
                  cute == 0 ? null : <div>     <p>Total : {cute}</p>
                    <p>Cost(INR) : {card}</p>
                  </div>
                }


              </div>
              <CardActions>
                <Button size="small" onClick={addInCart} variant='contained'>+</Button>
                <Button size="small" onClick={removeinCart} color='error' variant='contained'>-</Button>
                <Button size="small" onClick={()=>setOrder(order+1)} color='success' variant='contained'>AddToCart</Button>

              </CardActions>
            </Card>
          </div>

          <div className='col-3'>
            <Card sx={{ maxWidth: 345, padding: "10px" }}>
              <img src='Images/manchurian.jpg' alt="manchurian" className='menuOrderImg'></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Manchurian
                </Typography>

              </CardContent>
              <div>
                <p>Price : 170</p>
                {
                  manch == 0 ? null : <div> <p>Total : {manch}</p>
                    <p>Cost(INR) : {sand}</p></div>
                }


              </div>
              <CardActions>
                <Button size="small" onClick={ManchCart} variant='contained'>+</Button>
                <Button size="small" onClick={ManchRemove} color='error' variant='contained'>-</Button>
                <Button size="small" onClick={()=>setOrder(order+1)} color='success' variant='contained'>AddToCart</Button>

              </CardActions>
            </Card>
          </div>

          <div className='col-3'>
            <Card sx={{ maxWidth: 345, padding: "10px" }}>
              <img src='Images/bhelpuri.jpg' alt="bhelpuri" className='menuOrderImg'></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  BhelPuri
                </Typography>

              </CardContent>
              <div>
                <p>Price : 190</p>
                {
                  roll == 0 ? null : <div><p>Total : {roll}</p>
                    <p>Cost(INR) : {pizz}</p></div>
                }


              </div>
              <CardActions>
                <Button size="small" onClick={RollCart} variant='contained'>+</Button>
                <Button size="small" onClick={RollRemove} color='error' variant='contained'>-</Button>
                <Button size="small" onClick={()=>setOrder(order+1)} color='success' variant='contained'>AddToCart</Button>

              </CardActions>
            </Card>
          </div>

        </div>

        {/* <div className='row' style={{ padding: "20px" }}>
          <div className='col-3'>
            <Card sx={{ maxWidth: 345, padding: "10px" }}>
              <img src='Images/coconut.jpg' alt="Coconut" className='menuOrderImg'></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Coconut Crush
                </Typography>

              </CardContent>
              <div>
                <p>Price : 200</p>
                <p>Total : 1</p>
                <p>Cost(INR) : 200</p>
              </div>
              <CardActions>
                <Button size="small" variant='contained'>+</Button>
                <Button size="small" color='error' variant='contained'>-</Button>
              </CardActions>
            </Card>

          </div>

          <div className='col-3'>
            <Card sx={{ maxWidth: 345, padding: "10px" }}>
              <img src='Images/Khamand.jpg' alt="Khamand" className='menuOrderImg'></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Khamand
                </Typography>

              </CardContent>
              <div>
                <p>Price : 200</p>
                <p>Total : 1</p>
                <p>Cost(INR) : 200</p>
              </div>
              <CardActions>
                <Button size="small" variant='contained'>+</Button>
                <Button size="small" color='error' variant='contained'>-</Button>
              </CardActions>
            </Card>
          </div>

          <div className='col-3'>
            <Card sx={{ maxWidth: 345, padding: "10px" }}>
              <img src='Images/pastry.jpg' alt="pastry" className='menuOrderImg'></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pepsi
                </Typography>

              </CardContent>
              <div>
                <p>Price : 200</p>
                <p>Total : 1</p>
                <p>Cost(INR) : 200</p>
              </div>
              <CardActions>
                <Button size="small" variant='contained'>+</Button>
                <Button size="small" color='error' variant='contained'>-</Button>
              </CardActions>
            </Card>
          </div>

          <div className='col-3'>
            <Card sx={{ maxWidth: 345, padding: "10px" }}>
              <img src='Images/Pizza.jpg' alt="Pizza" className='menuOrderImg'></img>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Pizza
                </Typography>
              </CardContent>

              <div>
                <p>Price : 200</p>
                <p>Total : 1</p>
                <p>Cost(INR) : 200</p>
              </div>
              <CardActions>
                <Button size="small" variant='contained'>+</Button>
                <Button size="small" color='error' variant='contained'>-</Button>
              </CardActions>
            </Card>
          </div>
         </div> */}
      </div>


    </Box>
  );
}
