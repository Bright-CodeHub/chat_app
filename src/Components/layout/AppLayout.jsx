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

                <Grid container sx={{ height: 'calc(100vh - 4rem)' }} >

                    <Grid size={4} sx={{ bgcolor: 'rgba(0,0,0,0.50)', height: '100%' }} >
                        First
                    </Grid>

                    <Grid size={4} sx={{ bgcolor: 'rgba(0,0,0,0.50)', height: '100%' }} >
                        <WrappedComponent />
                    </Grid>

                    <Grid size={4} sx={{ bgcolor: 'rgba(0,0,0,0.50)', height: '100%', display: { sx:'none' , sm:'block' } }} >
                        First
                    </Grid>



                </Grid >

            </>
        )
    }
}

export default AppLayout