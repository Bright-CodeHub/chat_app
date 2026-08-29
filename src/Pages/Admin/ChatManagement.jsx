import React, { useEffect, useState } from 'react'
import AdminLayout from '../../Components/layout/AdminLayout'
import Table from '../../Components/shared/Table'
import { Avatar, Stack } from '@mui/material'
import { dashboardData } from '../../Components/constants/sampleData'
import { transformImage } from '../../Lib/features';

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
        renderCell: (params) => <Avatar alt={params.row.name} src={params.row.avatar} />
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
            <Stack>
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

const ChatManagement = () => {

    const [rows, setRows] = useState([])

    useEffect(() => {
        // setRows(dashboardData.user.map((elem) => {
        //     return { ...elem, id: elem._id, avatar: transformImage(elem.avatar, 50) }
        // }))

        return () => {

        }
    }, [])

    return (
        <AdminLayout>
            <Table heading={'All Chats'} colums={colums} row={rows} />
        </AdminLayout>
    )
}

export default ChatManagement