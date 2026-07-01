import { useInputValidation } from '6pp'
import { Dialog, DialogTitle, List, ListItem, ListItemText, Stack, TextField } from '@mui/material'
import React from 'react'

const Search = () => {

  const search = useInputValidation('')

  const users = [1, 2, 3]

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

        />

        <List >
          {
            users.map((users, idx) => {
              return <ListItem key={idx}>
                <ListItemText />
              </ListItem>
            })
          }
        </List>

      </Stack>
    </Dialog>
  )
}

export default Search