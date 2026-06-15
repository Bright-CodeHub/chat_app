import React from 'react'
import Header from './Header'
import Title from '../shared/Title'
import { Grid } from '@mui/material'

const AppLayout = (WrappedComponent) => {
    return (props) => {
        return (
            <>
                <Title />
                <Header />

                <Grid container spacing={3} >



                </Grid>



            </>
        )
    }
}

export default AppLayout