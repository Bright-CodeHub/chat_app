import { Container, Paper, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Login = () => {

    const [isLogin, setisLogin] = useState(true)

    return (
        <Container component={'main'} maxWidth='sx'>
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
                        <form >

                            <TextField
                                required
                                fullWidth
                                label='Username'
                                margin='normal'
                                variant='outlined'
                                size='small'
                            />

                        </form>
                    </> :
                    <span>register</span>}

            </Paper>

        </Container>
    )
}

export default Login