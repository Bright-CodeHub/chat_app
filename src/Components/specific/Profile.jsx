import React from 'react'
import { Avatar, Stack, Typography } from '@mui/material'
import { Face as FaceIcon, AlternateEmail as UserNameIcon, CalendarMonth as CalendarIcon } from '@mui/icons-material'
import moment from 'moment'

const Profile = () => {
    return (
        <Stack spacing={'2rem'} sx={{ alignItems: 'center', mt: '1rem' }} >
            <Avatar sx={{
                width: '150px',
                height: '150px',
                objectFit: 'contain',
                border: '5px solid white'
            }} />
            <ProfileCard heading={"Name"} text={'User 1'} Icon={<FaceIcon />} />
            <ProfileCard heading={"Username"} text={'user@1'} Icon={<UserNameIcon />} />
            <ProfileCard heading={"Bio"} text={'text text text text text text.'} />
            <ProfileCard heading={"Joined"} text={moment(new Date(new Date().setDate(new Date().getDate() - 10))).fromNow()} Icon={<CalendarIcon />} />
        </Stack>
    )
}


const ProfileCard = ({ text, Icon, heading }) => {

    return (
        <Stack
            direction={'row'}
            spacing={'1rem'}
            sx={{
                color: 'white',
                textAlign: 'center'
            }}>

            {Icon && Icon}

            <Stack>
                <Typography variant='body1'>{text}</Typography>
                <Typography variant='caption'>{heading}</Typography>
            </Stack>

        </Stack>
    )
}

export default Profile