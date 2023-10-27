import React from 'react'
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';
import MedicalServicesSharpIcon from '@mui/icons-material/MedicalServicesSharp';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { Box, Grid, IconButton, Paper, Typography } from '@mui/material'
import { useMediaDeviceSizes } from '@/hooks';

const aboutData = [
    {
        title: "Quality Education",
        icon: LocalLibrarySharpIcon
    },
    {
        title: "Trauma Healing",
        icon: MedicalServicesSharpIcon
    },
    {
        title: "Community Development",
        icon: Diversity1Icon
    }
]


const AboutDetailsSection = () => {
    const {isDownMediumDevice} = useMediaDeviceSizes()

    return (
        <Box sx={{ p: { lg: 15, md: 6, sm: 4, xs: 2 } }}>
            <Grid container spacing={2}>
                <Grid item lg={6}>
                    <Box>
                        <Typography sx={{ color: theme => theme.palette.primary.light, fontFamily: "Playfair Display" }} variant={isDownMediumDevice ? 'h6' : 'h4'}>
                            Empowered And Inspired Vulnerable Communities
                        </Typography>
                        <Typography>
                            Claire Aid Foundation is more a story of individuals taking simple steps of obedience to God and growing in service of King and country and less of a long conceived dream. And a story of God sent donors and supporters who God is using to heal our world. Join us today and we hope you find your Claire Story. Watch our Lead Coordinator tell her Claire Story.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item lg={6}>
                    <Box>
                        <Typography>
                            Claire Aid Foundation is a Non-Governmental Organization in Jos, Nigeria, officially institutionalised in early 2022, with RC175906.

                            Our Foundation has been at work since 2019 under the name of our pilot project- Jebbu Miango Reads. Claire Aid Foundation is made up of individuals who are passionate about empowering people and mending broken lives and communities. We are passionate about Quality Education, No poverty, Good health and well-being. The UN SDGs 4, 1, and 3 respectively.

                            Here's a quick overview of our history to help you understand who we are and the work we do.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box mt={4}>
                <Grid container spacing={2}>
                    {
                        aboutData.map((d, i) => {
                            const AboutIcon = d.icon
                            return (<Grid key={i} item lg={4} md={4} sm={12} xs={12}>
                                <Paper elevation={2} sx={{ p: 4, height: "100%", backgroundColor: '#F1F5F9' }}>
                                    <Box sx={{ width: "100%", pt: 1, textAlign: 'center' }}>
                                        <IconButton sx={{ height: 70, width: 70, border: theme => `1px solid ${theme.palette.secondary.main}` }}>
                                            <AboutIcon color="primary" />
                                        </IconButton>
                                        <Typography variant='h5' sx={{fontFamily: "Playfair Display"}}>{d.title}</Typography>
                                    </Box>
                                </Paper>
                            </Grid>)
                        })
                    }
                </Grid>
            </Box>
            <Box sx={{ mt: { lg: 20 } }}>
                <Grid container>
                    <Grid item lg={3}>
                        <Paper elevation={2} sx={{ p: 2, height: "100%", bgcolor: theme => theme.palette.primary.main, position: 'relative', zIndex: 99, mt: { lg: -10 }, mr: { lg: -20 } }}>
                            <Box sx={{ border: theme => `1px solid ${theme.palette.common.white}`, borderRadius: 2, height: "100%" }}>
                                <Box sx={{ width: "100%", p: 2, textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100%' }}>
                                    <Typography sx={{ color: theme => theme.palette.grey[300], fontFamily: "Playfair Display" }} variant='h4'>Help Is Our Main Goal!</Typography>
                                    <Typography sx={{ color: theme => theme.palette.common.white }} variant='body1'>To reach out to vulnerable communities with basic education, community development strategies, counselling and trauma healing services.</Typography>
                                </Box>
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item lg={9} xs={12}>
                        <Paper elevation={2} sx={{ height: "100%", backgroundColor: '#F1F5F9' }}>
                            <Box sx={{
                                backgroundImage: "url(/ngo-carousel-2.jpg)",
                                backgroundRepeat: "no-repeat",
                                backgroundBlendMode: "darken",
                                backgroundPosition: 'center',
                                backgroundSize: "cover",
                                height: 360,
                                borderRadius: 1
                            }}>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export default AboutDetailsSection