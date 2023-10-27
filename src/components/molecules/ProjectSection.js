import { useMediaDeviceSizes } from '@/hooks'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const projectData = [
    {
        title: "Providing Quality Education Through Informal Education",
        descritpion: "Support the weekly runnings of Jebbu Miango Reads Classes",
        target: "$5,000",
        expiryDate: "20 Dec, 2024",
        backgroundImage: "/project-1.jpg",
        buttons: [{ title: "Donate Now", variant: "contained" }, { title: "Program Details", variant: "outlined" }]
    },
    {
        title: "The Jebbu Miango Reads Community Library And Learning Resource Center",
        target: "$2,000",
        descritpion: "",
        expiryDate: "31 Dec, 2024",
        backgroundImage: "/project-2.jpg",
        buttons: [{ title: "Donate Now", variant: "contained" }, { title: "Program Details", variant: "outlined" }]
    },
    {
        title: "Jebbu Miango Reads",
        descritpion: "Support the weekly runnings of Jebbu Miango Reads Classes",
        target: "$7,000",
        expiryDate: "20 Dec, 2024",
        backgroundImage: "/project-1.jpg",
        buttons: [{ title: "Donate Now", variant: "contained" }, { title: "Program Details", variant: "outlined" }]
    },
    {
        title: "Together For Jebbu",
        descritpion: "",
        target: "$2,000",
        expiryDate: "31 Dec, 2024",
        backgroundImage: "/project-2.jpg",
        buttons: [{ title: "Donate Now", variant: "contained" }, { title: "Program Details", variant: "outlined" }]
    },
    {
        title: "Trauma Healing",
        descritpion: "Support the weekly runnings of Jebbu Miango Reads Classes",
        target: "$8,000",
        expiryDate: "20 Dec, 2024",
        backgroundImage: "/project-1.jpg",
        buttons: [{ title: "Donate Now", variant: "contained" }, { title: "Program Details", variant: "outlined" }]
    },
    {
        title: "A Claire Christmas",
        descritpion: "",
        target: "$2,000",
        expiryDate: "31 Dec, 2024",
        backgroundImage: "/project-2.jpg",
        buttons: [{ title: "Donate Now", variant: "contained" }, { title: "Program Details", variant: "outlined" }]
    },
    {
        title: "CAF Scholars Program",
        descritpion: "Support the weekly runnings of Jebbu Miango Reads Classes",
        target: "$9,000",
        expiryDate: "20 Dec, 2024",
        backgroundImage: "/project-1.jpg",
        buttons: [{ title: "Donate Now", variant: "contained" }, { title: "Program Details", variant: "outlined" }]
    },
    {
        title: "Improving Rural Communities",
        descritpion: "",
        target: "$2,000",
        expiryDate: "31 Dec, 2024",
        backgroundImage: "/project-2.jpg",
        buttons: [{ title: "Donate Now", variant: "contained" }, { title: "Program Details", variant: "outlined" }]
    },
    {
        title: "Literacy Program",
        descritpion: "Support the weekly runnings of Jebbu Miango Reads Classes",
        target: "$9,000",
        expiryDate: "20 Dec, 2024",
        backgroundImage: "/project-1.jpg",
        buttons: [{ title: "Donate Now", variant: "contained" }, { title: "Program Details", variant: "outlined" }]
    },
]

const ProjectSection = () => {
    const {isDownMediumDevice} = useMediaDeviceSizes()

    return (
        <Box sx={{ p: { lg: 15, md: 6, sm: 4, xs: 2 }, backgroundColor: '#F1F5F9' }}>
            <Box>
                <Grid container spacing={2}>
                    {
                        projectData.map((d, i) => (
                            <Grid key={i} item lg={4} md={12} sm={12} xs={12}>
                                <Paper elevation={2} sx={{ height: "100%" }}>
                                    <Box sx={{ backgroundImage: `url(${d.backgroundImage})`, height: 320 }} />
                                    <Box sx={{ p: 1 }}>
                                        <Typography variant='h6'>{d.title}</Typography>
                                        <Box sx={{ width: "100%", pt: 1, }}>
                                            <Grid container spacing={2}>
                                                <Grid item lg={6} >
                                                    <Typography sx={{ textTransform: "uppercase" }}>Target</Typography>
                                                    <Typography>{d.target}</Typography>
                                                </Grid>
                                                <Grid item lg={6}>
                                                    <Typography sx={{ textTransform: "uppercase" }}>Expire Date</Typography>
                                                    <Typography variant='caption' component={"p"}>{d.expiryDate}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box m={1}>
                                            <Grid container spacing={2}>
                                                {d.buttons.map((b, i) => <Grid item lg={6} xs={6}>
                                                    <Button size='small' sx={{ borderRadius: 30, fontSize: isDownMediumDevice && 12 }} variant={b.variant}>{b.title}</Button>
                                                </Grid>)}
                                            </Grid>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>))
                    }
                </Grid>
            </Box>
        </Box>
    )
}

export default ProjectSection