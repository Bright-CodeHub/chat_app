import { Stack } from '@mui/material'
import React from 'react'
import ChatItem from '../shared/ChatItem'

const ChatList = ({ w = '100%', chats = [], chatId, onlineUsers = [], newMessagesAlert = [{ chatId: '', count: 0 }], handleDeleteChat }) => {
    return (
        <Stack sx={{ width: w }} >
            {
                chats?.map((data, idx) => {

                    const { avatar, name, _id, members, groupChat } = data

                    const newMessageAlert = newMessagesAlert.find((chatId) => {
                        return chatId === _id
                    })

                    const isOnline = members?.some((member) => onlineUsers.includes(_id))

                    return <ChatItem
                        index={idx} newMessageAlert={newMessageAlert} isOnline={isOnline} avatar={avatar} name={name} _id={_id} key={idx} groupChat={groupChat} sameSender={chatId === _id} handleDeleteChat={handleDeleteChat}
                    />
                })
            }
        </Stack>
    )
}

export default ChatList