import { Button, Dialog, DialogTitle, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { sampleUsers } from '../constants/sampleData'
import UserItem from '../shared/UserItem'

const AddMemberDialog = ({ addMember, isLoadingAddMember, chatId }) => {

    const [members, setMembers] = useState(sampleUsers)
    const [selectMembers, setSelectMembers] = useState([])

    const selectMemberHandler = (id) => {
        setSelectMembers(prev => (
            prev.includes(id)
                ? prev.filter(elem => elem !== id)
                : [...prev, id]))
    }

    const addMemberSubmitHandler = () => {
        // closeHandler()
    }

    const closeHandler = () => {
        setMembers([])
        setSelectMembers([])
    }

    return (
        <Dialog open onClose={closeHandler} >
            <Stack spacing={'2rem'} sx={{ p: '2rem', width: '20rem' }} >
                <DialogTitle sx={{ textAlign: 'center' }} >Add Member</DialogTitle>

                <Stack spacing={'1rem'} >
                    {members.length > 0
                        ? (
                            members.map((elem) => {
                                return <UserItem
                                    key={elem._id}
                                    user={elem}
                                    handler={selectMemberHandler}
                                    isAdded={selectMembers.includes(elem._id)}
                                />
                            })
                        )
                        : (
                            <Typography sx={{ textAlign: 'center' }} >No Friends.</Typography>
                        )
                    }
                </Stack>

                <Stack direction={'row'} sx={{ justifyContent: 'space-between' }} >
                    <Button color='error' onClick={closeHandler} >Cancel</Button>
                    <Button variant='contained' disabled={isLoadingAddMember} onClick={addMemberSubmitHandler} >Submit Changes</Button>
                </Stack>

            </Stack>
        </Dialog>
    )
}

export default AddMemberDialog