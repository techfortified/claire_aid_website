import React from 'react'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import { useMediaDeviceSizes } from '@/hooks'
import Link from 'next/link'

const projectData = [
    {
        title: "Providing Quality Education Through Informal Education",
        target: "Support the weekly runnings of Jebbu Miango Reads Classes",
        expiryDate: "20 Dec, 2024",
        backgroundImage: "/project-1.jpg",
        buttons: [{ title: "Donate Now", variant: "contained" }, { title: "Program Details", variant: "outlined" }]
    },
    {
        title: "The Jebbu Miango Reads Community Library And Learning Resource Center",
        target: "$2,000",
        expiryDate: "31 Dec, 2024",
        backgroundImage: "/project-2.jpg",
        buttons: [{ title: "Donate Now", variant: "contained" }, { title: "Program Details", variant: "outlined" }]
    }
]

const HomeProjectSection = () => {
    const {isDownMediumDevice} = useMediaDeviceSizes()
    return (
        <Box sx={{ p: { lg: 15, md: 6, sm: 4, xs: 2 } }}>
            <Box sx={{p: {xs: 2, sm: 2, md: 2}}}>
                <Grid container spacing={2}>
                    <Grid item lg={6}>
                        <Box>
                            <Typography sx={{ textTransform: "uppercase", color: theme => theme.palette.primary.light, fontFamily: "Playfair Display" }} variant='h5'>Ongoing Projects</Typography>
                            <Typography variant={isDownMediumDevice ? 'h5' :'h3'} sx={{fontFamily: "Playfair Display"}}>Donate To Any Of Our Projects</Typography>
                        </Box>
                    </Grid>
                    <Grid item lg={6}>
                        <Button LinkComponent={Link} href='/projects' size='large' sx={{ borderRadius: 30 }} variant='contained'>View All Projects</Button>
                    </Grid>
                </Grid>
            </Box>
            <Box>
                <Grid container spacing={2}>
                    {
                        projectData.map((d, i) => (
                            <Grid key={i} item lg={6}>
                                <Paper elevation={2} sx={{ p: 4, height: "100%" }}>
                                    <Box sx={{ backgroundImage: `url(${d.backgroundImage})`, height: 320, borderRadius: 5 }} />
                                    <Typography variant={isDownMediumDevice ? 'h5' : 'h4'} sx={{fontFamily: "Playfair Display"}}>{d.title}</Typography>
                                    <Box sx={{ width: "100%", pt: 1, }}>
                                        <Grid container spacing={2}>
                                            <Grid item lg={6}>
                                                <Typography sx={{ textTransform: "uppercase" }}>Target</Typography>
                                                <Typography sx={{fontFamily: "Playfair Display"}}>{d.target}</Typography>
                                            </Grid>
                                            <Grid item lg={6}>
                                                <Typography sx={{ textTransform: "uppercase" }}>Expire Date</Typography>
                                                <Typography variant='caption' component={"p"} sx={{fontFamily: "Playfair Display"}}>{d.expiryDate}</Typography>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                    <Box m={4}>
                                        <Grid container spacing={2}>
                                            {d.buttons.map((b, i) => <Grid item lg={6}>
                                                <Button size='large' sx={{borderRadius: 30}} variant={b.variant}>{b.title}</Button>
                                            </Grid>)}
                                        </Grid>
                                    </Box>
                                </Paper>
                            </Grid>))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default HomeProjectSection