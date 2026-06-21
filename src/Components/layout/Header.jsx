import { AppBar, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React, { lazy, Suspense, useState } from 'react'
import { orange } from '../constants/color'
import { Notifications as NotificationsIcon, Logout as LogoutIcon, Group as GroupIcon, Add as AddIcon, Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'

const SearchDialog = lazy(() => import('../specific/Search'))
const NotificationsDialog = lazy(() => import('../specific/Notifications'))
const NewGroupDialog = lazy(() => import('../specific/NewGroups'))

const Header = () => {

  const [isSearch, setIsSearch] = useState(false)
  const [isNotifications, setIsNotifications] = useState(false)
  const [isNewGroup, setIsNewGroup] = useState(false)

  const navigate = useNavigate()

  const handleMobileView = () => {

  }

  const openSearchDialog = () => {
    setIsSearch(prev => !prev)
  }

  const openNewGroup = () => {
    setIsNewGroup(prev => !prev)
  }

  const navigateToGroup = () => navigate('/groups')

  const openNotification = () => {
    setIsNotifications(prev => !prev)
  }

  const logoutHandler = () => {

  }

  return (
    <>
      <Box sx={{ height: '4rem' }} >

        <AppBar sx={{ position: 'static', bgcolor: orange }} >

          <Toolbar sx={{ minHeight: '64px' }} >

            <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }} >
              Chat
            </Typography>

            <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
              <IconButton color='inherit' onClick={handleMobileView}>
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 1 }} >

            </Box>

            <Box>

              <IconBtn title='Search' func={openSearchDialog} icon={<SearchIcon />} />
              <IconBtn title='New Group' func={openNewGroup} icon={<AddIcon />} />
              <IconBtn title='Manage Group' func={navigateToGroup} icon={<GroupIcon />} />
              <IconBtn title='Notifications' func={openNotification} icon={<NotificationsIcon />} />
              <IconBtn title='Logout' func={logoutHandler} icon={<LogoutIcon />} />

            </Box>

          </Toolbar>
        </AppBar>
      </Box>

      {isSearch && (
        <Suspense fallback={<div>Loading...</div>} >
          <SearchDialog />
        </Suspense>
      )}

      {isNewGroup && (
        <Suspense fallback={<div>Loading...</div>} >
          <NewGroupDialog />
        </Suspense>
      )}

      {isNotifications && (
        <Suspense fallback={<div>Loading...</div>} >
          <NotificationsDialog />
        </Suspense>
      )}
    </>
  )
}


const IconBtn = ({ title, func, icon }) => {

  return (
    <Tooltip title={title} >
      <IconButton size='large' color='inherit' onClick={func} >
        {icon}
      </IconButton>
    </Tooltip>
  )
}

export default Header