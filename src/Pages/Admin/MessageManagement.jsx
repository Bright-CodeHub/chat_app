import React, { useEffect, useState } from 'react'
import AdminLayout from '../../Components/layout/AdminLayout'
import Table from '../../Components/shared/Table';
import { dashboardData } from '../../Components/constants/sampleData';
import { Avatar, Box, Stack } from '@mui/material';
import { fileFormat, transformImage } from '../../Lib/features';
import moment from 'moment';
import renderAttachment from '../../Components/shared/renderAttachment';

const colums = [
    {
        field: 'id',
        headerName: 'ID',
        headerClassName: 'table-header',
        width: '200'
    },
    {
        field: 'attachments',
        headerName: 'Attachments',
        headerClassName: 'table-header',
        width: '200',
        renderCell: (params) => {

            const { attachment } = params.row

            return attachment?.length > 0
                ? attachment.map((elem) => {

                    const url = elem.url
                    const file = fileFormat(url)

                    return <Box>
                        <a
                            href={url}
                            download
                            target='_blank'
                            style={{
                                color: 'black'
                            }}
                        >
                            {renderAttachment(file, url)}
                        </a>
                    </Box>
                })
                : 'No Attachment'


        }
    },
    {
        field: 'content',
        headerName: 'Content',
        headerClassName: 'table-header',
        width: '400'
    },
    {
        field: 'sender',
        headerName: 'Send By',
        headerClassName: 'table-header',
        width: '200',
        renderCell: (params) => (
            <Stack direction={'row'} spacing={'1rem'} sx={{ alignItems: 'center' }} >
                <Avatar alt={params.row.sender.name} src={params.row.sender.avatar} />
                <span>{params.row.sender.name}</span>
            </Stack>
        )
    },
    {
        field: 'chat',
        headerName: 'Chat',
        headerClassName: 'table-header',
        width: '220'
    },
    {
        field: 'groupChat',
        headerName: 'Group Chat',
        headerClassName: 'table-header',
        width: '100'
    },
    {
        field: 'createdAt',
        headerName: 'Time',
        headerClassName: 'table-header',
        width: '250'
    },

]

const MessageManagement = () => {

    const [row, setRow] = useState([])

    useEffect(() => {
        setRow(dashboardData.messages.map((elem) => {
            return {
                ...elem,
                id: elem._id,
                sender: {
                    name: elem.sender.name,
                    avatar: transformImage(elem.sender.avatar, 50)
                },
                createdAt: moment(elem.createdAt).format('MMMM do yyyy ,h:mm:ss ')
            }
        }))

        return () => {

        }
    }, [])


    return (
        <AdminLayout>
            <Table heading={'All Messages'} row={row} rowHeight={200} colums={colums} ></Table>
        </AdminLayout>
    )
}

export default MessageManagement