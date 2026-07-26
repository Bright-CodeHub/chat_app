import { Box, Typography } from '@mui/material'
import React, { memo } from 'react'
import { lightBlue } from '../constants/color'
import { fileFormat } from '../../Lib/features'

const MessageComp = ({ message, user }) => {

    const { sender, content, attachment } = message

    const sameSender = sender?._id === user?._id

    return (
        <div style={{
            alignSelf: sameSender ? 'flex-end' : 'flex-start',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '5px',
            padding: '0.5rem',
            width: 'fit-content'
        }} >
            {
                !sameSender && <Typography sx={{
                    color: lightBlue,
                    fontWeight: '600',
                }}
                    variant='caption'
                >{sender.name}</Typography>
            }

            {
                content && <Typography>{content}</Typography>
            }

            {
                attachment.length > 0 && (
                    attachment.map((elem, idx) => {
                        const url = elem.url
                        const file = fileFormat(url)

                        return <Box>
                            <a href="" target='_blank' download style={{ color: 'black' }} >

                            </a>
                        </Box>
                    })
                )
            }

        </div>
    )
}

export default memo(MessageComp)