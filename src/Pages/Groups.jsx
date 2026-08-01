import { Grid } from '@mui/material'
import React from 'react'

const Groups = () => {

    return (
        <Grid container sx={{
            height: '100vh'
        }} >

            <Grid
                size={4}
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    bgcolor: 'red'
                }}
            >

                      

            </Grid>

        </Grid>
    )
}

export default Groups