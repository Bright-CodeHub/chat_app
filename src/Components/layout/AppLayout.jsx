import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import { Grid } from '@mui/material'
import ChatList from '../specific/ChatList'
import { sampleChats } from '../constants/sampleData'

const AppLayout = (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <Title />
                <Header />

                <Grid container sx={{ height: 'calc(100vh - 4rem)', color: 'white' }} >

                    <Grid size={{ xs: 'grow' }} sx={{ bgcolor: 'rgba(0,0,0,0.50)', height: '100%' }} >
                        <ChatList
                            chats={sampleChats}
                            chatId={'1'}
                            newMessagesAlert={[{ chatId: '1', count: 4 }]}
                            onlineUsers={['1', '2']}
                        />
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