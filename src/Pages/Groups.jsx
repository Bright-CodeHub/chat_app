import { Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from '@mui/icons-material'
import { Box, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { memo, useState } from 'react'
import { gray1, gray2, matBlack, matBlackHover } from '../Components/constants/color'
import { useNavigate, Navigate, useSearchParams } from 'react-router-dom'
import { Link } from '../Components/styles/StyledComponents'
import AvatarCard from '../Components/shared/AvatarCard'
import { sampleChats } from '../Components/constants/sampleData'

const Groups = () => {

    const chatId = useSearchParams()[0].get('group')
    console.log(chatId)

    const navigate = useNavigate()

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)

    const navigateBack = () => {
        navigate('/')
    }

    const handelMobile = () => {
        setIsMobileMenuOpen(prev => !prev)
    }

    const handelMobileClose = () => setIsMobileMenuOpen(false)

    const IconBtns = <>

        <Box
            sx={{
                display: { xs: 'block', sm: 'none' },
                position: 'fixed',
                top: '1rem',
                right: '1rem'
            }}>
            <IconButton sx={{
                color: 'white'
            }}
                onClick={handelMobile} >
                <MenuIcon />
            </IconButton>
        </Box>

        <Tooltip title='Back'>

            <IconButton sx={{
                position: 'absolute',
                top: '1rem',
                left: '1.5rem',
                color: 'white',
                bgcolor: matBlack,
                ":hover": {
                    bgcolor: matBlackHover
                }
            }}
                onClick={navigateBack}
            >
                <KeyboardBackspaceIcon />
            </IconButton>

        </Tooltip>
    </>

    const GroupName = <Stack
        direction={'row'}
        sx={{ alignItems: 'center', padding: '1rem' }}
        spacing={'1rem'}
    >
        {
            isEdit ? <>
                <TextField size='small' />
                <IconButton>
                    <DoneIcon />
                </IconButton>
            </>
                : <>
                    <Typography>Group Name</Typography>
                    <IconButton onClick={() => setIsEdit(prev => !prev)}>
                        <EditIcon />
                    </IconButton>
                </>
        }
    </Stack>

    return (
        <Grid container sx={{
            height: '100vh'
        }} >

            <Grid
                size={4}
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    bgcolor: gray2
                }}
            >
                <GroupList myGroups={sampleChats} chatId={chatId} />
            </Grid>

            <Grid
                size={{ xs: 12, sm: 8 }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    position: 'relative',
                    padding: '1rem 3rem',
                    bgcolor: gray1
                }} >
                {IconBtns}
                {GroupName}
            </Grid>

            <Drawer open={isMobileMenuOpen} onClose={handelMobileClose} sx={{
                display: { xs: 'block', sm: 'none' }
            }} >
                <GroupList w={'50vw'} myGroups={sampleChats} chatId={chatId} />
            </Drawer>

        </Grid>
    )
}

const GroupList = ({ w = '100%', myGroups = [], chatId }) => (
    <Stack sx={{ width: w }} >
        {
            myGroups.length > 0
                ? (
                    myGroups.map((group) => <GroupListItem key={group._id} group={group} chatId={chatId} />)
                )
                : (
                    <Typography sx={{
                        padding: '1rem',
                        textAlign: 'center'
                    }} >No Group</Typography>
                )
        }
    </Stack>
)

const GroupListItem = memo(({ group, chatId }) => {

    const { name, avatar, _id } = group

    return (
        <Link
            to={`?group=${_id}`}
            onClick={(e) => {
                if (chatId === _id) e.preventDefault()
            }}
        >
            <Stack direction={'row'} sx={{ alignItems: 'center' }} spacing={'1rem'} >
                <AvatarCard avatar={avatar} />
                <Typography>{name}</Typography>
            </Stack>

        </Link>
    )
})

export default Groups