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
import FSstudy from './components/FSstudy'
import DSstudy from './components/DSstudy'
import DOstudy from './components/DOstudy'
import ESstudy from './components/ESstudy'
const App = () => {
  return (
    <Routes>
      <Route path='' element={<Layout/>}>
        
        <Route path='/first' element={<FirstPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/' element={<Home />} />
        <Route path='/notes' element={<Notes />} />
        <Route path='/study' element={<StudyM />} />
        <Route path='/notes/fs' element={<FSNotes />} />
        <Route path='/notes/DS' element={<DSNotes />} />
        <Route path='/notes/DO' element={<DONotes />} />
        <Route path='/notes/ES' element={<ESNotes />} />
        <Route path='/study/fs' element={<FSstudy />} />
        <Route path='/study/DS' element={<DSstudy />} />
        <Route path='/study/DO' element={<DOstudy />} />
        <Route path='/study/ES' element={<ESstudy />} />

      </Route>
    </Routes>
  )
}

export default App