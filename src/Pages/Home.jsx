import React from 'react'
import AppLayout from '../Components/layout/AppLayout'
import { Box, Typography } from '@mui/material'

const Home = () => {
    return (
        <Box sx={{ bgcolor: 'rgb(67, 64, 64)', height: '100%', }} >
            <Typography variant='h6' sx={{ pt: '3rem', pl: '1rem' }} >
                Select a Friend to Chat.
            </Typography>
        </Box>
    )
}

export default AppLayout(Home)