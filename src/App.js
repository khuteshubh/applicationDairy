import React from 'react';
import Header from './header/Header';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { Outlet } from 'react-router-dom';
import Main from './mainHomePage/Main';
import Footer from './footer/Footer'
export default function App() {
  return (
  <>
  <Header/>
  <Main/>
  <Footer/>
  <Outlet/>
  </>
  
  )
}

