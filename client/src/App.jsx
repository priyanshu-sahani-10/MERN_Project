import './App.css'
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { toast } from "sonner";

import { Button } from './components/ui/button'
import Login from './pages/Login'
function App() {

  return (
    <>
    <Login/>
    </>
  )
}

export default App
