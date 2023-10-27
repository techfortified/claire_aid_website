import { avatars } from '@/config';
import { Box, Chip, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { useAuthUser } from '@/lib/auth';
import { useVolunteers } from '@/lib/volunteers';

export const getUserAvatar = (index) => {
    if (index < 17) {
        return avatars[index]
    }
    const totalAvatars = avatars.length
    const randomNumber = Math.random() * (totalAvatars - 1)
    const randomId = Math.round(randomNumber)
    return avatars[randomId]
}


const UserCard = ({ data, index }) => {
    return (
        <Paper elevation={4} sx={{ minHeight: 120, height: "100%", }}>
            <Box sx={{
                backgroundImage: `url(${getUserAvatar(index)})`,
                backgroundRepeat: "no-repeat",
                backgroundBlendMode: "darken",
                backgroundPosition: 'center',
                backgroundSize: "cover",
                height: 200
            }} />
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: -1 }}>
                <Chip label={data?.email} />
            </Box>
            <Box sx={{ pt: 1, px: 2, pb: 2 }}>
                <Typography sx={{ fontFamily: "Playfair Display" }} variant='h5'>{`${data?.firstname} ${data?.lastname}`}</Typography>
                <Typography sx={{ fontFamily: "Playfair Display" }} variant='body2'>{data?.org}</Typography>
            </Box>
        </Paper>
    )
}

const DashboardVolunteerPage = () => {
    const {data: user} = useAuthUser()
    const {data: volunteersData, isLoading, isError } = useVolunteers(user?.accessToken)

    return (
        <Box sx={{mr: 2}} className={ isLoading ? "loading": undefined }>
            {isError && <Typography>Sorry an error occurred, refresh the page to try again</Typography> }
            <Grid container spacing={2}>
                { volunteersData ? volunteersData?.map((data, index) => 
                <Grid item key={index} lg={3} md={4} sm={6} xs={12}>
                    <UserCard data={data} index={index} /> 
                </Grid>): null}
            </Grid>
        </Box>
    )
}

export default DashboardVolunteerPage