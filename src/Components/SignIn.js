import React from 'react';
import {Button} from '@mui/material';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'
import '../Css/SignIn.css';
function SignIn(){
  return(
    <div className='container-fluid' style={{ backgroundImage: "linear-gradient(#eeaeca, #94bbe9)" }}>
    <div className='row'>
        <div className='col-6'>
            <img className='SignInLogoImg1' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFXLusco6pdwvcW8bAYanwu2moTctxKtAUg&usqp=CAU'></img>
             <h1 className='Foodres'>Food Restaurant</h1>
        </div>
        <div className='col-6 SigninBox'>
            <Card className='SignInCard'>
                <Card.Img className='SignInLogoImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQFXLusco6pdwvcW8bAYanwu2moTctxKtAUg&usqp=CAU" />
                 <h1>SignIn</h1><br/>
                 <input className='form-control' type='text' placeholder='enter email'/><br/>
                 <input className='form-control' type='password' placeholder='enter password'/><br/>
                 <Button className='SignInbuttn' variant='contained' component={Link} to='/'>SignIn</Button>
                 <p className='paraSign'>Click SignIn button to Login</p>

            </Card>
        </div>
    </div>
</div>
  )
}
export default SignIn;