import React from 'react';
import Home from '../Components/Home';
import Menu from '../Components/Menu';
import CheckOut from '../Components/CheckOut';
import SignIn from '../Components/SignIn';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/menu' element={<Menu />}></Route>
          <Route path='/checkout' element={<CheckOut />}></Route>
          <Route path='/signin' element={<SignIn />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
