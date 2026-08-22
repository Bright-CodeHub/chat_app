import React from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import { useInputValidation } from '6pp'
import { OffWhite } from '../../Components/constants/color'
import { Navigate } from 'react-router-dom'

const isAdmin = true

const AdminLogin = () => {

  const secretKey = useInputValidation('')

  const submitHandler = (e) => {
    e.preventDefault()
  }

  if (isAdmin) return <Navigate to={'/admin/dashboard'} />

  return (
    <div
      style={{
        backgroundColor: OffWhite
      }}
    >
      <Container
        component={'main'}
        maxWidth='xs'
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }} >
        <Paper
          sx={{
            paddingX: 4,
            paddingY: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}
          square={false}
          elevation={3}
        >

          <Typography variant='h5'> Admin Login</Typography>

          <form style={{
            width: '100%',
            marginTop: '1rem'
          }}
            onSubmit={submitHandler}
          >

            <TextField
              required
              fullWidth
              label='Secret Key'
              margin='normal'
              variant='outlined'
              size='small'
              value={secretKey.value}
              onChange={secretKey.changeHandler}
            />

            <Button
              variant='contained'
              color='primary'
              type='submit'
              sx={{
                marginTop: '1rem'
              }}
              fullWidth
            >
              Login
            </Button>

          </form>

        </Paper>

      </Container>
    </div>
  )
}

export default AdminLogin