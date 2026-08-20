import { Add as AddIcon, Delete as DeleteIcon, Done as DoneIcon, Edit as EditIcon, KeyboardBackspace as KeyboardBackspaceIcon, Menu as MenuIcon } from '@mui/icons-material'
import { Backdrop, Box, Button, Drawer, Grid, IconButton, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { lazy, memo, Suspense, useEffect, useState } from 'react'
import { black, blackHover, gray1, gray2, matBlack, matBlackHover, OffWhite } from '../Components/constants/color'
import { useNavigate, Navigate, useSearchParams } from 'react-router-dom'
import { Link } from '../Components/styles/StyledComponents'
import AvatarCard from '../Components/shared/AvatarCard'
import { sampleChats, sampleUsers } from '../Components/constants/sampleData'
import UserItem from '../Components/shared/UserItem'

const ConfirmDeleteDialog = lazy(() => import('../Components/dialogs/ConfirmDeleteDialog'))
const AddMemberDialog = lazy(() => import('../Components/dialogs/AddMemberDialog'))

const isAddMember = false

const Groups = () => {

    const chatId = useSearchParams()[0].get('group')

    const navigate = useNavigate()

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [isEdit, setIsEdit] = useState(false)
    const [groupName, setGroupName] = useState('')
    const [groupNameUpdatedValue, setGroupNameUpdatedValue] = useState('')
    const [confirmDeleteDialog, setConfirmDeleteDialog] = useState(false)

    const navigateBack = () => {
        navigate('/')
    }

    const handelMobile = () => {
        setIsMobileMenuOpen(prev => !prev)
    }

    const handelMobileClose = () => setIsMobileMenuOpen(false)

    const updateGroupName = () => {
        setIsEdit(false)
    }

    useEffect(() => {
        if (chatId) {
            setGroupName(`Group Name ${chatId}`)
            setGroupNameUpdatedValue(`Group Name ${chatId}`)
        }

        return () => {
            setGroupName('')
            setGroupNameUpdatedValue('')
            setIsEdit(false)
        }
    }, [chatId])

    const openConfirmDeleteHandler = () => {
        setConfirmDeleteDialog(true)
    }

    const closeConfirmDeleteHandler = () => {
        setConfirmDeleteDialog(false)
    }

    const deleteHandeler = () => {
        closeConfirmDeleteHandler()
    }

    const openAddMemberHandler = () => {

    }

    const removeMemberHandler = (id) => {
        console.log(id)
    }

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
                bgcolor: black,
                ":hover": {
                    bgcolor: blackHover
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
                <TextField
                    size='small'
                    value={groupNameUpdatedValue}
                    onChange={(e) => setGroupNameUpdatedValue(e.target.value)}
                />
                <IconButton onClick={updateGroupName} >
                    <DoneIcon />
                </IconButton>
            </>
                : <>
                    <Typography>{groupName}</Typography>
                    <IconButton onClick={() => setIsEdit(prev => !prev)}>
                        <EditIcon />
                    </IconButton>
                </>
        }
    </Stack>

    const ButtonGroup = <Stack
        direction={{
            xs: 'column-reverse',
            sm: 'row'
        }}
        sx={{
            padding: {
                xs: '0',
                sm: '1rem',
                md: '1rem 4rem'
            }
        }}
        spacing={'1rem'}
    >
        <Button size='medium' variant='contained' color='error' startIcon={<DeleteIcon />} onClick={openConfirmDeleteHandler} >Delete Group
        </Button>
        <Button size='medium' variant='contained' startIcon={<AddIcon />} onClick={openAddMemberHandler} >Add Member</Button>
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
                    // bgcolor: gray1
                    bgcolor: OffWhite
                }} >
                {IconBtns}
                {groupName &&
                    <>
                        {GroupName}
                        <Typography
                            variant='body1'
                            sx={{ margin: '2rem', alignSelf: 'flex-start' }} >
                            Members
                        </Typography>

                        <Stack
                            spacing={'2rem'}
                            sx={{
                                width: '100%',
                                maxWidth: '45rem',
                                height: '50vh',
                                boxSizing: 'border-box',
                                overflow: 'auto',
                                // bgcolor: 'lightcoral',
                                padding: {
                                    xs: '0',
                                    sm: '1rem',
                                    md: '1rem 4rem'
                                },
                                mb: '1rem'
                            }}>

                            {
                                sampleUsers.map((elem) => {
                                    return <UserItem
                                        key={elem._id}
                                        user={elem}
                                        isAdded
                                        // handler={ }
                                        handlerIsLoading={removeMemberHandler}
                                        styling={{
                                            boxShadow: '0 0 0.5rem rgba(5, 5, 5, 0.2)',
                                            padding: '1rem',
                                            borderRadius: '1rem'
                                        }}
                                    />

                                })
                            }
                        </Stack>

                        {ButtonGroup}
                    </>
                }
            </Grid>

            {
                isAddMember && <Suspense fallback={<Backdrop open />} >
                    <AddMemberDialog />
                </Suspense>
            }

            {
                confirmDeleteDialog && (
                    <Suspense fallback={<Backdrop open />} >
                        <ConfirmDeleteDialog
                            open={confirmDeleteDialog}
                            handelClose={closeConfirmDeleteHandler}
                            deleteHandler={deleteHandeler}
                        />
                    </Suspense>
                )
            }

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