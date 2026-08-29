import React from 'react'
import { Container, Paper, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { black, OffWhite } from '../constants/color';

const Table = ({ row, colums, heading, rowHeight = 54 }) => {
    return (
        <Container sx={{
            height: '100vh',
        }}>

            <Paper
                elevation={3}
                sx={{
                    width: '100%',
                    height: '100%',
                    padding: '1rem 4rem',
                    margin: 'auto',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    bgcolor: OffWhite
                }}
            >

                <Typography
                    variant='h4'
                    sx={{ textAlign: 'center', margin: '2rem', textTransform: 'uppercase' }}>{heading}
                </Typography>

                <DataGrid
                    rows={row}
                    rowHeight={rowHeight}
                    columns={colums}
                    style={{
                        height: '80%'
                    }}
                    sx={{
                        border: 'none',
                        '.table-header': {
                            bgcolor: black,
                            color: 'white'
                        },
                    }}
                />
            </Paper>

        </Container>
    )
}

export default Table