import { Avatar, Button, Dialog, DialogTitle, ListItem, Stack, Typography } from '@mui/material'
import React, { memo } from 'react'
import { sampleNotification } from '../constants/sampleData'

const Notifications = () => {

  const friendRequestHandler = ({ _id, accept }) => {

  }

  return (
    <Dialog open>
      <Stack sx={{
        p: { xs: '1rem', sm: '2rem' },
        maxWidth: '30rem'
      }}>
        <DialogTitle>Notification</DialogTitle>

        {
          sampleNotification.length > 0
            ?
            sampleNotification.map(({ sender, _id }) => <NotificationItem key={_id} sender={sender} _id={_id} handler={friendRequestHandler} />)
            :
            <Typography sx={{ textAlign: 'center' }} >0 Notification</Typography>
        }

      </Stack>
    </Dialog>
  )
}


const NotificationItem = memo(({ sender, _id, handler }) => {

  const { avatar, name } = sender

  return (
    <ListItem>
      <Stack
        direction={'row'}
        spacing={'1rem'}
        sx={{
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Avatar src={avatar} />
        <Typography
          variant='body1'
          sx={{
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            width: '100%'
          }}>
          {` ${name} send you a friend request `}
        </Typography>

        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={'5px'} sx={{ color: 'white', }} >

          <Button
            onClick={() => handler({ _id, accept: true })}
            sx={{ bgcolor: 'rgb(61, 87, 255)', color: 'white' }} >
            Accept
          </Button>

          <Button
            onClick={() => handler({ _id, accept: false })}
            sx={{ bgcolor: 'red', color: 'white' }} >
            Reject
          </Button>

        </Stack>

      </Stack>
    </ListItem>
  )
})


export default Notifications