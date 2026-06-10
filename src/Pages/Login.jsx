import { Button, Container, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {

    const [isLogin, setisLogin] = useState(true)

    const toggleLogin = () => setisLogin(prev => !prev)

    return (
        <Container
            component={'main'}
            maxWidth='xs'
            sx={{
                height: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }} >
            <Paper
                sx={{
                    padding: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}
                square={false}
                elevation={3}
            >

                {isLogin
                    ?
                    <>
                        <Typography variant='h5' >Login</Typography>

                        <form style={{
                            width: '100%',
                            marginTop: '1rem'
                        }} >

                            <TextField
                                required
                                fullWidth
                                label='Username'
                                margin='normal'
                                variant='outlined'
                                size='small'
                            />
                            <TextField
                                required
                                fullWidth
                                label='Password'
                                margin='normal'
                                variant='outlined'
                                size='small'
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

                            <Typography sx={{
                                mt: '1rem',
                                width: '100%',
                                textAlign: 'center',
                            }}
                            >OR</Typography>

                            <Button
                                variant='text'
                                color='primary'
                                type='submit'
                                fullWidth
                                onClick={toggleLogin}
                            >
                                Sign
                            </Button>

                        </form>
                    </> :
                    <>
                        <Typography variant='h5' >Sign up</Typography>

                        <form style={{
                            width: '100%',
                            marginTop: '1rem'
                        }} >

                            <TextField
                                required
                                fullWidth
                                label='Name'
                                margin='normal'
                                variant='outlined'
                                size='small'
                            />
                            <TextField
                                required
                                fullWidth
                                label='Bio'
                                margin='normal'
                                variant='outlined'
                                size='small'
                            />
                            <TextField
                                required
                                fullWidth
                                label='Username'
                                margin='normal'
                                variant='outlined'
                                size='small'
                            />
                            <TextField
                                required
                                fullWidth
                                label='Password'
                                margin='normal'
                                variant='outlined'
                                size='small'
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
                                Sign up
                            </Button>

                            <Typography sx={{
                                mt: '1rem',
                                width: '100%',
                                textAlign: 'center',
                            }}
                            >OR</Typography>

                            <Button
                                variant='text'
                                color='primary'
                                type='submit'
                                fullWidth
                                onClick={toggleLogin}
                            >
                                Login
                            </Button>

                        </form>
                    </>
                }

            </Paper>

        </Container>
    )
}

export default Login