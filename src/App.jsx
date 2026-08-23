import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectRoute from './Components/auth/ProtectRoute'
import { LayoutLoader } from './Components/layout/Loaders'

const Home = lazy(() => import('./Pages/Home'))
const Login = lazy(() => import('./Pages/Login'))
const Chat = lazy(() => import('./Pages/Chat'))
const Groups = lazy(() => import('./Pages/Groups'))
const NotFound = lazy(() => import('./Pages/NotFound'))

const AdminLogin = lazy(() => import('./Pages/Admin/AdminLogin'))
const Dashboard = lazy(() => import('./Pages/Admin/Dashboard'))
const ChatManagement = lazy(() => import('./Pages/Admin/ChatManagement'))
const MessageManagement = lazy(() => import('./Pages/Admin/MessageManagement'))
const UserManagement = lazy(() => import('./Pages/Admin/UserManagement'))

let user = true

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LayoutLoader />}>
        <Routes>

          <Route element={<ProtectRoute user={user} />} >

            <Route path='/' element={<Home />} />
            <Route path='/chat/:chatId' element={<Chat />} />
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

          <Route path='/admin' element={<AdminLogin />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />

          <Route path='/admin/chats' element={<ChatManagement />} />
          <Route path='/admin/users' element={<UserManagement />} />
          <Route path='/admin/messages' element={<MessageManagement />} />

          <Route path='*' element={<NotFound />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App
