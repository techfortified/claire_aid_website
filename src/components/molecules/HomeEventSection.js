import React from 'react'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';
import { useMediaDeviceSizes } from '@/hooks';

const iconData = {
    facebook: Facebook,
    twitter: Twitter,
    instagram: Instagram
}
const eventData = [
    {
        title: "Join Us For Weekly Classes",
        time: "12:00 pm - 4:30 pm",
        location: "Jebbu Miango, Bassa",
        backgroundImage: "/project-1.jpg",
        description: "The weekly classes at Jebbu Miango Bassa where we teach school children on different subjects. Each week we have hundreds of students.",
        buttons: [{ title: "Donate Now", variant: "contained" }, { title: "Program Details", variant: "outlined" }]
    },
    {
        title: "Join Us For Weekly Classes",
        time: "12:00 pm - 4:30 pm",
        location: "Jebbu Miango, Bassa",
        backgroundImage: "/project-2.jpg",
        description: "The weekly classes at Jebbu Miango Bassa where we teach school children on different subjects. Each week we have hundreds of students.",
        buttons: [{ title: "Donate Now", variant: "contained" }, { title: "Program Details", variant: "outlined" }]
    }
]

const teamData = [
    {
        name: "Janet Smith",
        title: "Volunteer",
        photo: "/team-1.jpg",
        height: 370,
        bio: "Volunteering with CAF has afforded me the opportunity to create an impact in the lives of real people",
        social: [{ name: "facebook", link: "facebook.com" }, { name: "instagram", link: "instagram.com" }, { name: "twitter", link: "twitter.com" }]
    },
    {
        name: "Apolos Chinedu",
        title: "Volunteer",
        photo: "/team-2.jpg",
        height: 420,
        bio: "CAF is an opportunity for me to contribute to building the Nigeria of my dreams and utilizing my gifts. CAF has been a wonderful opportunity for me to serve. I am always glad to be in service.",
        social: [{ name: "facebook", link: "facebook.com" }, { name: "instagram", link: "instagram.com" }, { name: "twitter", link: "twitter.com" }]
    },
    {
        name: "Grace Watkins",
        title: "Volunteer",
        photo: "/team-3.jpg",
        height: 370,
        bio: "I have never felt more fulfilled than doing this. It is beautiful to see how the lives of children can get better just by showing up every Sunday.",
        social: [{ name: "facebook", link: "facebook.com" }, { name: "instagram", link: "instagram.com" }, { name: "twitter", link: "twitter.com" }]
    }
]

const HomeEventSection = () => {
    const {isDownMediumDevice} = useMediaDeviceSizes()

    return (
        <Box sx={{ p: { lg: 20, md: 6, sm: 4, xs: 2 }, backgroundColor: '#F1F5F9' }}>
            <Typography sx={{ color: theme => theme.palette.primary.light }} textAlign={"center"} variant='h6'>UPCOMING EVENT</Typography>
            <Typography sx={{ textAlign: 'center', p:1,  fontFamily: "Playfair Display" }} variant={isDownMediumDevice ? 'h6' : 'h3'}>Come To Our Events For More Info</Typography>
            <Box>
                <Grid container spacing={2}>
                    {
                        eventData.map((d, i) => (
                            <Grid key={i} item lg={6}>
                                <Box sx={{ backgroundImage: `url(${d.backgroundImage})`, minHeight: 320, borderRadius: 5 }}>
                                    <Box component={"div"} sx={{ backgroundColor: "rgba(0,0,0,0.6)", minHeight: 320, p: { lg: 4 }, borderRadius: 5, }}>
                                        <Box sx={{p: {sm: 2, xs: 2}}}>
                                        <Typography sx={{ color: theme => theme.palette.common.white, fontFamily: "Playfair Display" }} variant='h5'>{d.title}</Typography>
                                        <Box sx={{ width: "100%", pt: 1, }}>
                                            <Grid container spacing={2}>
                                                <Grid item lg={6}>
                                                    <Typography sx={{ color: theme => theme.palette.common.white, fontFamily: "Playfair Display" }}>{d.time}</Typography>
                                                </Grid>
                                                <Grid item lg={6}>
                                                    <Typography sx={{ color: theme => theme.palette.common.white }} variant='caption' component={"p"}>{d.location}</Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                        <Box>
                                            <Typography sx={{ color: theme => theme.palette.common.white }} variant='body1'>{d.description}</Typography>
                                        </Box>
                                        <Box m={4}>
                                            <Grid container spacing={2}>
                                                {d.buttons.map((b, i) => <Grid item lg={6}>
                                                    <Button size='large' sx={{ borderRadius: 30 }} variant={b.variant}>{b.title}</Button>
                                                </Grid>)}
                                            </Grid>
                                        </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>))
                    }
                </Grid>
            </Box>
            <Box sx={{ mt: { lg: 10 } }}>
                <Typography sx={{ color: theme => theme.palette.primary.light, textTransform: "uppercase" }} textAlign={"center"} variant='h6'>Meet oUR Team</Typography>
                <Typography sx={{ textAlign: 'center', p: 1, fontFamily: "Playfair Display" }} variant={isDownMediumDevice ? "h5" : 'h3'}>Our Passionate Volunteers</Typography>
                <Box>
                    <Grid container spacing={2}>
                        {
                            teamData.map((d, i) => (
                                <Grid key={i} item lg={4}>
                                    <Box>
                                        <Box sx={{ backgroundImage: `url(${d.photo})`, height: d.height, borderRadius: 5 }} />
                                        <Box sx={{ px: { lg: 4 }, mt: { lg: -10, md: -9, sm: -8, xs: -7,   } }}>
                                            <Paper elevation={5} sx={{ minHeight: 200, borderRadius: 5, p: { lg: 4, xs: 2, sm: 2 } }}>
                                                <Typography sx={{ color: theme => theme.palette.primary.light, textTransform: "uppercase" }}>{d.title}</Typography>
                                                <Typography variant='h4' sx={{fontFamily: "Playfair Display"}}>{d.name}</Typography>
                                                <Typography variant='body1' sx={{}}>{d.bio}</Typography>
                                                <Box>
                                                    <Grid container spacing={2}>
                                                    {d.social.map((s, k) => {
                                                        const SocialIcon = iconData[s.name]
                                                        return(
                                                            <Grid lg={4} item key={k}>
                                                                <IconButton sx={{border: theme => `1px solid ${theme.palette.primary.light}`}}>
                                                                    <SocialIcon color="primary" />
                                                                </IconButton>
                                                            </Grid>
                                                            )
                                                    })}
                                                    </Grid>
                                                </Box>
                                            </Paper>
                                        </Box>
                                    </Box>
                                </Grid>))
                        }
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
}

export default HomeEventSection