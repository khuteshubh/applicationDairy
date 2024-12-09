import React from 'react'
import Header from './Header'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.js"
import { Outlet } from 'react-router-dom'
export default function App() {
  return (
  <>
  <Header/>
  <Outlet/>
  </>
  
  )
}

