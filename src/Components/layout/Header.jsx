import { AppBar, Box, Button, IconButton, Toolbar, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { orange } from '../constants/color'
import { Add as AddIcon, Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material'

const Header = () => {

  const handleMobileView = () => {

  }

  const openSearchDialog = () => {

  }

  const openNewGroup = () => {

  }

  return (
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
            <IconButton size='large' color='inherit' onClick={openSearchDialog} >
              <SearchIcon />
            </IconButton>

            <Tooltip title='New Group' >
              <IconButton size='large' color='inherit' onClick={openNewGroup} >
                <AddIcon />
              </IconButton>
            </Tooltip>
          </Box>

        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header