import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

const Home = lazy(() => import('./Pages/Home'))
const Login = lazy(() => import('./Pages/Login'))
const Chat = lazy(() => import('./Pages/Chat'))
const Groups = lazy(() => import('./Pages/Groups'))

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/chat:chatid' element={<Chat />} />
        <Route path='/groups' element={<Groups />} />

        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
