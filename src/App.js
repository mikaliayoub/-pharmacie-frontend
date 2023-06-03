import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/home";
import List from "./pages/list";
import Login from './pages/login';
import App from './pages/user';
import Signup from './pages/signup';

function Appr() {
  
  return (
    <div>
      <Login />
    </div>
  );
}

export default Appr;