import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import { Grid } from '@mui/material'
import ChatList from '../specific/ChatList'
import { sampleChats } from '../constants/sampleData'
import { useParams } from 'react-router-dom'
import Profile from '../specific/Profile'

const AppLayout = (WrappedComponent) => {
    return (props) => {

        const params = useParams()
        const chatId = params.chatId

        const handleDeleteChat = (e, _id, groupChat) => {
            e.preventDefault()
            console.log("Delete Chat", _id, groupChat)
        }

        return (
            <>
                <Title />
                <Header />

                <Grid container sx={{ height: 'calc(100vh - 4rem)', color: 'white' }} >

                    <Grid size={{ xs: 'grow' }} sx={{ bgcolor: 'rgba(0,0,0,0.50)', height: '100%' }} >

                        <ChatList
                            chats={sampleChats}
                            chatId={chatId}

                            // newMessagesAlert={[{ chatId, count: 4 }]}
                            // onlineUsers={['1', '2']}

                            handleDeleteChat={handleDeleteChat}
                        />

                    </Grid>

                    <Grid size={{ sm: 'grow' }} sx={{ bgcolor: 'rgb(113, 113, 113)', height: '100%', display: { xs: 'none', sm: 'block' } }} >
                        <WrappedComponent />
                    </Grid>

                    <Grid size={4} sx={{ bgcolor: 'rgb(142, 142, 142)', height: '100%', display: { xs: 'none', md: 'block' } }} >
                        <Profile />
                    </Grid>

                </Grid >

            </>
        )
    }
}

export default AppLayout