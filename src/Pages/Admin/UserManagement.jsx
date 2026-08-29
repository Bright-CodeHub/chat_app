import React, { useEffect, useState } from 'react'
import AdminLayout from '../../Components/layout/AdminLayout'
import Table from '../../Components/shared/Table'
import { Avatar } from '@mui/material'
import { dashboardData } from '../../Components/constants/sampleData'
import { transformImage } from '../../Lib/features';

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
    renderCell: (params) => <Avatar alt={params.row.name} src={params.row.avatar} />
  },
  {
    field: 'name',
    headerName: 'Name',
    headerClassName: 'table-header',
    width: '150'
  }, {
    field: 'username',
    headerName: 'Username',
    headerClassName: 'table-header',
    width: '150'
  },
  {
    field: 'friends',
    headerName: 'Friends',
    headerClassName: 'table-header',
    width: '150'
  },
  {
    field: 'groups',
    headerName: 'Groups',
    headerClassName: 'table-header',
    width: '150'
  },

]

const UserManagement = () => {

  const [rows, setRows] = useState([])

  useEffect(() => {
    setRows(dashboardData.user.map((elem) => {
      return { ...elem, id: elem._id, avatar: transformImage(elem.avatar, 50) }
    }))

    return () => {

    }
  }, [])

  return (
    <AdminLayout>
      <Table heading={'All Users'} colums={colums} row={rows} />
    </AdminLayout>
  )
}

export default UserManagement