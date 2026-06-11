import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CameraAlt } from '@mui/icons-material'
import { VisuallyHiddenInput } from '../Components/styles/styledComponents'
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp'
import { usernameValidator } from '../Utils/validators'

const Login = () => {

    const [isLogin, setisLogin] = useState(true)

    const toggleLogin = () => setisLogin(prev => !prev)

    const name = useInputValidation('')
    const bio = useInputValidation('')
    const username = useInputValidation('', usernameValidator)
    const password = useStrongPassword('')

    const avatar = useFileHandler('single')

    const handelLogin = (e) => {
        e.preventDefault()
    }

    const handelSignup = (e) => {
        e.preventDefault()
    }

    return (
        <div 
        style={{
            backgroundColor:'#f5f5f5'
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

                    {isLogin
                        ?
                        <>
                            <Typography variant='h5' >Login</Typography>

                            <form style={{
                                width: '100%',
                                marginTop: '1rem'
                            }}
                                onSubmit={handelLogin}
                            >

                                <TextField
                                    required
                                    fullWidth
                                    label='Username'
                                    margin='normal'
                                    variant='outlined'
                                    size='small'
                                    value={username.value}
                                    onChange={username.changeHandler}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label='Password'
                                    margin='normal'
                                    variant='outlined'
                                    size='small'
                                    value={password.value}
                                    onChange={password.changeHandler}
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
                            }}
                                onSubmit={handelSignup}
                            >

                                <Stack
                                    sx={{
                                        position: 'relative',
                                        width: '10rem',
                                        margin: 'auto'
                                    }}
                                >
                                    <Avatar
                                        sx={{
                                            width: '8rem',
                                            height: '8rem',
                                            objectFit: 'contain'
                                        }}
                                        src={avatar.preview}
                                    />



                                    <IconButton
                                        component='label'
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            right: 30,
                                            color: 'white',
                                            bgcolor: 'rgba(0,0,0,0.5)',
                                            ":hover": {
                                                bgcolor: 'rgba(0,0,0,0.7)'
                                            }
                                        }}
                                    >
                                        <>
                                            <CameraAlt fontSize='small' />
                                            <VisuallyHiddenInput type='file' onChange={avatar.changeHandler} />
                                        </>
                                    </IconButton>

                                </Stack>

                                {
                                    avatar.error && (
                                        <Typography
                                            variant='caption'
                                            color='error'
                                            sx={{
                                                mx: 'auto',
                                                mt: '1rem',
                                                width: 'fit-content',
                                                display: 'block'
                                            }}
                                        >
                                            {avatar.error}
                                        </Typography>
                                    )
                                }

                                <TextField
                                    required
                                    fullWidth
                                    label='Name'
                                    margin='normal'
                                    variant='outlined'
                                    size='small'
                                    value={name.value}
                                    onChange={name.changeHandler}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label='Bio'
                                    margin='normal'
                                    variant='outlined'
                                    size='small'
                                    value={bio.value}
                                    onChange={bio.changeHandler}
                                />
                                <TextField
                                    required
                                    fullWidth
                                    label='Username'
                                    margin='normal'
                                    variant='outlined'
                                    size='small'
                                    value={username.value}
                                    onChange={username.changeHandler}
                                />

                                {
                                    username.error && (
                                        <Typography color='error' variant='caption' >
                                            {username.error}
                                        </Typography>
                                    )
                                }

                                <TextField
                                    required
                                    fullWidth
                                    label='Password'
                                    margin='normal'
                                    variant='outlined'
                                    size='small'
                                    value={password.value}
                                    onChange={password.changeHandler}
                                />

                                {
                                    password.error && (
                                        <Typography color='error' variant='caption' >
                                            {password.error}
                                        </Typography>
                                    )
                                }

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
        </div>
    )
}

export default Login