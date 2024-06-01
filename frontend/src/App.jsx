import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import LoginPage from './components/Login'
import RegisterPage from './components/Register'
import FirstPage from './components/First page'
import Notes from './components/Notes';
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/First' element={<FirstPage />} />
      <Route path='/Notes' element={<Notes />} />
      
    </Routes>
  )
}

export default App