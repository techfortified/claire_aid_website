import { useMediaDeviceSizes } from '@/hooks';
import { Check } from '@mui/icons-material'
import { Box, Button, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const data = ["Education", "Relief", "Community Development", "Trauma Healing"]

const volunteerData = [{title: "Volunteer", total: 30, suffix:"+"}, {title: "Partners", total: 5, suffix:"+"}, {title: "Projects", total: 8, suffix:"+"}, {title: "Impacted", total: 3, suffix:"K+"}]

const HomeAboutSection = () => {
    const {isDownMediumDevice} = useMediaDeviceSizes()
  return (
    <Box sx={{p: {lg: 15, md: 6, sm: 4, xs: 2}, mb: {xs: 4}}}>
        <Grid container spacing={2}>
            <Grid item lg={6} xs={12} sm={12}>
                <Box sx={{
                    backgroundImage: `url(/founder.jpg)`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: "100%", 
                    backgroundRepeat: "no-repeat",
                    height: 500,
                    borderRadius: 10
                    }}>

                </Box>
                <Box sx={{mt: {lg: -15, xs: -10}, pr: {lg: 4}, pl: {lg: 4}}}>
                    <Paper elevation={4} sx={{height: 150, borderRadius: 5, backgroundColor: theme => theme.palette.primary.main, p: {xs: 2}}}>
                        <Grid container spacing={1} sx={{p: {lg: 2}}}>
                                {volunteerData.map((d, i) =>(<Grid key={i} item lg={3} xs={3} sm={3} md={3}>
                                    <VisibilitySensor partialVisibility offset={{ bottom: 200 }}>
                                        {({ isVisible }) => (
                                            <Typography sx={{color: theme => theme.palette.common.white, textAlign: "center", height: 50, fontFamily: "Playfair Display"}} variant={isDownMediumDevice ? "h6" :"h3"}> 
                                               {isVisible && <CountUp duration={5} delay={0} end={d.total} suffix={d.suffix} /> }
                                            </Typography>
                                        )}
                                    </VisibilitySensor>                   
                                    <Typography sx={{color: theme => theme.palette.common.white, textTransform: "uppercase", textAlign: "center", fontSize: isDownMediumDevice && 10}} variant={isDownMediumDevice ? "body2" :"h6"}>{d.title}</Typography>
                                </Grid>))}
                        </Grid>
                    </Paper>
                </Box>
            </Grid>

            <Grid item lg={6}>
                <Box>
                    <Typography variant='h5' color="text.primary">
                    ABOUT US
                    </Typography>
                    <Typography variant='h3' sx={{fontFamily: "Playfair Display"}}>
                    A Message From Our Founder
                    </Typography> 

                    <Typography variant='p'>
                    After moving to Jebbu Miango in 2019, we were confronted with a problem that we could not shy away from. Our neighbours had a need for basic amenities. Although we did not have all the wealth in the world, we knew we could give our time and little resources. Today, we have seen many others join us in this vision. So far, we have intervened in the following areas.
                    </Typography>
                    <Box sx={{m: {lg: 4}}}>
                        <Grid container spacing={2}>
                            <Grid item lg={6}>
                                <Box sx={{height: "100%"}}>
                                {data.map(item => (<Box key={item} sx={{display: 'flex'}}><Check /> <Typography>{item}</Typography></Box>))}
                                <Button variant='contained' size='large' sx={{borderRadius: 30, mt: 2, mb: 2}}>Learn More</Button>
                                </Box>
                            </Grid>
                            <Grid item lg={6}>
                                <Paper elevation={4} sx={{height: "100%", width: 200, p: 1, backgroundColor: theme => theme.palette.primary.main, color: theme => theme.palette.common.white,}}>
                                        <Typography textAlign={"center"} variant='h3' sx={{fontFamily: "Playfair Display"}}>4</Typography>
                                        <Typography textAlign={"center"} variant='h4' sx={{fontFamily: "Playfair Display"}}>Years</Typography>
                                        <Typography textAlign={"center"} variant='h5' sx={{fontFamily: "Playfair Display"}}>OF EXPERIENCE</Typography>

                                </Paper>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </Box>
  )
}

export default HomeAboutSection