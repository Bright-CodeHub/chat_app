import React, { useRef } from 'react'
import AppLayout from '../Components/layout/AppLayout'
import { Stack } from '@mui/material'
import { gray } from '../Components/constants/color'

const Chat = () => {

  const containerRef = useRef(null)

  return (
    <>
      <Stack
        ref={containerRef}
        sx={{
          boxSizing: 'border-box',
          padding: '1rem',
          bgcolor: gray,
          height: '90%',
          overflowX: 'hidden',
          overflowY: 'auto'
        }} >
        Messages
      </Stack>


    </>
  )
}

export default AppLayout(Chat)