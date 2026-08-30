import React, { useEffect, useState } from 'react'
import AdminLayout from '../../Components/layout/AdminLayout'
import Table from '../../Components/shared/Table'
import { Avatar, Stack } from '@mui/material'
import { dashboardData } from '../../Components/constants/sampleData'
import { transformImage } from '../../Lib/features';
import AvatarCard from '../../Components/shared/AvatarCard';

const colums = [
    {
        field: 'id',
        headerName: 'ID',
        headerClassName: 'table-header',
        width: '100'
    },
    {
        field: 'avatar',
        headerName: 'Avatar',
        headerClassName: 'table-header',
        width: '150',
        renderCell: (params) => <AvatarCard avatar={params.row.avatar} />
    },
    {
        field: 'name',
        headerName: 'Name',
        headerClassName: 'table-header',
        width: '300'
    }, {
        field: 'totalMembers',
        headerName: 'Total Members',
        headerClassName: 'table-header',
        width: '120'
    },
    {
        field: 'members',
        headerName: 'Members',
        headerClassName: 'table-header',
        width: '400',
        renderCell: (params) => <AvatarCard max={100} avatar={params.row.members} />
    },
    {
        field: 'totalMessages',
        headerName: 'Total Messages',
        headerClassName: 'table-header',
        width: '120'
    },
    {
        field: 'creator',
        headerName: 'Created By',
        headerClassName: 'table-header',
        width: '250',
        renderCell: (params) => (
            <Stack direction={'row'} spacing={'1rem'} sx={{ alignItems: 'center' }} >
                <Avatar alt={params.row.creator.name} src={params.row.creator.avatar} />
                <span>{params.row.creator.name}</span>
            </Stack>
        )
    },

]

const ChatManagement = () => {

    const [rows, setRows] = useState([])

    useEffect(() => {

        setRows(dashboardData.chats.map((elem) => {
            return {
                ...elem,
                id: elem._id,
                avatar: elem.avatar.map(e => transformImage(e, 50)),
                members: elem.members.map(e => transformImage(e.avatar, 50)),
                creator: {
                    name: elem.creator.name,
                    avatar: transformImage(elem.creator.avatar, 50)
                }
            }
        }))

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