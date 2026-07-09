import { Button, Dialog, DialogTitle, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../constants/sampleData'
import UserItem from '../shared/UserItem'
import { useInputValidation } from '6pp'

const NewGroups = () => {

    const groupName = useInputValidation('')

    const [members, setMembers] = useState(sampleUsers)
    const [selectMembers, setSelectMembers] = useState([])

    const selectMemberHandler = (id) => {
        setSelectMembers(prev => (
            prev.includes(id)
                ? prev.filter(elem => elem !== id)
                : [...prev, id]))
    }
    console.log(selectMembers)

    const submitHandler = () => {

    }

    return (
        <Dialog open>
            <Stack
                spacing={'1rem'}
                sx={{
                    p: { xs: '1rem', sm: '2rem' },
                    width: '25rem'
                }}>
                <DialogTitle variant='h5' sx={{ textAlign: 'center' }} >New Group</DialogTitle>

                <TextField label='Group Name' size='small' value={groupName.value} onChange={groupName.changeHandler} />

                <Typography variant='body1' >Members</Typography>

                <Stack>
                    {
                        members.map((users, idx) => {
                            return <UserItem
                                user={users}
                                key={idx}
                                handler={selectMemberHandler}>
                            </UserItem>
                        })
                    }
                </Stack>

                <Stack direction={{ xs: 'column', sm: 'row' }} sx={{ color: 'white', width: '100%', justifyContent: 'space-evenly' }} >

                    <Button
                        onClick={submitHandler}
                        sx={{ bgcolor: 'rgb(61, 87, 255)', color: 'white' }} >
                        Create
                    </Button>

                    <Button
                        sx={{ bgcolor: 'red', color: 'white' }} >
                        Cancel
                    </Button>

                </Stack>

            </Stack>
        </Dialog>
    )
}

export default NewGroups