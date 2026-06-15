import React, { lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectRoute from './Components/auth/ProtectRoute'

const Home = lazy(() => import('./Pages/Home'))
const Login = lazy(() => import('./Pages/Login'))
const Chat = lazy(() => import('./Pages/Chat'))
const Groups = lazy(() => import('./Pages/Groups'))
const NotFound = lazy(() => import('./Pages/NotFound'))

let user = true

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<ProtectRoute user={user} />} >

          <Route path='/' element={<Home />} />
          <Route path='/chat:chatid' element={<Chat />} />
          <Route path='/groups' element={<Groups />} />

        </Route>

        <Route
          path='/login'
          element={
            <ProtectRoute user={!user} redirect='/' >
              <Login />
            </ProtectRoute>
          }
        />

        <Route path='*' element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
