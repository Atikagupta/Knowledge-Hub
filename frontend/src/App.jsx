import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import LoginPage from './components/Login'
import RegisterPage from './components/Register'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
  )
}

export default App