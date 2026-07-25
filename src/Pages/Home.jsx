import React from 'react'
import AppLayout from '../Components/layout/AppLayout'
import { Box, Typography } from '@mui/material'
import { gray } from '../Components/constants/color'

const Home = () => {
    return (
        <Box sx={{ bgcolor: gray, height: '100%', }} >
            <Typography variant='h6' sx={{ pt: '3rem', pl: '1rem' }} >
                Select a Friend to Chat.
            </Typography>
        </Box>
    )
}

export default AppLayout(Home)