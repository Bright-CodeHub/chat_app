import React from 'react'
import AdminLayout from '../../Components/layout/AdminLayout'
import { Box, Button, Container, Paper, Stack, Typography } from '@mui/material'
import { AdminPanelSettings as AdminPanelSettingsIcon, Group as GroupIcon, Message as MessageIcon, Notifications as NotificationsIcon, Person as PersonIcon } from '@mui/icons-material'
import moment from 'moment'
import { black } from '../../Components/constants/color'

const Dashboard = () => {

    const Appbar = (
        <Paper
            elevation={3}
            sx={{ p: '1rem', margin: '2rem 0', borderRadius: '1rem' }}
        >

            <Stack direction={'row'} spacing={'1rem'} sx={{ alignItems: 'center' }} >

                <AdminPanelSettingsIcon sx={{ fontSize: '2rem' }} />

                <input type="text" />

                <Button>sd</Button>

                <Box sx={{ flexGrow: 1 }}></Box>

                <Typography sx={{ display: { xs: 'none', sm: 'block' } }} > {moment().format('D MMMM YYYY')}</Typography>

                <NotificationsIcon />
            </Stack>

        </Paper>
    )

    const widgets = <Stack
        direction={{ xs: 'column', sm: 'row' }}
        sx={{
            margin: '2rem 0',
            alignItems: 'center',
            justifyContent: 'space-between'
        }}
        spacing={'2rem'}
    >
        <Widget title={'Users'} value={1} Icon={<PersonIcon />} />
        <Widget title={'Chats'} value={2} Icon={<GroupIcon />} />
        <Widget title={'Messages'} value={3} Icon={<MessageIcon />} />
    </Stack>

    return (
        <AdminLayout>
            <Container component={'main'} >

                {Appbar}

                <Stack direction={'row'} spacing={'2rem'} sx={{ flexWrap: 'wrap' }} >
                    <Paper
                        elevation={3}
                        sx={{
                            width: '100%',
                            maxWidth: '45rem',
                            padding: '2rem 3rem',
                            borderRadius: '1rem'
                        }}>
                        <Typography variant='h5' sx={{ margin: '1rem 0' }}>Last Messages</Typography>

                        {'Chart'}
                    </Paper>

                    <Paper
                        elevation={3}
                        sx={{
                            width: { xs: '100%', sm: '50%' },
                            maxWidth: '25rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '1rem',
                            borderRadius: '1rem',
                            position: 'relative'

                            , height: '10rem'
                        }}>

                        {'D Chart'}

                        <Stack
                            direction={'row'}
                            spacing={'0.5rem'}
                            sx={{
                                width: '100%',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'absolute'
                            }}>
                            <GroupIcon /> <Typography>Vs</Typography> <PersonIcon />

                        </Stack>

                    </Paper>

                </Stack>

                {widgets}
            </Container>
        </AdminLayout>
    )
}

const Widget = ({ title, value, Icon }) => {

    return (
        <Paper sx={{
            p: '1rem 2rem',
            margin: '2rem 0',
            borderRadius: '0.5rem',
            width: '10rem'
        }}>
            <Stack sx={{ alignItems: 'center' }} spacing={'1rem'} >
                <Typography sx={{
                    width: '5rem',
                    height: '5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: `5px solid ${black}`,
                    borderRadius: '50%',
                    color: black,
                    fontSize: '1.5rem'

                }}>{value}</Typography>
                <Stack direction={'row'} sx={{ alignItems: 'center' }} spacing={'1rem'} >
                    {Icon}
                    <Typography>{title}</Typography>
                </Stack>
            </Stack>
        </Paper>
    )
}

export default Dashboard