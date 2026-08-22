import { Avatar, AvatarGroup, Box, Stack } from '@mui/material'
import React from 'react'
import { transformImage } from '../../Lib/features'

const AvatarCard = ({ avatar = [], max = 4 }) => {
    return (
        <Stack direction={'row'} spacing={0.5} >
            <AvatarGroup max={max} sx={{ position: 'relative' }} >
                <Box sx={{ width: '5rem', height: '3rem' }}>
                    {
                        avatar.map((src, idx) => {
                            return <Avatar key={idx} src={transformImage(src)} alt={`Avatar ${idx}`} sx={{
                                width: '3rem',
                                height: '3rem',
                                position: 'absolute',
                                left: {
                                    xs: `${0.5 * idx}rem`,
                                    sm: `${idx}rem`
                                }
                            }} />
                        })
                    }
                </Box>
            </AvatarGroup>
        </Stack>
    )
}

export default AvatarCard