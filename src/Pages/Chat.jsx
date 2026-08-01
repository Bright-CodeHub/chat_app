import React, { useRef } from 'react'
import AppLayout from '../Components/layout/AppLayout'
import { IconButton, Stack } from '@mui/material'
import { gray, orange } from '../Components/constants/color'
import { AttachFile as AttachFileIcon, Send as SendIcon } from '@mui/icons-material'
import { InputBox } from '../Components/styles/StyledComponents'
import FileMenu from '../Components/dialogs/FileMenu'
import { sampleMessage } from '../Components/constants/sampleData'
import MessageComp from '../Components/shared/MessageComp'

const user = {
  _id: '123',
  name: 'Sanjay'
}

const Chat = () => {

  const containerRef = useRef(null)

  return (
    <>
      <Stack
        ref={containerRef}
        spacing={'1rem'}
        sx={{
          boxSizing: 'border-box',
          padding: '1rem',
          bgcolor: gray,
          height: '90%',
          overflowX: 'hidden',
          overflowY: 'auto'
        }} >


        {
          sampleMessage.map((elem, idx) => {
            return <MessageComp key={idx} message={elem} user={user} />
          })
        }

      </Stack>

      <form
        style={{
          height: '10%'
        }}>

        <Stack
          direction={'row'}
          sx={{
            height: '100%',
            width: '100%',
            padding: '1rem',
            alignItems: 'center',
            position: 'relative'
          }}
        >
          <IconButton sx={{
            position: 'absolute',
            left: '1rem'
          }}>
            <AttachFileIcon />
          </IconButton>

          <InputBox placeholder='Type Message Here...' />

          <IconButton
            type='submit'
            sx={{
              bgcolor: orange,
              color: 'white',
              marginLeft: '1rem',
              ":hover": {
                bgcolor: 'error.dark'
              }
            }}
            onClick={(e) => e.preventDefault()}
          >
            <SendIcon />
          </IconButton>
        </Stack>

      </form>

      <FileMenu />

    </>
  )
}

export default AppLayout(Chat)