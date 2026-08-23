import React from 'react'
import AdminLayout from '../../Components/layout/AdminLayout'
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import { AdminPanelSettings as AdminPanelSettingsIcon } from '@mui/icons-material'
import moment from 'moment'

const Dashboard = () => {

    const Appbar = (
        <Paper
            elevation={3}
            sx={{ p: '1.5rem', margin: '2rem 0', borderRadius: '1rem' }}
        >

            <Stack direction={'row'} spacing={'1rem'} sx={{ alignItems: 'center' }} >

                <AdminPanelSettingsIcon sx={{ fontSize: '2rem' }} />

                <input type="text" />

                <Button>sd</Button>

                <Box sx={{ flexGrow: 1 }}></Box>

                <Typography> {moment().format('MMMM Do YYYY')}</Typography>
            </Stack>

        </Paper>
    )

    return (
        <AdminLayout>
            <Container component={'main'} >

                {Appbar}

            </Container>
        </AdminLayout>
    )
}

export default Dashboard