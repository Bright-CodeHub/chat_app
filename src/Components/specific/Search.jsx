import React, { useState } from 'react'
import { useInputValidation } from '6pp'
import { Dialog, DialogTitle, InputAdornment, List, ListItemText, MenuItem, Stack, TextField } from '@mui/material'
import { Search as SearchIcon, } from '@mui/icons-material'
import UserItem from '../shared/UserItem'
import { sampleUsers } from '../constants/sampleData'

const Search = () => {

  const search = useInputValidation('')

  let isLoadingSendFriendRequest = false

  const [users, setusers] = useState(sampleUsers)

  const addFriendHandler = (id) => {
    console.log(id)
  }

  return (
    <Dialog open >
      <Stack sx={{ width: '25rem', p: '2rem' }} >

        <DialogTitle>Find People</DialogTitle>

        <TextField
          label=''
          value={search.value}
          onChange={search.changeHandler}
          variant='outlined'
          size='small'
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }
          }}
        >
        </TextField>

        <List>
          {
            users.map((users, idx) => {
              return <UserItem
                user={users}
                key={idx}
                handler={addFriendHandler}
                handlerIsLoading={isLoadingSendFriendRequest}
              >
              </UserItem>
            })
          }
        </List>

      </Stack>
    </Dialog >
  )
}

export default Search