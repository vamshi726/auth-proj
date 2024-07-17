import { useState } from 'react' 
import './App.css';
import {BrowserRouter, Routes,Route, useNavigate} from "react-router-dom"
import {Signin}  from './pages/Signin';
import Signup  from './pages/Signup';
import Home from './pages/Home';




function App() { 

  return (
     <BrowserRouter>
      <Routes>
        <Route path='/signin' element={<Signin/>} />   
        <Route path='/signup' element={<Signup/>} />   
        <Route path='/Home' element={<Home/>} />   

      </Routes>

     </BrowserRouter>
  )
}

export default App
