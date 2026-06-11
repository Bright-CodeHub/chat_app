import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectRoute from './Components/auth/ProtectRoute'

const Home = lazy(() => import('./Pages/Home'))
const Login = lazy(() => import('./Pages/Login'))
const Chat = lazy(() => import('./Pages/Chat'))
const Groups = lazy(() => import('./Pages/Groups'))

let user = false

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path='/'
          element={
            <ProtectRoute user={user} >
              <Home />
            </ProtectRoute>
          }
        />

        <Route path='/chat:chatid' element={<Chat />} />
        <Route path='/groups' element={<Groups />} />

        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
