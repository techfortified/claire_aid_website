import { Box, Paper, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'

const DashboardAccountPage = () => {
    return (
        <Box sx={{mr: 2}}>
            <Box>
                <Paper elevation={4} sx={{ height: 400, margin: "0 auto"}}>
                    <Box sx={{ backgroundColor: theme => theme.palette.primary.main, }}>
                        <Image style={{ borderRadius: "50%", display: 'block', margin: "0 auto" }} height={150} width={150} src="/avatars/avatar1.png" />
                    </Box>
                    <Box>
                        <Typography variant='h4' sx={{fontFamily: "Playfair Display", textAlign: 'center'}}>Admin</Typography>
                    </Box>
                </Paper>
            </Box>
        </Box>
    )
}

export default DashboardAccountPage