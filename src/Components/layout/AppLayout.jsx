import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import { Grid } from '@mui/material'
import ChatList from '../specific/ChatList'

const AppLayout = (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <Title />
                <Header />

                <Grid container sx={{ height: 'calc(100vh - 4rem)' }} >

                    <Grid size={{ xs: 'grow' }} sx={{ bgcolor: 'rgba(0,0,0,0.50)', height: '100%' }} >
                        <ChatList chats={[1, 2, 3]} />
                    </Grid>

                    <Grid size={{ sm: 'grow' }} sx={{ bgcolor: 'rgba(0,0,0,0.50)', height: '100%', display: { xs: 'none', sm: 'block' } }} >
                        <WrappedComponent />
                    </Grid>

                    <Grid size={4} sx={{ bgcolor: 'rgba(0,0,0,0.50)', height: '100%', display: { xs: 'none', md: 'block' } }} >
                        First
                    </Grid>

                </Grid >

            </>
        )
    }
}

export default AppLayout