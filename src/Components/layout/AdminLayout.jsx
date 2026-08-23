import { Box, Drawer, Grid, IconButton, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { black, blackHover, gray1, gray2, OffWhite } from '../constants/color'
import { Close as CloseIcon, Dashboard as DashboardIcon, ExitToApp as ExitToAppIcon, Group as GroupIcon, ManageAccounts as ManageAccountsIcon, Menu as MenuIcon, Message as MessageIcon } from '@mui/icons-material';
import { Navigate, useLocation } from 'react-router-dom';
import { Link } from '../styles/StyledComponents';

const isAdmin = true

export const adminTabs = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        icon: <DashboardIcon />,
    },
    {
        name: 'Users',
        path: '/admin/users',
        icon: <ManageAccountsIcon />,
    },
    {
        name: 'Chats',
        path: '/admin/chats',
        icon: <GroupIcon />,
    },
    {
        name: 'Messages',
        path: '/admin/messages',
        icon: <MessageIcon />,
    },
]

const AdminLayout = ({ children }) => {

    const [isMobile, setIsMobile] = useState(false)

    const handleMobile = () => {
        setIsMobile((prev) => !prev)
    }

    const handleClose = () => {
        setIsMobile(prev => !prev)
    }

    if (!isAdmin) return <Navigate to={'/admin'} />

    return (
        <Grid container sx={{ minHeight: '100vh', bgcolor: OffWhite }} >

            <Box sx={{
                display: {
                    xs: 'block',
                    md: 'none'
                },
                position: 'fixed',
                top: '1rem',
                right: '1rem'
            }} >
                <IconButton onClick={handleMobile}>
                    {isMobile ? <CloseIcon /> : <MenuIcon />}
                </IconButton>
            </Box>

            <Drawer open={isMobile} onClose={handleClose} sx={{ display: { xs: 'block', md: 'none' } }} >
                <SideBar w={'50vw'} />
            </Drawer>

            <Grid sx={{
                display: {
                    xs: 'none',
                    md: 'block'
                },
                borderRight: '2px solid rgb(190, 190, 190)',
                borderTopRightRadius: '50px',
                borderBottomRightRadius: '50px'
            }}
                size={{
                    md: 4,
                    lg: 3
                }}
            >
                <SideBar />
            </Grid>

            <Grid
                sx={{
                }}
                size={{
                    xs: 12,
                    md: 8,
                    lg: 9
                }}
            >
                {children}
            </Grid>

        </Grid>
    )
}

const SideBar = ({ w = '100%' }) => {

    const location = useLocation()

    const logoutHandler = () => {

    }

    return (
        <Stack sx={{ width: w, p: '3rem', textAlign: "center" }} spacing={'1rem'} >
            <Typography variant='h4' >Admin</Typography>

            <Stack spacing={'1rem'} >
                {
                    adminTabs.map((tabs) => {
                        return <Link key={tabs.path} to={tabs.path} sx={
                            location.pathname === tabs.path && {
                                bgcolor: black,
                                color: 'white',
                                ":hover": {
                                    bgcolor: black
                                }
                            }
                        } >
                            <Stack direction={'row'} spacing={'0.2rem'} >
                                {tabs.icon}
                                <Typography>{tabs.name}</Typography>
                            </Stack>
                        </Link>

                    })
                }

                <Link onClick={logoutHandler} >

                    <Stack spacing={'0.2rem'} direction={'row'} >
                        <ExitToAppIcon />
                        <Typography>Logout</Typography>
                    </Stack>

                </Link>
            </Stack>
        </Stack>
    )
}

export default AdminLayout