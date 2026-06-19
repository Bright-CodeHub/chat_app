import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { orange } from '../constants/color'

const Header = () => {
  return (
    <Box sx={{ height: '4rem', flexGrow: 1 }} >
      <AppBar sx={{ position: 'static', bgcolor: orange }} >


        <Toolbar>

          <Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }} >

            Head
          </Typography>

        </Toolbar>

      </AppBar>
    </Box>
  )
}

export default Header