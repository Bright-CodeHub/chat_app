import { Avatar, Stack } from '@mui/material'
import React from 'react'

const Profile = () => {
    return (
        <Stack spacing={'2rem'} sx={{ alignItems: 'center' }} >
            <Avatar sx={{
                width: '200px',
                height: '200px',
                objectFit: 'contain',
                border: '5px solid white'
            }} />
            <ProfileCard heading={"Heading"} text={'text text text text text text.'} />
        </Stack>
    )
}

const ProfileCard = ({ text, icon, heading }) => {

    return (
        <div>
            Profile Card
        </div>
    )
}

export default Profile