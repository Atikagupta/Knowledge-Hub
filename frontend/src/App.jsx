import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import LoginPage from './components/Login'
import RegisterPage from './components/Register'
import FirstPage from './components/First page'
import Notes from './components/Notes';
import Layout from './Layout'
import StudyM from './components/StudyM'
import FSNotes from './components/FSNotes'
import DSNotes from './components/DSNotes'
import DONotes from './components/DONotes'
import ESNotes from './components/ESNotes'
const App = () => {
  return (
    <Routes>
      <Route path='' element={<Layout/>}>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/first' element={<FirstPage />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/study' element={<StudyM />} />
        <Route path='/notes/fs' element={<FSNotes />} />
        <Route path='/notes/DS' element={<DSNotes />} />
        <Route path='/notes/DO' element={<DONotes />} />
        <Route path='/notes/ES' element={<ESNotes />} />

      </Route>
    </Routes>
  )
}

export default App